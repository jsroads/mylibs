function setup(e) {
    function n(e) {
        let r, s, o, l = null;

        function a(...e) {
            if (!a.enabled) return;
            const t = a, s = Number(new Date), o = s - (r || s);
            t.diff = o, t.prev = r, t.curr = s, r = s, e[0] = n.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
            let l = 0;
            e[0] = e[0].replace(/%([a-zA-Z%])/g, ((r, s) => {
                if ("%%" === r) return "%";
                l++;
                const o = n.formatters[s];
                if ("function" == typeof o) {
                    const n = e[l];
                    r = o.call(t, n), e.splice(l, 1), l--
                }
                return r
            })), n.formatArgs.call(t, e);
            (t.log || n.log).apply(t, e)
        }

        return a.namespace = e, a.useColors = n.useColors(), a.color = n.selectColor(e), a.extend = t, a.destroy = n.destroy, Object.defineProperty(a, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => null !== l ? l : (s !== n.namespaces && (s = n.namespaces, o = n.enabled(e)), o),
            set: e => {
                l = e
            }
        }), "function" == typeof n.init && n.init(a), a
    }

    function t(e, t) {
        const r = n(this.namespace + (void 0 === t ? ":" : t) + e);
        return r.log = this.log, r
    }

    function r(e) {
        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
    }

    return n.debug = n, n.default = n, n.coerce = function (e) {
        if (e instanceof Error) return e.stack || e.message;
        return e
    }, n.disable = function () {
        const e = [...n.names.map(r), ...n.skips.map(r).map((e => "-" + e))].join(",");
        return n.enable(""), e
    }, n.enable = function (e) {
        let t;
        n.save(e), n.namespaces = e, n.names = [], n.skips = [];
        const r = ("string" == typeof e ? e : "").split(/[\s,]+/), s = r.length;
        for (t = 0; t < s; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.slice(1) + "$")) : n.names.push(new RegExp("^" + e + "$")))
    }, n.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        let t, r;
        for (t = 0, r = n.skips.length; t < r; t++) if (n.skips[t].test(e)) return !1;
        for (t = 0, r = n.names.length; t < r; t++) if (n.names[t].test(e)) return !0;
        return !1
    }, n.humanize = require("ms"), n.destroy = function () {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }, Object.keys(e).forEach((t => {
        n[t] = e[t]
    })), n.names = [], n.skips = [], n.formatters = {}, n.selectColor = function (e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
        return n.colors[Math.abs(t) % n.colors.length]
    }, n.enable(n.load()), n
}

module.exports = setup;

function useColors() {
    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
}

function formatArgs(e) {
    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff), !this.useColors) return;
    const o = "color: " + this.color;
    e.splice(1, 0, o, "color: inherit");
    let t = 0, C = 0;
    e[0].replace(/%[a-zA-Z%]/g, (e => {
        "%%" !== e && (t++, "%c" === e && (C = t))
    })), e.splice(C, 0, o)
}

function save(e) {
    try {
        e ? exports.storage.setItem("debug", e) : exports.storage.removeItem("debug")
    } catch (e) {
    }
}

function load() {
    let e;
    try {
        e = exports.storage.getItem("debug")
    } catch (e) {
    }
    return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
}

function localstorage() {
    try {
        return localStorage
    } catch (e) {
    }
}

exports.formatArgs = formatArgs, exports.save = save, exports.load = load, exports.useColors = useColors, exports.storage = localstorage(), exports.destroy = (() => {
    let e = !1;
    return () => {
        e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
    }
})(), exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], exports.log = console.log || console.debug || console.log || (() => {
}), module.exports = setup(exports);
const {formatters: formatters,log:log} = module.exports;

// 将 common.js 的逻辑合并到这里
function init(debug) {
    // common.js 的 init 函数内容
}

function coerce(val) {
    // common.js 的 coerce 函数内容
}

exports.init = init;
exports.coerce = coerce;

exports.formatters = {
    // 根据你的需求添加或调整 formatters 的内容
    j: function (v) {
        try {
            return JSON.stringify(v);
        } catch (error) {
            return '[UnexpectedJSONParseError]: ' + error.message;
        }
    }
};

// 定义 logCost 装饰器
function logCost(target, name, descriptor) {
    const original = descriptor && descriptor.value;
    if (typeof original === "function") {
        descriptor.value = function (...args) {
            const start = typeof performance !== 'undefined' ? performance.now() : Date.now();

            try {
                const result = original.apply(this, args);

                // 处理同步方法
                if (result && typeof result.then === "function") {
                    return result.then((res) => {
                        const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                        log(`🥰:${name} ${(end - start).toFixed(2)}ms`);
                        return res;
                    }).catch((err) => {
                        const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                        log(`🥰:${name} ${(end - start).toFixed(2)}ms`);
                        throw err;
                    });
                } else {
                    const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                    log(`🥰:${name} ${(end - start).toFixed(2)}ms`);
                    return result;
                }
            } catch (e) {
                const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                log(`🥰:${name} ${(end - start).toFixed(2)}ms`);
                throw e;
            }
        };
    }
    return descriptor;
}

// 导出 logCost 装饰器
module.exports.logCost = logCost;

