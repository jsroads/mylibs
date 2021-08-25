/**
 * Created by jsroads on 2020/6/11.3:00 下午
 * Note:
 */


export enum HttpCode {
    kNetworkAnomaly = 0,
    kSuccess = 200,
    kTimeout = 10000,
}

export interface IResponse {
    status: number;
    response: any;
    error: boolean;
}

export default class HttpRequest {
    public static doGet(url: string, params: any, cb: Function, headers: any[]) {
        if (params) {
            if (url.indexOf("?") == -1) {
                url += "?";
            }
            url += HttpRequest.getQueryString(params);
        }
        this.doHttp(url, headers, null, "GET", cb);
    }

    public static doPost(url: string, params: any, cb: Function, headers: any[]) {
        if (params) {
            params = HttpRequest.getQueryString(params);
        }
        this.doHttp(url, headers, params, "POST", cb);
    }

    public static doDownload() {

    }

    /**
     *把一个对象 变成
     *key1=value1&key2=value2
     *格式
     */
    public static getQueryString(params: { [x: string]: any; }) {
        const tmps: string[] = [];
        for (let key in params) {
            tmps.push(`${key}=${params[key]}`);
        }
        return tmps.join("&");
    }

    private static doHttp(url: string, headers: any[], params: any, method: string, cb: Function) {
        console.log(`HttpService, doHttp url=${url}, method=${method}`);
        console.log(`doHttp:headers = ${JSON.stringify(headers)}`);
        console.log(`doHttp:parmas = ${JSON.stringify(params)}`);
        let xhr = new XMLHttpRequest();
        xhr.timeout = HttpCode.kTimeout;
        xhr.ontimeout = (ev) => {
            console.log('http_post: request time out.....');
            // callback && callback(xhr.status, xhr.responseText,true);
        };
        xhr.onabort = (ev) => {
            console.log('http_post: request onabort......');
        };
        xhr.onerror = (ev) => {
            cb && cb({status: xhr.status, response: null, error: true});
            console.log('http_post: request onerror......');
        };
        xhr.onreadystatechange = (ev) => {
            if (xhr.readyState === 4) {
                if (xhr.status == 0) {
                    cb && cb({status: xhr.status, response: null, error: true});
                } else {
                    cb && cb({
                        status: xhr.status,
                        response: JSON.parse(xhr.responseText),
                        error: false
                    });
                }
            } else {
                // cb && cb.runWith({status:xhr.status,responseText:xhr.responseText,error:true});
            }
        };
        xhr.open('POST', encodeURI(url), true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        if (headers) {
            headers.forEach((value: any) => {
                xhr.setRequestHeader(value.key, value.value);
            });
        }
        xhr.send(params);
    }

    private static removeXhrEvent(xhr: XMLHttpRequest) {
        xhr.ontimeout = null;
        xhr.onerror = null;
        xhr.onabort = null;
        xhr.onreadystatechange = null;
    }

    private static notifyCallback(cb: Function, code: number, data?: any) {
        if (cb) {
            let result = {code: code, data: data};
            cb(result);
        }
    }

    private static setHttpHeaders(xhr: XMLHttpRequest, headers: any) {
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
    }

}
