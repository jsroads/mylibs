(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(self, () => {
    return /******/ (() => { // webpackBootstrap
        /******/ 	"use strict";
        /******/ 	var __webpack_modules__ = ([
            /* 0 */,
            /* 1 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "CCLogger": () => (/* binding */ CCLogger)
                    /* harmony export */ });
                class CCLogger {
                    constructor() {
                        this._option = null;
                    }
                    init(option) {
                        this._option = option;
                    }
                    log(...args) {
                        this._option && this._option.enableLog && console.log.apply(null, args);
                    }
                    debug(...args) {
                        this._option && this._option.enableLog && console.debug.apply(null, args);
                    }
                    info(...args) {
                        this._option && this._option.enableLog && console.info.apply(null, args);
                    }
                    warn(...args) {
                        this._option && this._option.enableLog && console.warn.apply(null, args);
                    }
                    error(...args) {
                        this._option && this._option.enableLog && console.error.apply(null, args);
                    }
                }


                /***/ }),
            /* 2 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "NativeLogger": () => (/* binding */ NativeLogger)
                    /* harmony export */ });
                class NativeLogger {
                    constructor() {
                        this._option = null;
                    }
                    init(option) {
                        this._option = option;
                    }
                    log(...args) {
                        this._option && this._option.enableLog && console.info(this._format(args));
                    }
                    debug(...args) {
                        this._option && this._option.enableLog && console.debug(this._format(args));
                    }
                    info(...args) {
                        this._option && this._option.enableLog && console.info(this._format(args));
                    }
                    error(...args) {
                        this._option && this._option.enableLog && console.error(this._format(args));
                    }
                    warn(...args) {
                        this._option && this._option.enableLog && console.warn(this._format(args));
                    }
                    /**
                     * 原生平台上不能直接打印object和array，因此这里将object和array转换为字符串进行输出，方便在 Android Logcat 中直接看 log 结果
                     */
                    _format(...args) {
                        let msg = "";
                        args.forEach((value, index, array) => {
                            if (value == null) {
                                msg += "null";
                            }
                            else {
                                const valType = typeof value;
                                if (valType === "string" || valType === "number") {
                                    msg += value;
                                }
                                else {
                                    msg += JSON.stringify(value);
                                }
                            }
                            if (index + 1 < array.length) {
                                msg += ",";
                            }
                        });
                        return msg;
                    }
                }


                /***/ }),
            /* 3 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "EnumUtils": () => (/* binding */ EnumUtils)
                    /* harmony export */ });
                /**
                 * Created by jsroads on 2022/6/10 18:28
                 * Note:
                 */
                class EnumUtils {
                    static getNamesAndValues(e) {
                        return this.getNames(e).map(_name => { return { name: _name, value: e[_name] }; });
                    }
                    static getNames(e) {
                        return this.getObjectValues(e).filter(v => typeof v === "string");
                    }
                    static getValues(e) {
                        return this.getObjectValues(e).filter(v => typeof v === "number");
                    }
                    static getObjectValues(e) {
                        return Object.keys(e).map(k => e[k]);
                    }
                }


                /***/ }),
            /* 4 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "MathUtils": () => (/* binding */ MathUtils)
                    /* harmony export */ });
                /**
                 * Created by jsroads on 2022/6/10 18:30
                 * Note:
                 */
                /**
                 * 数学计算工具类
                 */
                class MathUtils {
                    /**
                     * 弧度制转换为角度值
                     * @param radian 弧度制
                     * @returns {number}
                     */
                    static getAngle(radian) {
                        return 180 * radian / Math.PI;
                    }
                    /**
                     * 角度值转换为弧度制
                     * @param angle
                     */
                    static getRadian(angle) {
                        return angle / 180 * Math.PI;
                    }
                    /**
                     * 获取两点间弧度
                     * @param p1X
                     * @param p1Y
                     * @param p2X
                     * @param p2Y
                     * @returns {number}
                     */
                    static getRadian2(p1X, p1Y, p2X, p2Y) {
                        var xdis = p2X - p1X;
                        var ydis = p2Y - p1Y;
                        return Math.atan2(ydis, xdis);
                    }
                    /**
                     * 获取两点间距离
                     * @param p1X
                     * @param p1Y
                     * @param p2X
                     * @param p2Y
                     * @returns {number}
                     */
                    static getDistance(p1X, p1Y, p2X, p2Y) {
                        var disX = p2X - p1X;
                        var disY = p2Y - p1Y;
                        var disQ = disX * disX + disY * disY;
                        return Math.sqrt(disQ);
                    }
                    static toFixedStr(value, fixCount) {
                        return value.toFixed(fixCount).replace(/\.?0*$/, '');
                    }
                    static toPercentStr(value, fixCount) {
                        return this.toFixedStr(value * 100, fixCount) + "%";
                    }
                    static toFixedWan(value) {
                        const wanFix = 100000;
                        let wanFloat = wanFix / 10;
                        var v = Math.floor(value / wanFloat) * wanFloat;
                        return value > wanFix ? `${MathUtils.toFixedStr(v / wanFix * 10, 1)}万` : value.toString();
                    }
                    //value = ceil(e*(a*(level^d) + b*(level) + c))
                    static getFinalValueBasedOnParams(level, paramList, needCeil) {
                        if (paramList.length < 5) {
                            return 0;
                        }
                        let ret = paramList[4] * (paramList[0] * Math.pow(level, paramList[3]) + paramList[1] * level + paramList[2]);
                        if (needCeil) {
                            ret = Math.ceil(ret);
                        }
                        return ret;
                    }
                    /**
                     * 获取一个区间的随机数
                     * @param $from 最小值
                     * @param $end 最大值
                     * @returns {number}
                     */
                    static limit($from, $end) {
                        $from = Math.min($from, $end);
                        $end = Math.max($from, $end);
                        var range = $end - $from;
                        return $from + Math.random() * range;
                    }
                    /**
                     * 获取一个区间的随机数(帧数)
                     * @param $from 最小值
                     * @param $end 最大值
                     * @returns {number}
                     */
                    static limitInteger($from, $end) {
                        return Math.round(MathUtils.limit($from, $end));
                    }
                    /**
                     * 在一个数组中随机获取一个元素
                     * @param arr 数组
                     * @returns {any} 随机出来的结果
                     */
                    static randomArray(arr) {
                        var index = Math.floor(Math.random() * arr.length);
                        return arr[index];
                    }
                }


                /***/ })
            /******/ 	]);
        /************************************************************************/
        /******/ 	// The module cache
        /******/ 	var __webpack_module_cache__ = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/ 		// Check if module is in cache
            /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
            /******/ 		if (cachedModule !== undefined) {
                /******/ 			return cachedModule.exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = __webpack_module_cache__[moduleId] = {
                /******/ 			// no module.id needed
                /******/ 			// no module.loaded needed
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /************************************************************************/
        /******/ 	/* webpack/runtime/define property getters */
        /******/ 	(() => {
            /******/ 		// define getter functions for harmony exports
            /******/ 		__webpack_require__.d = (exports, definition) => {
                /******/ 			for(var key in definition) {
                    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                        /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                        /******/ 				}
                    /******/ 			}
                /******/ 		};
            /******/ 	})();
        /******/
        /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
        /******/ 	(() => {
            /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
            /******/ 	})();
        /******/
        /******/ 	/* webpack/runtime/make namespace object */
        /******/ 	(() => {
            /******/ 		// define __esModule on exports
            /******/ 		__webpack_require__.r = (exports) => {
                /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/ 			}
                /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
                /******/ 		};
            /******/ 	})();
        /******/
        /************************************************************************/
        var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
        (() => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "CCLogger": () => (/* reexport safe */ _log_CCLogger__WEBPACK_IMPORTED_MODULE_0__.CCLogger),
                /* harmony export */   "EnumUtils": () => (/* reexport safe */ _EnumUtils__WEBPACK_IMPORTED_MODULE_2__.EnumUtils),
                /* harmony export */   "MathUtils": () => (/* reexport safe */ _MathUtils__WEBPACK_IMPORTED_MODULE_3__.MathUtils),
                /* harmony export */   "NativeLogger": () => (/* reexport safe */ _log_NativeLogger__WEBPACK_IMPORTED_MODULE_1__.NativeLogger)
                /* harmony export */ });
            /* harmony import */ var _log_CCLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            /* harmony import */ var _log_NativeLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            /* harmony import */ var _EnumUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
            /* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
            /**
             * Created by jsroads on 2022/6/10 18:22
             * Note:
             */





        })();

        /******/ 	return __webpack_exports__;
        /******/ })()
        ;
});