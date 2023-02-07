const mfs = require('./util/mfs');

const adapterActualPlatform = ['bytedance', 'wechatgame'];

function onBuildStart(options, callback) {
    if ('mini-game' === options.platform) {
        if (adapterActualPlatform.indexOf(options.actualPlatform) === -1) {
            callback && callback();
            return;
        }
        Editor.log('[minigame-launch-fast]', '小游戏首屏启动优化开始 onBuildStart');
        Editor.log(mfs.join(options.project, 'assets', 'resources', 'json', 'version.json'));
        const versionConfig = JSON.parse(mfs.readFileSync(mfs.join(options.project, 'assets', 'resources', 'json', 'version.json')));
        const versionBuildConfig = JSON.parse(mfs.readFileSync(mfs.join(options.project, 'settings', `${options.actualPlatform}.json`)));
        let urlList = versionBuildConfig["REMOTE_SERVER_ROOT"].split("/");
        if (!urlList.length) {
            callback && callback();
        }
        const versionStr = urlList[urlList.length - 1];
        switch (options.actualPlatform) {
            case "bytedance":
                versionConfig["douyin"] = versionStr;
                break
            case "wechatgame":
                versionConfig["wechat"] = versionStr;
                break
        }
        const versionPath = mfs.join(options.project, 'assets', 'resources', 'json', 'version.json')
        let data = JSON.stringify(versionConfig, null, 4)
        mfs.writeFileSync(versionPath, data);
        // Editor.assetdb.saveExists('db://assets/resources/json/version.json', data)
        Editor.assetdb.refresh('db://assets/resources/json/version.json', function (err, results) {
            results.forEach(function (result) {
                if (result.command === 'delete') {
                    Editor.log(`游戏版本号修改完毕为:delete`);
                } else if (result.command === 'change' || result.command === 'create') {
                    Editor.log(`游戏版本号修改完毕为:change:${versionStr}`);
                } else if (result.command === 'uuid-change') {
                    Editor.log(`游戏版本号修改完毕为:uuid-change`);
                } else {
                    Editor.log(`游戏版本号修改完毕为:${result.command}`);
                }
            });
            callback && callback();
        });
    } else {
        callback();
    }

}

function onBuildFinish(options, callback) {
    if ('mini-game' === options.platform) {
        if (adapterActualPlatform.indexOf(options.actualPlatform) === -1) {
            callback && callback();
            return;
        }

        Editor.log('[minigame-launch-fast]', '小游戏首屏启动优化开始');

        // 首屏优化
        // 1. 移动引擎文件
        const enginePath = mfs.join(options.dest, 'subpackages', 'engine');
        // 复制assets的脚本文件
        const assets = mfs.readdirAllSync(mfs.join(options.dest, 'assets'));
        assets.forEach((item) => {
            if (mfs.extname(item) === '.js') {
                const relative = mfs.relative(options.dest, item);
                mfs.copySync(item, mfs.join(enginePath, relative));
                // 删除脚本文件
                mfs.rmSync(item);
            }
        });
        // 复制cocos文件夹
        mfs.copySync(mfs.join(options.dest, 'cocos'), mfs.join(enginePath, 'cocos'));
        mfs.rmSync(mfs.join(options.dest, 'cocos'));
        // 复制src文件夹
        mfs.copySync(mfs.join(options.dest, 'src'), mfs.join(enginePath, 'src'));
        mfs.rmSync(mfs.join(options.dest, 'src'));
        // 复制引擎文件
        const files = mfs.readdirSync(options.dest);
        const extFiles = ['assets', 'subpackages', 'game.json', 'project.config.json',"remote"];//remote 为本项目定制 其他项目删除这个字段
        files.forEach((item) => {
            if (extFiles.indexOf(item) !== -1) {
                return;
            }
            mfs.copySync(mfs.join(options.dest, item), mfs.join(enginePath, item));
            mfs.rmSync(mfs.join(options.dest, item));
        });
        // 加入定制文件
        Editor.log('开始复制 首页展示图.....');
        Editor.log(mfs.join(options.project, 'settings', 'mini', options.actualPlatform, 'first.jpg'));
        Editor.log(mfs.join(options.dest, 'fast', 'first.jpg'));
        mfs.copySync(mfs.join(options.project, 'settings', 'mini', options.actualPlatform, 'first.jpg'), mfs.join(options.dest, 'fast', 'first.jpg'));
        Editor.log('复制 首页展示图 OK');
        Editor.log('开始复制 定制文件.....');
        const firstFiles = ['fast/web-adapter.js', 'fast/first-screen.js', 'fast/application.js', 'game.js', 'utils/uma.min.js'];
        firstFiles.forEach((item) => {
            mfs.copySync(mfs.join(__dirname, 'back', options.actualPlatform, item), mfs.join(options.dest, item));
        });
        Editor.log('复制 定制文件 OK');
        Editor.log('开始修改 game.json.....');
        const gameConfig = JSON.parse(mfs.readFileSync(mfs.join(options.dest, 'game.json')));
        if (!gameConfig.subpackages) {
            gameConfig.subpackages = [];
        }
        let addSub = true;
        gameConfig.subpackages.forEach(item => {
            if (item.name === 'engine') {
                addSub = false;
            }
        });
        if (addSub) {
            gameConfig.subpackages.push({name: 'engine', root: 'subpackages/engine'});
            mfs.writeFileSync(mfs.join(options.dest, 'game.json'), JSON.stringify(gameConfig));
        }
        Editor.log('修改 game.json OK');
        Editor.log('[minigame-launch-fast]', '小游戏首屏启动优化完成');
    }
    callback();
}

module.exports = {
    load() {
        Editor.Builder.on('build-start', onBuildStart);
        Editor.Builder.on('build-finished', onBuildFinish);
    },

    unload() {
        Editor.Builder.removeListener('build-start', onBuildStart);
        Editor.Builder.removeListener('build-finished', onBuildFinish);
    }
};