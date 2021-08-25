const namespace = 'axios-retry';
/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isNetworkError(error) {
    return (
        !error.response &&
        Boolean(error.code) && // Prevents retrying cancelled requests
        error.code !== 'ECONNABORTED' && // Prevents retrying timed out requests
        isRetryAllowed(error)
    ); // Prevents retrying unsafe errors
}

const SAFE_HTTP_METHODS = ['get', 'head', 'options'];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isRetryableError(error) {
    return (
        error.code !== 'ECONNABORTED' &&
        (!error.response || (error.response.status >= 500 && error.response.status <= 599))
    );
}

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isSafeRequestError(error) {
    if (!error.config) {
        // Cannot determine if the request can be retried
        return false;
    }

    return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isIdempotentRequestError(error) {
    if (!error.config) {
        // Cannot determine if the request can be retried
        return false;
    }

    return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isNetworkOrIdempotentRequestError(error) {
    return isNetworkError(error) || isIdempotentRequestError(error);
}

/**
 * @return {number} - delay in milliseconds, always 0
 */
function noDelay() {
    return 0;
}

/**
 * @param  {number} [retryNumber=0]
 * @return {number} - delay in milliseconds
 */
export function exponentialDelay(retryNumber = 0) {
    const delay = Math.pow(2, retryNumber) * 100;
    const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
    return delay + randomSum;
}

/**
 * Initializes and returns the retry state for the given request/config
 * @param  {AxiosRequestConfig} config
 * @return {Object}
 */
function getCurrentState(config) {
    const currentState = config[namespace] || {};
    currentState.retryCount = currentState.retryCount || 0;
    config[namespace] = currentState;
    return currentState;
}

/**
 * Returns the axios-retry options for the current request
 * @param  {AxiosRequestConfig} config
 * @param  {AxiosRetryConfig} defaultOptions
 * @return {AxiosRetryConfig}
 */
function getRequestOptions(config, defaultOptions) {
    return Object.assign({}, defaultOptions, config[namespace]);
}

/**
 * @param  {Axios} axios
 * @param  {AxiosRequestConfig} config
 */
function fixConfig(axios, config) {
    if (axios.defaults.agent === config.agent) {
        delete config.agent;
    }
    if (axios.defaults.httpAgent === config.httpAgent) {
        delete config.httpAgent;
    }
    if (axios.defaults.httpsAgent === config.httpsAgent) {
        delete config.httpsAgent;
    }
}

/**
 * Adds response interceptors to an axios instance to retry requests failed due to network issues
 *
 * @example
 *
 * import axios from 'axios';
 *
 * axiosRetry(axios, { retries: 3 });
 *
 * axios.get('http://example.com/test') // The first request fails and the second returns 'ok'
 *   .then(result => {
 *     result.data; // 'ok'
 *   });
 *
 * // Exponential back-off retry delay between requests
 * axiosRetry(axios, { retryDelay : axiosRetry.exponentialDelay});
 *
 * // Custom retry delay
 * axiosRetry(axios, { retryDelay : (retryCount) => {
 *   return retryCount * 1000;
 * }});
 *
 * // Also works with custom axios instances
 * const client = axios.create({ baseURL: 'http://example.com' });
 * axiosRetry(client, { retries: 3 });
 *
 * client.get('/test') // The first request fails and the second returns 'ok'
 *   .then(result => {
 *     result.data; // 'ok'
 *   });
 *
 * // Allows request-specific configuration
 * client
 *   .get('/test', {
 *     'axios-retry': {
 *       retries: 0
 *     }
 *   })
 *   .catch(error => { // The first request fails
 *     error !== undefined
 *   });
 *
 * @param {Axios} axios An axios instance (the axios object or one created from axios.create)
 * @param {Object} [defaultOptions]
 * @param {number} [defaultOptions.retries=3] Number of retries
 * @param {boolean} [defaultOptions.shouldResetTimeout=false]
 *        Defines if the timeout should be reset between retries
 * @param {Function} [defaultOptions.retryCondition=isNetworkOrIdempotentRequestError]
 *        A function to determine if the error can be retried
 * @param {Function} [defaultOptions.retryDelay=noDelay]
 *        A function to determine the delay between retry requests
 */
export default function axiosRetry(axios, defaultOptions) {
    axios.interceptors.request.use(config => {
        const currentState = getCurrentState(config);
        currentState.lastRequestTime = Date.now();
        return config;
    });

    axios.interceptors.response.use(null, error => {
        const config = error.config;

        // If we have no information to retry the request
        if (!config) {
            return Promise.reject(error);
        }

        const {
            retries = 3,
            retryCondition = isNetworkOrIdempotentRequestError,
            retryDelay = noDelay,
            shouldResetTimeout = false
        } = getRequestOptions(config, defaultOptions);

        const currentState = getCurrentState(config);

        const shouldRetry = retryCondition(error) && currentState.retryCount < retries;

        if (shouldRetry) {
            currentState.retryCount += 1;
            const delay = retryDelay(currentState.retryCount, error);

            // Axios fails merging this configuration to the default configuration because it has an issue
            // with circular structures: https://github.com/mzabriskie/axios/issues/370
            fixConfig(axios, config);

            if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
                const lastRequestDuration = Date.now() - currentState.lastRequestTime;
                // Minimum 1ms timeout (passing 0 or less to XHR means no timeout)
                config.timeout = Math.max(config.timeout - lastRequestDuration - delay, 1);
            }

            config.transformRequest = [data => data];

            return new Promise(resolve => setTimeout(() => resolve(axios(config)), delay));
        }

        return Promise.reject(error);
    });
}
const denyList = new Set([
    'ENOTFOUND',
    'ENETUNREACH',

    // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
    'UNABLE_TO_GET_ISSUER_CERT',
    'UNABLE_TO_GET_CRL',
    'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
    'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
    'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
    'CERT_SIGNATURE_FAILURE',
    'CRL_SIGNATURE_FAILURE',
    'CERT_NOT_YET_VALID',
    'CERT_HAS_EXPIRED',
    'CRL_NOT_YET_VALID',
    'CRL_HAS_EXPIRED',
    'ERROR_IN_CERT_NOT_BEFORE_FIELD',
    'ERROR_IN_CERT_NOT_AFTER_FIELD',
    'ERROR_IN_CRL_LAST_UPDATE_FIELD',
    'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
    'OUT_OF_MEM',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    'SELF_SIGNED_CERT_IN_CHAIN',
    'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    'CERT_CHAIN_TOO_LONG',
    'CERT_REVOKED',
    'INVALID_CA',
    'PATH_LENGTH_EXCEEDED',
    'INVALID_PURPOSE',
    'CERT_UNTRUSTED',
    'CERT_REJECTED',
    'HOSTNAME_MISMATCH'
]);

// TODO: Use `error?.code` when targeting Node.js 14
export function isRetryAllowed(error) {
    return !denyList.has(error && error.code);
}
// Compatibility with CommonJS
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
