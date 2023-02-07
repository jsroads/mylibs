


loadCC();


function loadCC() {
    require('./web-adapter');
    // Adapt for IOS, swap if opposite
    if (canvas){
        var _w = canvas.width;
        var _h = canvas.height;
        if (screen.width < screen.height) {
            if (canvas.width > canvas.height) {
                _w = canvas.height;
                _h = canvas.width;
            }
        } else {
            if (canvas.width < canvas.height) {
                _w = canvas.height;
                _h = canvas.width;
            }
        }
        canvas.width = _w;
        canvas.height = _h;
    }

    // Adjust initial canvas size
    if (canvas && window.devicePixelRatio >= 2) {canvas.width *= 2; canvas.height *= 2;}

    const firstScreen = require("./fastScreen/first-screen");
    //初始化进度
    let progress = 0.10;
    firstScreen.start("fastScreen/first.jpg", "default", "default", "false").then((image) => {
        return firstScreen.setProgress(progress).then(() => Promise.resolve());
    }).then(() => {
        return onApplicationCreated();
    }).catch((err) => {
        console.error(err);
    });
    const t = new Date().getTime();
    function onApplicationCreated() {
        const {loadEngine, applicationStart} = require("./fastScreen/application.js");
        let p =  Promise.resolve();
        return p.then((value) => {
            return firstScreen.setProgress(0.15).then(() => Promise.resolve());
        }).then(() => {
            return loadEngine("engine", (res) => {
                console.log(`engine包下载进度:${res.progress}已下载:${res.totalBytesWritten}总长度:${res.totalBytesExpectedToWrite}`);
                if (res.progress > 0) {
                    progress = Math.min(99, res.progress) * 0.40;
                    progress = parseInt(progress) * 0.01 + 0.15;
                    console.log(`engine包模拟加载:${progress}`);
                    return firstScreen.setProgress(progress).then(() => Promise.resolve());
                }
            }).then(() => {
                return firstScreen.end().then(() => applicationStart({
                    findCanvas: () => {

                    },
                }));
            });
        })
    }
}
