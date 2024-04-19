import {cd, which, echo, exit, exec} from 'shelljs';
import * as fse from 'fs-extra';
import * as path from 'path';
import {execSync} from "node:child_process";
import {simpleGit, CleanOptions, SimpleGitOptions, SimpleGit} from 'simple-git';

export class Tools {
    public static get i(): Tools {
        if (!this._i) this._i = new Tools()
        return this._i;
    }

    private static _i: Tools

    public init() {
        console.log("工具初始化开始....");
    }

    public cdDir(path: string) {
        cd(`${path}`);
    }

    public doGitTask(path: string) {
        cd(`${path}`);
        //判定git命令是否可用
        if (!which('git')) {
            //向命令行打印git命令不可用的提示信息
            echo('Sorry, this script requires git');
            //退出当前进程
            exit(1);
        }
        exec("git status");
        const branch: string = exec(`git branch --show-current`).stdout.trim();
        console.log("smile:🚀 ~ f:Tools m:gitPull l:29->", branch);
        exec("git reset --hard HEAD");
        exec("git checkout .");
        exec("git pull");
        console.log("git 更新完毕！！")
        return branch;
    }

    public async copySyncXlsx(sourcePath: string, destinationPath: string) {
        const list: string[] = []

        async function copyXlsxFiles(sourcePath: string, destinationPath: string) {
            const contents = await fse.readdir(sourcePath);
            for (const item of contents) {
                const src = path.join(sourcePath, item);
                const dest = path.join(destinationPath, item);
                const stat = await fse.lstat(src);

                if (stat.isDirectory()) {
                    await copyXlsxFiles(src, dest); // 递归调用，遍历子文件夹
                } else {
                    const extname = path.extname(src);
                    // 复制扩展名为 .xlsx 的文件
                    if (extname === ".xlsx") {
                        list.push(path.basename(src))
                        await fse.copySync(src, dest, {overwrite: true});
                    }
                }
            }
        }

        // 使用示例
        copyXlsxFiles(sourcePath, destinationPath)
            .then(() => {
                console.log("表更新成功,复制完成！", JSON.stringify(list, null, 2));
            })
            .catch(err => {
                console.error("复制过程中出现错误：", err);
            });
    }

    gitPull(folderPath: string) {
        console.log(`${folderPath}`);
        // 要切换的目标目录
        const targetDirectory = folderPath;
        try {
            // 切换目录并输出当前路径
            const currentDirectory = execSync(`cd ${targetDirectory} && pwd`, {encoding: 'utf-8'}).trim();
            console.log(`当前路径: ${currentDirectory}`);

            // 确保目标目录是一个 Git 仓库
            const isGitRepo = execSync('git rev-parse --is-inside-work-tree', {
                cwd: targetDirectory,
                encoding: 'utf-8'
            }).trim() === 'true';
            if (!isGitRepo) {
                throw new Error('当前目录不是一个 Git 仓库');
            }
            // 执行 git pull 命令
            execSync("git pull", {cwd: targetDirectory});
            execSync("git checkout mini/wx_master", {cwd: targetDirectory});
            console.log("git pull success");
        } catch (error) {
            console.error(`执行错误:`);
        }
    }

    public async simpleGitPull(folderPath: string) {
        // 确保目标目录是一个 Git 仓库
        const isGitRepo = execSync('git rev-parse --is-inside-work-tree', {
            cwd: folderPath,
            encoding: 'utf-8'
        }).trim() === 'true';
        if (!isGitRepo) {
            throw new Error('当前目录不是一个 Git 仓库');
        }
        simpleGit().clean(CleanOptions.FORCE);
        const options: Partial<SimpleGitOptions> = {
            baseDir: folderPath,
            // baseDir: process.cwd(),
            binary: 'git',
            maxConcurrentProcesses: 6,
            trimmed: false,
        };
        console.log("smile:🚀 ~ f:Tools m:simpleGitPull l:94->", options);
        const git: SimpleGit = simpleGit(`${folderPath}`, options);
        console.log("smile:🚀 ~ f:Tools m:simpleGitPull l:96->", git);
        // 获取仓库的远程信息
        const remotes = await git.getRemotes(true /* fetch */);
        console.log("smile:🚀 ~ f:Tools m:simpleGitPull l:108->", remotes);
        await git.pull();
        const wholeRepoStatus = await git.status();
        // 从远程仓库获取最新的分支信息
        await git.fetch();

        // 将本地分支重置到指定的远程分支
        await git.reset(['--hard', `${wholeRepoStatus.tracking}`]);
        console.log("smile:🚀 ~ f:Tools m:simpleGitPull l:99->", wholeRepoStatus);
    }


}