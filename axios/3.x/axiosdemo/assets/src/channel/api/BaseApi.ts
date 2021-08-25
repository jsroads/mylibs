/**
 * Created by jsroads on 2020/6/11.7:39 下午
 * Note:
 */
import {IShortObject} from "../../IShortObject";


// @ts-ignore
export type UnApiType = (typeof wx) | (typeof qg);
export default abstract class BaseApi {
    protected sdk: UnApiType = null!;
    /**banner广告组件*/
    protected banner: any;
    /**激励视频广告组件*/
    protected rewardVideo: any;
    protected uuid: string = "";

    constructor() {
        this.initSdk();
    }

    public login(data: IShortObject) {
        data.success && data.success({param: this.uuid});
    }

    /**初始化平台实例*/
    protected abstract initSdk(): void;
}
