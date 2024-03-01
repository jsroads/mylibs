import {TTPlatformSDK} from "./record/TTPlatformSDK";
import {TTRecorder} from "./record/TTRecorder";

const {ccclass, property} = cc._decorator;

@ccclass
export class Helloworld extends cc.Component {

    @property(cc.Label)
    private label: cc.Label = null;

    @property
    private text: string = 'hello';

    protected start() {
        // init logic
        this.label.string = this.text;
        //初始化
        TTPlatformSDK.i.init();

        TTRecorder.i.initRecorder();
    }
}
