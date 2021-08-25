/**
 * Created by jsroads on 2020/6/11.7:38 下午
 * Note:
 */
import Channel from "./Channel";
import WebApi from "./api/WebApi";
import {Browser} from "./Browser";
import Network from "./Network";


export default class Platform {
    public static api: any = null!;

    public static initAPI() {
        if (this.api) return;
        switch (Browser.browserType) {
            case Channel.WEB.name://Web 本地测试
                this.api = new WebApi();
                Network.channel = Channel.WEB;
                break;
            default:
                console.error("平台API未找到 无非初始化");
        }
    }

    public static apiLogin(param: any) {
        this.api && this.api.login(param);
    }
}
