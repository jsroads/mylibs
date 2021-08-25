/**
 * Created by jsroads on 2020/6/11.5:49 下午
 * Note:
 */
import {IChannel} from "./channel/Channel";

export default class Network {
    /**appName 应用名字 前端专用 用来存储浏览器区分等*/
    public static appName: string = "wowlike";
    /**appName 应用名字 前端专用 用来存储浏览器区分等*/
    public static appId: string = "";
    /**userId*/
    public static userId: string = "";
    /**API HTTPS 服务器地址*/
    public static baseHttpPath: string = "https://miniapi.52muyou.com";
    // /*游戏名字网络通信用*/
    /**API Socket 服务器地址*/
    public static baseSocketPath: string = "wss://ws.mini.hainanrongyao.com";
    // public static baseSocketPath:string = "wss://echo.websocket.org";
    /**CDN 服务器地址*/
    public static baseCdnPath: string = "https://cdn.mini.52muyou.com/xiaoyouxi";
    /**新建用户*/
    public static AUTHORIZATIONS = `${Network.baseHttpPath}/api/authorizations`;
    /**初始化用户信息*/
    public static INIT = `${Network.baseHttpPath}/api/init/${Network.appName}`;
    /**心跳访问*/
    public static ALONE = `${Network.baseHttpPath}/api/${Network.appName}/alone`;

    /**更新用户*/
    public static REFRESH_USER = `${Network.baseHttpPath}/api/${Network.appName}/refresh_user`;
    public static nickname = `游客`;
    public static avatarUrl = `${Network.baseCdnPath}/wealth/wx/config/test/test.png`;
    /*平台类型*/
    public static channel: IChannel;
    /*平台类型*/
    public static uuid: string = "";

    public static token: string = "";

    public static tokenType: string = "";
    public static expiresIn: number = 60000;
    /*1 代表第一次登陆 0 代表非第一次*/
    public static isFirst: number = 0;
    public static openid: string = "";
    /*是否法定节假日*/
    public static holiday: string = "";

    /*cdn配置json地址*/
    static get baseCdnJsonPath(): string {
        return `${Network.baseCdnPath}/${this.appName}/${this.channel.name}/config`;
    }


    // /**更新用户*/
    // public static UPDATE = `${Network.basePath}/api/${Network.appKey}/refresh_user`;
    // // /**更新用户*/
    // // public static UPDATE = `${Network.basePath}/api/authorizations/user`;
    //
    // /**实名认证验证*/
    // public static REGISTER = `${Network.basePath}/api/register`;
    // /**分享分数处理*/
    // public static SHARE = `${Network.basePath}/api/${Network.appKey}/share`;
    // /**token刷新接口*/
    // public static TOKEN_UPDATE = `${Network.basePath}/api/authorizations/current`;


}