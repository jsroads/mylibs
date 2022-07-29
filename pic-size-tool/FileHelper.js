const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
let FileHelper = {
    // 返回图片尺寸
    getImageWH(filePath, ext) {
        let dimensions = {width:0,height:0,max:0};
        if ('.png' === ext || '.jpg' === ext || '.webp' === ext) {
            let fileSize = sizeOf(filePath);
            dimensions.width = fileSize.width;
            dimensions.height = fileSize.height;
            dimensions.max  =  Math.max(dimensions.width,dimensions.height);
        }
        return dimensions;
    },

    // 返回图片占用内存(width*height*4)
    getImageMem(filePath, ext) {
        let memBytes = 0;
        // if ('.png' === ext || '.jpg' === ext || '.webp' === ext) {
        //     memBytes = images(filePath).width() * images(filePath).height() * 4;
        // }
        return memBytes;
    },

    getFullPath(filePath) {
        if (!path.isAbsolute(filePath)) {
            filePath = path.join(__dirname, filePath); // 非绝对路径则加上当前目录
        }
        return filePath;
    },
    
    // 输出到文件
    writeFile(fullPath, content) {
        if (!fullPath || !content) {
            console.error('writeFile: invalid params');
            return;
        }

        fs.writeFile(fullPath, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(content);
            console.log('Success to write file: ' + fullPath);
        });
    },

    // 返回文件内容的json对象
    getObjectFromFile(fullPath) {
        let retObj = {};
        if (!fs.existsSync(fullPath)) {
            console.error('getObjectFromFile: NoExist path=' +fullPath);
            return retObj;
        }
        let str = this.getFileString(fullPath);
        if (!str) {
            console.error('getObjectFromFile: invalid file=' +fullPath);
            return retObj;   
        }
        retObj = JSON.parse(str);
        if (!retObj) {
            console.error('getObjectFromFile: invalid object=' +fullPath);
            return retObj;
        }
        return retObj;
    },

    // 返回文件内容的字符串形式
    getFileString(fullPath) {
        return fs.readFileSync(fullPath).toString();
    },
    // 函数防抖
    debounce(fn, wait = 1000) {
        var timeout = null;
        return function() {
            timeout && clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
        }
    }
};
module.exports = FileHelper;
