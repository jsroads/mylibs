/**
 * Created by jsroads on 2022/8/12 15:04
 * Note:
 * @see https://www.cnblogs.com/xieqian/p/10023203.html
 */

const fs = require("fs");
const {GameConst} = require("./GameConst");

const fileProName = "project.config.json";

//写入文件，会完全替换之前JSON文件中的内容
function changeWXtool() {
    //修改main.js
    console.log(`开始修改${fileProName}`)
    try {
        // const dir = "D:\\Build\\mini\\wx\\wechatgame\\";
        const dir = `${GameConst.wxToolProjectRoot}\\${GameConst.platform}\\`;
        const path = `${dir}${fileProName}`;
        if (fs.existsSync(path)) {
            let data = fs.readFileSync(path, 'utf8')
            let resultString = data.replace(`useStaticServer": false`, `useStaticServer": true`);
            resultString = resultString.replace(`"urlCheck": true`, `"urlCheck": false`);
            try {
                fs.writeFile(path, resultString, () => {
                    console.log(`更改${fileProName} 成功`);
                })
            } catch (e) {
                console.log('Invalid Javascript Object Entered entered.');
            }
        }
    } catch (err) {
        console.error(err)
    }
}

exports.changeWXtool = changeWXtool;

// changeWXtool();