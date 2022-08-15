/**
 * Created by jsroads on 2022/8/12 15:04
 * Note:
 * @see https://www.cnblogs.com/xieqian/p/10023203.html
 */
const fs = require('fs');
const path = require('path');
const JSZip = require('../libs/jszip');
const config = {
    dir:""// 文件根目录
}
/**
 * 把mtl文件和obj文件打包成zip压缩包
 * @param dir 文件根目录
 * @param  {} fileName 不带文件后缀的文件名
 * @param  {} {delSource = false } = {} 是否删除源文件
 */
function toZipOfMtlObj (dir,fileName, { delSource = false } = {}) {
    config.dir = dir;
    const zip = new JSZip();
    const extArr = ['.json'];
    extArr.forEach(ext => {
        let file = fileName + ext;
        let content = getFileContent(fileName + ext);
        zip.file(file, content);
    })

    // 压缩
    zip.generateAsync({
        // 压缩类型选择nodebuffer，在回调函数中会返回zip压缩包的Buffer的值，再利用fs保存至本地
        type: "nodebuffer",
        // 压缩算法
        compression: "DEFLATE",
        compressionOptions: {
            level: 9
        }
    }).then(function (content) {
        let zip = fileName + '.zip';
        // 写入磁盘
        fs.writeFile(getFullFileName(zip), content, function (err) {
            if (!err) {
                // 是否删除源文件
                if (delSource) {
                    extArr.forEach(ext => {
                        delFile(fileName + ext);
                    })
                }
                console.log(zip + '压缩成功');
            } else {
                console.log(zip + '压缩失败');
            }
        });
    });
}

/**
 * 获取文件内容
 * @param  {string} fileName 文件名 file.mtl
 */
function getFileContent (fileName) {　　 // 指定encoding会返回一个string，否则返回一个Buffer
    let content = fs.readFileSync(getFullFileName(fileName), { encoding: "utf-8" });
    return content;
}

/**
 * 获取完整文件路径
 * @param  {string} fileName 文件名 file.mtl
 */
function getFullFileName (fileName) {
    return path.join(config.dir, fileName);
}

/**
 * 删除文件
 * @param  {string} fileName 文件名 file.mtl
 */
function delFile (fileName) {
    fs.unlink(getFullFileName(fileName), function (err) {
        if (!!err) {
            console.log('删除文件失败：' + fileName);
        }
    });
}

function delJSFile(fileName){
    delFile(`${fileName}.js`);
}
// exports.initConfig = initConfig
exports.toZipOfMtlObj = toZipOfMtlObj
exports.delJSFile = delJSFile