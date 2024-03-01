/*
 * @Description: 
 * @Author: jsroads
 * @Date: 2023/7/11 15:11
 */

const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
export class MiniLaunchScene extends cc.Component {
    @property({tooltip: "文本进度显示", type: cc.Label})
    private label: cc.Label = null;
    @property({tooltip: "进度", type: cc.ProgressBar})
    private progress: cc.ProgressBar = null;

    // 初始化数据
    private async init() {
        // this.scheduleOnce(() => {
        // cc.director.preloadScene("MiniLoginScene",
        //     (completedCount, totalCount, item) => {
        //         let p = completedCount / totalCount;
        //         this.progress.progress = p;
        //         this.label.string = `${Math.floor(p * 100)}"%"`;
        //     },
        //     () => {
        //         this.progress.progress = 1;
        //         this.label.string = "100%";
        //         cc.director.loadScene("MiniLoginScene");
        //         console.timeEnd("MiniGameStartup");
        //     }
        // );
        // }, 0);
    }
    private btnTouchHandler(touch:cc.Event.EventTouch,data:string) {
        console.log("btnTouchHandler--------:",data);
        console.time("MiniGameStartup");
        cc.assetManager.loadBundle("main", (err, bundle) => {
            bundle.loadScene("MainScene", (completedCount, totalCount, item) => {
                    let p = completedCount / totalCount;
                    this.progress.progress = p;
                    this.label.string = `${Math.floor(p * 100)}"%"`;
                    console.log("progress--------:", this.label.string);
                }, (error, sceneAsset) => {
                    this.progress.progress = 1;
                    this.label.string = "100%";
                    cc.director.runScene(sceneAsset);
                    console.timeEnd("MiniGameStartup");
                }
            );
        });
    }
}