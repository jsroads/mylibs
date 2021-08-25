/**
 * Created by jsroads on 2020/6/17.2:18 下午
 * Note:
 */
import BaseApi from "./BaseApi";


export default class WebApi extends BaseApi {
    public login(data: any) {
        super.login(data);
    }

    showToast(text: string) {
    }

    public playRewardVideo(content: any, cb: any) {
    }

    navigateToMiniProgram(object: any) {
        object && object.success(null!);
    }

    setClipboardData(object: any) {
        this.showToast("系统剪贴板调用成功,web端仅展示");
    }

    protected initSdk(): void {

    }
}
