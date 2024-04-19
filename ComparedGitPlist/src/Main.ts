import path from 'path';
import fse from 'fs-extra';
import simpleGit, { SimpleGit, StatusResult } from 'simple-git';
import { exec } from 'shelljs';
import { DiffResultTextFile } from "simple-git/dist/typings/response";

export interface appConfigRootObject {
    localPath: string;
    remoteUrl: string;
    branch: string;
    fileTypes: string[]; // 修改为数组
}

async function getModifiedFiles(git: SimpleGit): Promise<StatusResult> {
    const statusSummary = await git.status();
    return statusSummary;
}

async function hasSingleLineDifference(git: SimpleGit, branch: string, filePath: string): Promise<boolean> {
    const diffSummary = await git.diffSummary([`${branch}:${filePath}`, filePath]);
    if (diffSummary.files.length !== 1 || diffSummary.files[0].binary) {
        return false;
    }

    const fileDiff: DiffResultTextFile = diffSummary.files[0] as DiffResultTextFile;

    return fileDiff.changes === 2;
}

async function abandonFiles(git: SimpleGit, files: string[]): Promise<void> {
    await git.checkout(files);
}

async function compareFiles(): Promise<void> {
    try {
        const configFile = await fse.readFile(path.join(__dirname, 'config/app.json'), 'utf-8');
        const config: appConfigRootObject = JSON.parse(configFile);

        const { localPath, branch, fileTypes } = config;

        const git = simpleGit(localPath);
        await git.pull('origin', branch);

        const status: StatusResult = await getModifiedFiles(git);

        const filesToAbandon: string[] = [];

        const localModifiedFiles: string[] = status.modified.filter(file => {
            return fileTypes.some(type => file.endsWith(type));
        });

        for (const file of localModifiedFiles) {
            const hasDiff = await hasSingleLineDifference(git, branch, file);
            if (hasDiff) {
                const content = await fse.readFile(path.join(localPath, file), 'utf-8');
                const regex = /<string>\$TexturePacker:SmartUpdate:[0-9a-fA-F]{32}:[0-9a-fA-F]{32}:[0-9a-fA-F]{32}\$<\/string>/;
                if (regex.test(content)) {
                    console.log(`文件路径：${file}`);
                    console.log('---------------------');
                    filesToAbandon.push(file)
                    // 检查同目录下是否存在同名的 PNG 文件
                    const pngFile = file.replace(/\.\w+$/, '.png');
                    const pngStatus = await git.status([pngFile]);
                    if (pngStatus && pngStatus.files && pngStatus.files.length > 0) {
                        const pngChanges = pngStatus.files.filter(item => item.path === pngFile);
                        if (pngChanges && pngChanges.length > 0) {
                            filesToAbandon.push(pngFile);
                        }
                    }
                }
            }
        }

        if (filesToAbandon.length > 0) {
            // console.log('需要放弃的文件列表：', filesToAbandon);
            console.table(filesToAbandon);
            await abandonFiles(git, filesToAbandon);
            console.log('放弃操作完成。');
        } else {
            console.log('没有需要放弃的文件。');
        }

        exec('echo "这是一个示例命令"');
    } catch (err) {
        console.error('读取配置或比较文件时出现错误：', err);
    }
}

compareFiles();
