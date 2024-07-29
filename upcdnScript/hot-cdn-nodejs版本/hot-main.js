const fs = require('fs');
const path = require('path');

// 获取并验证用户输入的目录路径
function getValidDirectory(prompt) {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(prompt, (inputPath) => {
            const cleanedPath = inputPath.trim().replace(/ /g, '');
            if (!fs.existsSync(cleanedPath)) {
                console.log(`路径不存在: ${cleanedPath}`);
                readline.close();
                resolve(getValidDirectory(prompt));
            } else if (!fs.lstatSync(cleanedPath).isDirectory()) {
                console.log(`这不是一个有效的目录: ${cleanedPath}`);
                readline.close();
                resolve(getValidDirectory(prompt));
            } else {
                readline.close();
                resolve(cleanedPath);
            }
        });
    });
}

// 比较目录，获取新文件和现有文件
function compareDirectories(prevDir, currDir) {
    let newFiles = [];
    let existingFiles = [];

    function walkDir(dir, callback) {
        fs.readdirSync(dir).forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                walkDir(fullPath, callback);
            } else {
                callback(fullPath);
            }
        });
    }

    walkDir(currDir, (currFilePath) => {
        const relPath = path.relative(currDir, currFilePath);
        const prevFilePath = path.join(prevDir, relPath);
        if (!fs.existsSync(prevFilePath)) {
            newFiles.push(currFilePath);
        } else {
            existingFiles.push(currFilePath);
        }
    });

    return { newFiles, existingFiles };
}

// 按文件后缀名分类
function classifyFilesByExtension(files, extensions) {
    let classifiedFiles = {};
    extensions.forEach(ext => classifiedFiles[ext] = []);
    let otherFiles = [];

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (extensions.includes(ext)) {
            classifiedFiles[ext].push(file);
        } else {
            otherFiles.push(file);
        }
    });

    return { classifiedFiles, otherFiles };
}

// 按文件大小排序
function sortFilesBySize(files, descending = true) {
    return files.sort((a, b) => {
        const sizeA = fs.statSync(a).size;
        const sizeB = fs.statSync(b).size;
        return descending ? sizeB - sizeA : sizeA - sizeB;
    });
}

// 添加URL前缀
function addUrlPrefix(files, prefix, basePath) {
    return files.map(file => {
        const relPath = path.relative(basePath, file).replace(/\\/g, '/'); // 确保使用正斜线
        return `${prefix}/${relPath}`;
    });
}

// 保存分类后的文件列表
function saveClassifiedFiles(classifiedFiles) {
    const outputDir = 'output';
    if (fs.existsSync(outputDir)) {
        fs.rmdirSync(outputDir, { recursive: true });
        console.log(`已清空目录: ${outputDir}`);
    }
    fs.mkdirSync(outputDir);

    Object.keys(classifiedFiles).forEach(ext => {
        const filePath = path.join(outputDir, `${ext.substring(1)}.txt`);
        fs.writeFileSync(filePath, classifiedFiles[ext].join('\n'));
    });
}

async function main() {
    const previousVersionPath = await getValidDirectory("请输入上一个版本的remote目录路径: ");
    const currentVersionPath = await getValidDirectory("请输入当前要热更版本的remote目录路径: ");

    const { newFiles, existingFiles } = compareDirectories(previousVersionPath, currentVersionPath);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("请输入要分类的后缀名（多个后缀用逗号分隔，直接回车统计所有后缀）: ", (extensionsInput) => {
        let extensions;
        if (extensionsInput.trim()) {
            extensions = extensionsInput.split(',').map(ext => ext.trim().toLowerCase());
            extensions = extensions.map(ext => ext.startsWith('.') ? ext : `.${ext}`);
        } else {
            extensions = Array.from(new Set(newFiles.map(file => path.extname(file).toLowerCase())));
        }

        let { classifiedFiles, otherFiles } = classifyFilesByExtension(newFiles, extensions);

        readline.question("请输入排序规则 (默认从大到小排序，输入N从小到大排序): ", (sortOrder) => {
            const descending = sortOrder.trim().toUpperCase() !== 'N';

            for (let ext in classifiedFiles) {
                classifiedFiles[ext] = sortFilesBySize(classifiedFiles[ext], descending);
            }

            readline.question("请输入要添加的URL前缀: ", (urlPrefix) => {
                for (let ext in classifiedFiles) {
                    classifiedFiles[ext] = addUrlPrefix(classifiedFiles[ext], urlPrefix, currentVersionPath);
                }

                saveClassifiedFiles(classifiedFiles);
                readline.close();
            });
        });
    });
}

main();
