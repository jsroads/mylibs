/**
 * Created by jsroads on 2021/3/1.6:14 下午
 * Note:
 */

/*渠道接口*/
export interface IChannel {
    name: string,
    id: number
}

export default class Channel {
    public static WEB: IChannel = {name: "web", id: 1};
    public static WX: IChannel = {name: "wx", id: 2};
    public static MGC: IChannel = {name: "mgc", id: 3};
    public static ZQ: IChannel = {name: "zq", id: 4};
    public static TT: IChannel = {name: "tt", id: 6};
    public static QQ: IChannel = {name: "qq", id: 7};
    public static UNKNOWN: IChannel = {name: "unknown", id: 8};
    public static APPSTORE: IChannel = {name: "appstore", id: 9};
    public static ANDROID: IChannel = {name: "android", id: 10};
    public static BD: IChannel = {name: "bd", id: 12};
    public static OPPO: IChannel = {name: "oppo", id: 13};
    public static VIVO: IChannel = {name: "vivo", id: 14};
    public static KJ: IChannel = {name: "kj", id: 15};
    public static QQSJ: IChannel = {name: "qqsj", id: 16};
}