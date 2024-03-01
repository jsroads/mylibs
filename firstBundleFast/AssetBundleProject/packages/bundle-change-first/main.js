"use strict";
const fs = require("fs");
const path = require("path");
const miniAdapterActualPlatform = ["bytedance", "wechatgame"];
const webAdapterActualPlatform = ["web-mobile"];



const newLaunchScene = "db://assets/bundles/launch/MiniLaunchScene.fire";

const newLaunchBundle = `"launch"`;
function onBuildFinish(options, callback) {
    Editor.log("[bundle-change-first]", options.platform);
    if ("web-mobile" === options.platform) {
        if (webAdapterActualPlatform.indexOf(options.actualPlatform) === -1) {
            callback && callback();
            return;
        }
        modifySettings(options);
        modifyMainJS(options);
        Editor.success("[bundle-change-first]", "web-mobile首屏启动优化完成");
        callback();
    } else if ("mini-game" === options.platform) {
        if (miniAdapterActualPlatform.indexOf(options.actualPlatform) === -1) {
            callback && callback();
            return;
        }
        modifyMiniSettings(options);
        modifyMiniMainJS(options);
        Editor.success("[bundle-change-first]", "小游戏首屏启动优化完成");
        callback();
    }
}

function modifySettings(options) {
    const dirPath = path.join(options.dest, "src"); // 假设文件在 src 目录下


    // 列出目录中的所有文件
    fs.readdir(dirPath, function (err, files) {
        if (err) {
            console.error("Error reading the directory:", err);
            return;
        }

        // 正则表达式匹配文件名
        const regex = /^settings\.[0-9a-f]+\.js$/;
        files.forEach(function (file) {
            if (regex.test(file)) {
                // 匹配到的文件
                const filePath = path.join(dirPath, file);
                fs.readFile(filePath, "utf8", function (err, data) {
                    if (err) {
                        console.error("Error reading the file:", err);
                        return;
                    }
                    // 修改文件内容
                    let modifiedData = data.replace(/(launchScene\s*:\s*")([^"]*)(")/, `$1${newLaunchScene}$3`);

                    // 保存修改后的文件
                    fs.writeFile(filePath, modifiedData, "utf8", function (err) {
                        if (err) {
                            console.error("Error writing to the file:", err);
                            return;
                        }
                        console.log("File updated successfully");
                    });
                });
            }
        });
    });
}

function modifyMainJS(options) {
    const dirPath = options.dest; //main.js 目录下
    // 列出目录中的所有文件
    fs.readdir(dirPath, function (err, files) {
        if (err) {
            console.error("Error reading the directory:", err);
            return;
        }

        // 正则表达式匹配文件名
        const regex = /^main\.[0-9a-f]+\.js$/;
        files.forEach(function (file) {
            if (regex.test(file)) {
                // 匹配到的文件
                const filePath = path.join(dirPath, file);
                fs.readFile(filePath, "utf8", function (err, data) {
                    if (err) {
                        console.error("Error reading the file:", err);
                        return;
                    }
                    // 修改文件内容
                    let modifiedData = data.replace(/var bundleRoot = \[INTERNAL\];/, `var bundleRoot = [INTERNAL,${newLaunchBundle}];`);

                    // 保存修改后的文件
                    fs.writeFile(filePath, modifiedData, "utf8", function (err) {
                        if (err) {
                            console.error("Error writing to the file:", err);
                            return;
                        }
                        console.log("File updated successfully");
                    });
                });
            }
        });
    });
}

function modifyMiniSettings(options) {
    const filePath = path.join(options.dest, "src", "settings.js"); // settings.js 文件的实际路径
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        // 使用正则表达式查找和替换值
        let modifiedData = data.replace(/(launchScene\s*:\s*")([^"]*)(")/, `$1${newLaunchScene}$3`);
        // modifiedData = modifiedData.replace(/(server\s*:\s*")[^"]*(")/, `$1"${newServer}"`);

        // 将修改后的内容写回文件
        fs.writeFile(filePath, modifiedData, "utf8", function (err) {
            if (err) {
                console.error("Error writing to the file:", err);
                return;
            }
            console.log("File updated successfully");
        });
    });
}

function modifyMiniMainJS(options) {
    const filePath = path.join(options.dest, "main.js"); // main.js 文件的实际路径
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        // 使用正则表达式查找和替换值
        let modifiedData = data.replace(/var bundleRoot = \[INTERNAL\];/, `var bundleRoot = [INTERNAL,${newLaunchBundle}];`);

        // 将修改后的内容写回文件
        fs.writeFile(filePath, modifiedData, "utf8", function (err) {
            if (err) {
                console.error("Error writing to the file:", err);
                return;
            }
            console.log("File updated successfully");
        });
    });
}

module.exports = {
    load() {
        // Editor.Builder.on('build-start', onBuildStart);
        Editor.Builder.on("build-finished", onBuildFinish);
    },

    unload() {
        // Editor.Builder.removeListener('build-start', onBuildStart);
        Editor.Builder.removeListener("build-finished", onBuildFinish);
    },
    messages: {},
};