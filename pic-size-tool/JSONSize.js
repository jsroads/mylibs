﻿const fs = require('fs');
const path = require('path');
const FileHelper = require('./FileHelper');
const Utils = require('./Utils');

let compareSize = 0;

let JSONSize = {
    fileMap: null,

    start(sourceFile, destFile, size) {
        if (!sourceFile || sourceFile.length <= 0 || !destFile || destFile.length <= 0) {
            console.error('Cleaner: invalid source or dest');
            return;
        }
        compareSize = size;
        this.fileMap = new Map();

        sourceFile = FileHelper.getFullPath(sourceFile);
        destFile = FileHelper.getFullPath(destFile);

        this.lookupAssetDir(sourceFile, null);
        let outStr = this.getSortedResult(this.fileMap, sourceFile);
        FileHelper.writeFile(destFile, outStr);
    },

    // 遍历文件夹
    lookupAssetDir(srcDir, callback) {
        if (!srcDir || !fs.existsSync(srcDir)) {
            console.error("JSONSize: invalid srcDir=" + srcDir);
            return;
        }
        let files = fs.readdirSync(srcDir);
        for (let i = 0, len = files.length; i < len; i++) {
            let file = files[i];
            let curPath = path.join(srcDir, file);
            let stats = fs.statSync(curPath);
            if (stats.isDirectory()) {
                this.lookupAssetDir(curPath);
                continue;
            }
            let pathObj = path.parse(curPath);
            let value = this.fileMap.get(pathObj.ext);
            if (!value) {
                value = new Map();
                this.fileMap.set(pathObj.ext, value);
            }
            if ([".json"].includes(pathObj.ext)) {
                let dimensions = {size: Utils.byte2Kb(stats.size), path: curPath};
                if (dimensions.size > compareSize) {
                    value.set(curPath, {path: curPath, size: dimensions.size, name: pathObj.name + pathObj.ext});
                }
            }
        }
    },

    getSortedResult(fileMap, srcDir) {
        let allTypes = [];
        fileMap.forEach((files, ext) => {
            let {totalSize, outStr} = this.formatByByte(files);
            allTypes.push({size: parseFloat(totalSize), ext, count: files.size, outStr});
        });

        allTypes.sort(function (a, b) {
            return b.size - a.size;
        });

        let content = '';
        let allSize = 0;

        allTypes = allTypes.filter((value) => {
            return value.count > 0
        })
        // 输出汇总
        for (let i = 0, len = allTypes.length; i < len; i++) {
            let data = allTypes[i];
            content += '类型=' + data.ext + ', 个数=' + data.count + ', 占用空间=' + data.size + 'MB';
            // if (data.max > 0) {
            //     content += ', 宽度=' + data.width + 'px' + ', 高度=' + data.height + 'px';
            // }
            content += '\n';
            allSize += data.size;
        }

        let totalStr = '总空间=' + allSize.toFixed(4) + 'MB, ' + '目录=' + srcDir + '\n\n';
        totalStr += content + '\n';

        // 输出分类型信息
        for (let i = 0, len = allTypes.length; i < len; i++) {
            let data = allTypes[i];
            totalStr += data.outStr + '\n';
        }

        return totalStr;
    },

    // 格式化为从大到小按MB表示
    formatByByte(files) {
        let totalSize = 0;
        let newFiles = [];
        files.forEach(function (file, path) {
            totalSize += file.size;
            newFiles.push(file);
        });
        // 按占用空间从大到小排序
        newFiles.sort(function (a, b) {
            return b.size - a.size;
        });

        let outStr = '';
        for (let i = 0, len = newFiles.length; i < len; i++) {
            let file = newFiles[i];
            outStr += '空间=' + file.size + 'KB 路径=' + file.path;
            outStr += '\n';
        }
        totalSize = Utils.kb2Mb2MbStr(totalSize);
        return {totalSize, outStr};
    },

};

module.exports = JSONSize;

