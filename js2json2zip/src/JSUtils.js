/**
 * Created by jsroads on 2022/8/12 15:04
 * Note:
 *
 */
const fs = require("fs");
const {GameConst} = require("./GameConst");
const fileMainName = "main";
const fileGameName = "game";
//写入文件，会完全替换之前JSON文件中的内容
function changeJS() {
    //修改main.js
    console.log(`开始修改${fileMainName}.js`)
    try {
        // const dir = "D:\\Build\\mini\\wx\\wechatgame\\engine\\";
        const dir = `${GameConst.wxToolProjectRoot}\\${GameConst.platform}\\${GameConst.subPackageFileName}\\`;
        const pathMain = `${dir}${fileMainName}.js`;
        if (fs.existsSync(pathMain)) {
            let data = fs.readFileSync(pathMain, 'utf8')
            if (data.indexOf('async') === -1) {
                let resultString = data.replace(`"use strict";`, `"use strict";\n \n const {loadSettingsJson,composeSettings,loadSettingsZip} = require("../fastScreen/application");`)
                resultString = resultString.replace(`window.boot = function () {`, `window.boot = async function () { \n  await loadSettingsZip(); \n  await composeSettings(window._CCSettings); \n`)
                if (!resultString) return;
                try {
                    fs.writeFile(pathMain, resultString, () => {
                        console.log(`更改${fileMainName}.js 成功`);
                    })
                } catch (e) {
                    console.log('Invalid Javascript Object Entered entered.');
                }
            } else {
                console.log(`无须修改${fileMainName}.js`)
            }

        }
    } catch (err) {
        console.error(err)
    }


    //修改game.js
    try {
        // const dir = "D:\\Build\\mini\\wx\\wechatgame\\engine\\";
        const dir = `${GameConst.wxToolProjectRoot}\\${GameConst.platform}\\${GameConst.subPackageFileName}\\`;
        const pathGame = `${dir}${fileGameName}.js`;
        if (fs.existsSync(pathGame)) {
            console.log(`开始修改${fileGameName}.js`)
            let gameData = fs.readFileSync(pathGame, 'utf8')
            if (gameData.indexOf('settings') !== -1) {
                let gamedataString = gameData.replace(`require('./src/settings');`, ``)
                try {
                    fs.writeFile(pathGame, gamedataString, () => {
                        console.log(`更改${fileGameName}.js 成功`);
                    })
                } catch (e) {
                    console.log('Invalid Javascript Object Entered entered.');
                }
            } else {
                console.log(`无须修改${fileGameName}.js`)
            }

        }
    } catch (err) {
        console.error(err)
    }
}
exports.changeJS = changeJS;