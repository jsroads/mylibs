import { fileURLToPath } from 'url';
import path from 'path';
import cpy from 'cpy';
import fse from 'fs-extra';

// 获取当前文件所在的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const targetDir = path.join(__dirname, 'dist',"src",'config');

// 删除 dist 目录
fse.remove(distDir)
    .then(() => {
        console.log('Deleted dist directory successfully!');
        // 复制文件到 dist 目录
        return cpy(['src/config/app.json'], targetDir, { concurrency: 10 });
    })
    .then(() => {
        console.log('app.json copied successfully!');
    })
    .catch(err => {
        console.error('Error:', err);
    });
