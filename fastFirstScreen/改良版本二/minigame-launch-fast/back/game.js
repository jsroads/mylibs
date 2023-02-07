"use strict";

const pf = globalThis.tt || globalThis.ks || globalThis.wx;

// 渲染首屏（开发者工具执行有渲染问题，所以开发者工具上不渲染）

const createCanvas = pf.createCanvas;

pf.__first__canvas = createCanvas();

let first = true;
pf.createCanvas = function () {
    if (first) {
        first = false;
        return wx.__first__canvas;
    } else {
        return createCanvas();
    }
}

const data = pf.getSystemInfoSync();

if (data.platform != "devtools") {
    const first_scene = require("./first-screen.js");
    first_scene.drawImg("first.jpg");
}

if (pf.loadSubpackage) {
    pf.loadSubpackage({
        name: 'engine',
        success: () => {
        }
    })
} else {
    require('./subpackages/engine/game');
}