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

export { CCLogger, EnumUtils, MathUtils, NativeLogger };
