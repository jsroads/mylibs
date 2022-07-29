/*
* Usage:
* node main.js -size d:\myproject\assets d:\out.txt
*/
const AssetBytesSize = require('./AssetBytesSize');
const AssetWHSize = require('./AssetWHSize');
const command = process.argv[2];
const sourceFile = process.argv[3];
const destFile = process.argv[4];
const compareSize = process.argv[5];
global._delete = process.argv.includes('-d') || process.argv.includes('-delete') // 删除未引用的资源
global._excludes = process.argv.filter(n => n.includes('-e=') || n.includes('-excludes=')).map(node => { // 删除未引用的资源时，需要排除的文件或路径，支持字符串或正则
    let _i = node.replace('-e=', '')
    if (_i !== node) return _i
    _i = node.replace('-excludes=', '')
    if (_i !== node) return _i
    return ''
})[0]
let Version = 'PicHelper 1.0';
let parseCommand = function (cmd) {
    if (!cmd || cmd.length <= 0) {
        console.error('main: command is invalid');
        return;
    }
    switch (cmd) {
        case '-size':
            AssetBytesSize.start(sourceFile, destFile);
            break;
        case '-side':
            AssetWHSize.start(sourceFile, destFile, compareSize || 0);
            break;
        default:
            let strHelp = Version + '\n' +
                'Usage: node main.js <command>\n' +
                'Examples:\n' +
                '  node main.js -side d:/myproject/assets d:/out.txt\n' +
                '  node main.js -size d:/myproject/assets d:/out.txt';
            console.log(strHelp);
            break;
    }
};

parseCommand(command);
