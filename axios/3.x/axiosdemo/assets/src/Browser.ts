/**
 * Created by jsroads on 2021/3/2.2:36 下午
 * Note:
 */
import {Size, sys, view} from "cc";
import Channel from "./channel/Channel";

const MINI_GAMES_LIST = [sys.Platform.WECHAT_GAME];

export class Browser {
    //本地时间和服务器时间间隔
    public static timeInterval: number = 0;
    /** 是否用户id和密码登录 环境（待定）。*/
    public static onUserKey: boolean = false;
    /** 是否Android 环境。*/
    public static onAndroid: boolean = false;
    /** 是否Web 环境。*/
    public static onWeb: boolean = false;
    /** 是否iOS 环境。*/
    public static onIOS: boolean = false;

    public static get now(): number {
        return Math.floor(sys.now() / 1000) + Browser.timeInterval;
    }

    /**
     * 目前没有找到 代替 winSize 先这样设置 后面统一修改
     */
    public static get winSize(): Size {
        return view.getFrameSize();
    }

    public static get designWidth(): number {
        return view.getCanvasSize().width;
    }

    public static get designHeight(): number {
        return view.getCanvasSize().height;
    }

    public static get width(): number {
        return view.getDesignResolutionSize().width;
    }

    public static get height(): number {
        return Browser.width * (Browser.designHeight / Browser.designWidth);
    }

    public static get browserType(): string {
        if (Browser.onAndroid) {
            return Channel.ANDROID.name;//android 平台
        } else if (Browser.onIOS) {
            return Channel.APPSTORE.name;//ios 平台
        } else if (Browser.onMiniGame) {
            return Channel.WX.name;//小游戏 平台修改这里
        } else {
            return Channel.WEB.name;//默认 web 平台
        }
    }

    /** 百度小游戏 **/
    static get onBDMiniGame(): boolean {
        return this.browserType === Channel.BD.name;
    }

    /** OPPO小游戏 **/
    static get onQGMiniGame(): boolean {
        return this.browserType === Channel.OPPO.name;
    }

    /** VIVO小游戏 **/
    static get onVVMiniGame(): boolean {
        return this.browserType === Channel.VIVO.name;
    }

    /***手机QQ小游戏 */
    static get onQQMiniGame(): boolean {
        return this.browserType === Channel.QQ.name;
    }

    /** 微信小游戏*/
    static get onWXMiniGame(): boolean {
        return this.browserType === Channel.WX.name;
    }

    /** 字节跳动（头条）小游戏*/
    static get onTTMiniGame(): boolean {
        return this.browserType === Channel.TT.name;
    }

    /** 是否小游戏环境（微信，头条，QQ，百度，Vivo，OPPO ）。*/
    public static get onMiniGame(): boolean {
        return MINI_GAMES_LIST.indexOf(sys.platform) !== -1;
    }

    public static init(): void {
        if (sys.isNative) {
            console.log("本地平台");
            if (sys.isMobile) {
                console.log("本地移动平台");
                if (sys.os == sys.OS.ANDROID) {
                    console.log("本地Android平台");
                    Browser.onAndroid = true;
                } else if (sys.os == sys.OS.IOS) {
                    console.log("本地ios平台");
                    Browser.onIOS = true;
                }
            } else {
                console.log("Web平台");
                Browser.onWeb = true;
            }
        } else {
            if (this.onMiniGame) {
                console.log("小游戏平台");
                Browser.onWeb = false;
                let browserType = Browser.browserType;
            } else {
                console.log("未知Web平台");
                Browser.onWeb = true;
            }
        }
    }
}
