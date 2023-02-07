const fs = require('fs');
const path = require("path");

/**
 * 递归创建文件
 * @param {*} dirName 
 * @param {*} mode 
 */
function mkdirSync(dirName, mode) {
    if (fs.existsSync(dirName)) {
        return true;
    }
    if (mkdirSync(path.dirname(dirName), mode)) {
        fs.mkdirSync(dirName, mode);
        return true;
    }
}
module.exports.mkdirSync = mkdirSync;

/**
 * 递归删除
 * @param {*} src 
 */
function rmSync(src) {
    if (fs.existsSync(src)) {
        if (isFile(src)) {
            fs.unlinkSync(src);
            return;
        }
        const files = fs.readdirSync(src);
        files.forEach((file) => {
            const curPath = path.join(src, file);
            if (isDirectory(curPath)) {
                rmSync(curPath);
            } else if (isFile(curPath)) {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(src);
    } else {
        console.error("删除文件失败，给定的路径不存在，请给出正确的路径", src);
    }
}
module.exports.rmSync = rmSync;

/**
 * 递归复制文件
 * @param {*} src 
 * @param {*} dst 
 */
function copySync(src, dst) {
    if (!fs.existsSync(src)) {
        console.error('原路径不存在', src);
        return;
    }
    if (isFile(src)) {
        let dstDir = path.parse(dst).dir;
        if (!fs.existsSync(dstDir)) {
            mkdirSync(dstDir);
        }
        fs.copyFileSync(src, dst);
    } else if (isDirectory(src)) {
        const files = fs.readdirSync(src);
        files.forEach((file) => {
            const srcPath = path.join(src, file);
            const dstPath = path.join(dst, file);
            copySync(srcPath, dstPath);
        });
    }
}
module.exports.copySync = copySync;


/**
 * 获取文件夹下所有文件路径
 * @param {*} src 
 */
function readdirAllSync(src) {
    return _readdirSync(src, []);
}
module.exports.readdirAllSync = readdirAllSync;

module.exports.readdirSync = fs.readdirSync;

function _readdirSync(src, paths) {
    paths = paths || [];
    const files = fs.readdirSync(src);
    files.forEach((file) => {
        const filePath = path.join(src, file);
        if (isFile(filePath)) {
            paths.push(filePath);
        } else if (isDirectory(filePath)) {
            _readdirSync(filePath, paths);
        }
    });
    return paths;
}


/**
 * 是否是文件
 * @param {*} path 
 */
function isFile(path) {
    const stat = fs.statSync(path);
    return stat.isFile();
}

/**
 * 是否是文件夹
 * @param {*} path 
 */
function isDirectory(path) {
    const stat = fs.statSync(path);
    return stat.isDirectory();
}

function size(path) {
    const stat = fs.statSync(path);
    return stat.size;
}
module.exports.size = size;

function writeFileSync(p, data, option) {
    const dirName = path.parse(p).dir;
    if (!fs.existsSync(path)) {
        mkdirSync(dirName);
    }
    fs.writeFileSync(p, data, option);
}
module.exports.writeFileSync = writeFileSync;

module.exports.readFileSync = fs.readFileSync;

/**
 * 文件或文件夹是否存在
 * @param {*} dirName 
 */
module.exports.exists = fs.existsSync;

/**
 * 拼接路径
 */
module.exports.join = path.join;

/**
 * 读取后缀
 */
module.exports.extname = path.extname;

module.exports.relative = path.relative;

module.exports.parse = path.parse;

module.exports.existsSync = fs.existsSync;

module.exports.relative = path.relative;
