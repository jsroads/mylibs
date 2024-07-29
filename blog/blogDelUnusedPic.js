const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 获取命令行参数中的路径
let myblogPath = process.argv[2];

// 创建 readline 接口，用于在命令行中获取用户输入
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 递归遍历目录，获取所有文件的路径
const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
};

// 定义处理逻辑的主函数
const processBlogPath = (blogPath) => {
    blogPath = blogPath.trim();
    if (!blogPath) {
        console.error('提供的博客文件夹路径无效');
        process.exit(1);
    }

    const resolvedPath = path.resolve(blogPath);

    // 获取博客文件夹列表
    const blogfiles = fs.readdirSync(resolvedPath);
    const blogDirsList = blogfiles.filter(blogfile => {
        const m = path.join(resolvedPath, blogfile);
        return fs.statSync(m).isDirectory();
    }).map(blogfile => path.join(resolvedPath, blogfile));

    const imgPattern = /!\[.*?\]\((.*?\.(?:jpg|jpeg|gif|png))\)/g;

    blogDirsList.forEach(sourcePath => {
        if (fs.existsSync(sourcePath)) {
            let mdList = [];
            let pngList = [];

            const allFiles = getAllFiles(sourcePath);

            allFiles.forEach(filePath => {
                const ext = path.extname(filePath);
                if (ext === '.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif') {
                    pngList.push(filePath);
                } else if (ext === '.md') {
                    const content = fs.readFileSync(filePath, 'utf8');
                    let matches;
                    while ((matches = imgPattern.exec(content)) !== null) {
                        const actualPath = matches[1]; // 获取捕获组中的实际路径
                        if (actualPath) {
                            const picUrl = path.join(path.dirname(filePath), actualPath);
                            mdList.push(decodeURI(picUrl));
                        }
                    }
                }
            });
            // console.table(mdList);
            // 删除未使用的图片
            const delList = []
            pngList.forEach(picPath => {
                if (!mdList.includes(picPath)) {
                    delList.push(picPath);
                    // console.log('picPath', picPath);
                    fs.unlinkSync(picPath); // 删除未使用的图片
                }
            });
            console.table(delList);
        }
    });
};

// 检查是否提供了路径，如果没有则提示用户输入
if (!myblogPath) {
    rl.question('请输入博客文件夹路径: ', (inputPath) => {
        rl.close();
        processBlogPath(inputPath);
    });
} else {
    processBlogPath(myblogPath);
}
