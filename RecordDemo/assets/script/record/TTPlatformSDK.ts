import {TTUtils} from "./TTUtils";

export class TTPlatformSDK {
    private static _i: TTPlatformSDK;
    public static get i(): TTPlatformSDK {
        if (!this._i) this._i = new TTPlatformSDK();
        return this._i;
    }

    public sdk: DouYinMinigame.Tt;

    public init(): void {
        this.sdk = tt;
    }

    /**
     * 显示消息提示框
     * @param message
     */
    public showToast(message: {
        title: string,
        icon?: "success" | "error" | "loading" | "none",
        mask?: boolean,
        duration?: number,
        success?: () => void,
        fail?: () => void
    }): void {
        this.sdk.showToast({
            title: message.title,
            icon: message.icon || "none",
            mask: message.mask || false,
            duration: message.duration || 1500,
            success: () => {
                message.success && message.success();
            },
            fail: () => {
                message.fail && message.fail();
            }
        });
    }

    /**
     * 分享录屏视频
     * @param path
     * @param handler
     */
    public shareRecordVideo(path: string, handler: () => void): void {
        if (!TTUtils.isTTGame) {
            this.showToast({title: "分享视频只能在手机上可用"});
            return;
        }
        console.log("path", path);
        this.sdk.shareAppMessage({
            channel: 'video',
            title: '先森，萨瓦迪卡（刷我滴卡）',
            desc: "快来看看，如何一步步打通城市交通的吧",
            imageUrl: '',
            templateId: '2abfgns9o47f322qg3', // 2abfgns9o47f322qg3 替换成通过审核的分享ID
            query: '',//分享 录屏的query参数
            extra: {
                videoPath: path, // 可替换成录屏得到的视频地址
                videoTopics: ["模拟经营", "益智休闲"]
            },
            success() {
                console.log("分享视频成功");
                handler && handler();
            },
            fail(e) {
                console.log("分享视频失败");
            }
        });
    }
}