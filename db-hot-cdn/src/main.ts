import readline from 'readline';
import * as path from 'path';
import axios from 'axios';
import fse from 'fs-extra'; // 使用 fs-extra 替代原生 fs

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let config: any;

function loadConfig(): void {
    const configPath = path.join(__dirname, 'db.json');
    if (fse.existsSync(configPath)) {
        const rawData = fse.readFileSync(configPath, 'utf-8');
        config = JSON.parse(rawData);
        console.log('配置文件加载成功！');
        promptForPlatform();
    } else {
        console.error('配置文件未找到！');
        rl.close();
    }
}

function promptForPlatform(): void {
    rl.question('🚀请选热更平台 (微信: wx, 抖音: dy, QQ: qq,华为: hw, Vivo: vivo, OPPO: oppo): ', (input: string) => {
        if (['wx', 'dy', 'qq',"hw","vivo","oppo","ios","android"].includes(input)) {
            console.log(`您选择的平台是: ${input}`);
            handlePlatformSelection(input).then(() => {
                promptForVersion(input); // 传递平台名称给后续流程
            });
        } else {
            console.log('输入无效，请选择 wx, dy , hw , vivo, oppo 或 qq');
            promptForPlatform();
        }
    });
}

function promptForVersion(platform: string): void {
    rl.question('🚀请输入版本号 (格式: x.y.z): ', (input: string) => {
        if (isValidVersion(input)) {
            handleVersion(input, platform);
            promptForDirectory(input, platform); // 传递版本号和平台名称
        } else {
            console.log('格式错误，请重新输入。');
            promptForVersion(platform);
        }
    });
}

function promptForDirectory(version: string, platform: string): void {
    rl.question('请输入要遍历的目录路径（按 Enter 使用默认路径 "input"）: ', (input: string) => {
        const directoryPath = input.trim() || path.join(process.cwd(), 'input');
        if (fse.existsSync(directoryPath) && fse.lstatSync(directoryPath).isDirectory()) {
            const fileList = traverseDirectory(directoryPath, version, platform);
            rl.close();

            // 输出路径信息
            const testURL = config.remoteTestURL[platform];
            const publishURL = config.remotePublishURL[platform];
            console.log("测试服:");
            fileList.forEach(file => {
                console.log(`${testURL.replace('/config.json', '')}/v${version}/${file}.txt`);
            });
            console.log("发布服:");
            fileList.forEach(file => {
                console.log(`${publishURL.replace('/config.json', '')}/v${version}/${file}.txt`);
            });

            console.log("🚀所有任务已经完成！🚀");
        } else {
            console.log('无效的目录路径，请重新输入。');
            promptForDirectory(version, platform);
        }
    });
}


async function handlePlatformSelection(platform: string): Promise<void> {
    const publishURL = config.remotePublishURL[platform];
    const testURL = config.remoteTestURL[platform];
    console.log(`发布 URL: ${publishURL}`);
    console.log(`测试 URL: ${testURL}`);

    await downloadAndSaveFile(publishURL, platform);
}

async function downloadAndSaveFile(url: string, platform: string): Promise<void> {
    try {
        const response = await axios.get(url, { responseType: 'stream' });

        const folderName = `${platform}publish`;
        const folderPath = path.join(process.cwd(), 'output', folderName);
        if (!fse.existsSync(folderPath)) {
            fse.ensureDirSync(folderPath);
        }

        const filePath = path.join(folderPath, 'config.json');
        const writer = fse.createWriteStream(filePath);
        response.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        console.log(`${platform} 平台的 config.json 文件已保存到 ${folderPath}`);
    } catch (error: any) {
        console.error('下载文件时出错:', error.message);
    }
}

function handleVersion(version: string, platform: string): void {
    console.log(`Handling version: ${version}`);
}

function traverseDirectory(directory: string, version: string, platform: string): string[] {
    const files: string[] = [];

    function recursiveReadDir(dir: string): void {
        const items = fse.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            if (fse.lstatSync(fullPath).isDirectory()) {
                recursiveReadDir(fullPath);
            } else if (path.extname(fullPath) === '.txt') {
                const fileName = path.basename(fullPath, '.txt');
                files.push(fileName); // 仅保存文件名
                copyFileToPlatformDirs(fullPath, platform);
            }
        });
    }

    recursiveReadDir(directory);

    const updatedConfig = {
        version: `v${version}`,
        files: files
    };
    saveUpdatedConfig(platform, updatedConfig);

    return files;
}

function copyFileToPlatformDirs(filePath: string, platform: string): void {
    const platformDir = path.join(process.cwd(), 'output', `${platform}publish`);
    const testDir = path.join(platformDir, 'test');
    const publishDir = path.join(platformDir, 'publish');

    if (!fse.existsSync(testDir)) fse.ensureDirSync(testDir);
    if (!fse.existsSync(publishDir)) fse.ensureDirSync(publishDir);

    const fileName = path.basename(filePath);
    fse.copyFileSync(filePath, path.join(testDir, fileName));
    fse.copyFileSync(filePath, path.join(publishDir, fileName));

    console.log(`已复制 ${fileName} 到 ${testDir} 和 ${publishDir}`);
}

function saveUpdatedConfig(platform: string, updatedConfig: any): void {
    const platformDir = path.join(process.cwd(), 'output', `${platform}publish`);
    const configPath = path.join(platformDir, 'config.json');

    let existingConfig = [];
    if (fse.existsSync(configPath)) {
        const rawData = fse.readFileSync(configPath, 'utf-8');
        existingConfig = JSON.parse(rawData);
    }

    existingConfig.push(updatedConfig);

    fse.writeFileSync(configPath, JSON.stringify(existingConfig, null, 2));
    console.log(`已更新并保存 ${platform} 平台的 config.json`);
}

function isValidVersion(version: string): boolean {
    return /^\d+\.\d+\.\d+$/.test(version);
}

// 从加载配置文件开始
loadConfig();
