/**
 * Created by jsroads on 2022/8/12 13:15
 * Note:
 */
console.log("开始运行")
const fs = require("fs");
const {toZipOfMtlObj, delJSFile} = require("./ZipUtils");
const {changeJS} = require("./JSUtils");
const {GameConst} = require("./GameConst");
const fileName = "settings";
const terse = true;

// window = typeof window == "undefined" ? global : window
// let resourcesPackage = require("./lib/settings.js")
//写入文件，会完全替换之前JSON文件中的内容
function jsToZip() {
    // const dir = "D:\\Build\\mini\\wx\\wechatgame\\engine\\src\\";
    const dir = `${GameConst.wxToolProjectRoot}\\${GameConst.platform}\\${GameConst.subPackageFileName}\\src\\`;
    const pathSettings = `${dir}${fileName}.js`
    try {
        if (fs.existsSync(pathSettings)) {
            let data = fs.readFileSync(pathSettings, 'utf8')
            let resourcesPackage = data.replace("window._CCSettings=", "")
            resourcesPackage = resourcesPackage.replace(";(function(e){var t=e.uuids,s=e.md5AssetsMap;for(var i in s)for(var r=s[i],n=0;n<r.length;n+=2)\"number\"==typeof r[n]&&(r[n]=t[r[n]])})(window._CCSettings);", "")
            if (typeof resourcesPackage === 'undefined') return;
            if (resourcesPackage.trim() !== "") {
                try {
                    if (resourcesPackage.trim().endsWith("...")) resourcesPackage = resourcesPackage.trim().slice(0, -3);
                    const o = eval('(' + resourcesPackage + ')');
                    let resultValue = JSON.stringify(o, null, terse ? 0 : 3);
                    fs.writeFile(`${pathSettings.replace(".js", ".json")}`, resultValue, () => {
                        console.log('写入json成功');
                        toZipOfMtlObj(dir, fileName, {delSource: true});
                        delJSFile(fileName);
                    })
                } catch (e) {
                    console.log('Invalid Javascript Object Entered entered.');
                }
            }
        }
    } catch (err) {
        console.error(err)
    }

}

//压缩 settings
jsToZip();
//修改相关对应代码
changeJS()
