import {CCLogger, MathUtils} from "../libs/MyLibs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;

        let radian = 270
        let angle = MathUtils.getRadian(radian);
        console.log("smile----:" + JSON.stringify(angle));

        let logger = new CCLogger()
        logger.init( {enableLog:true} )
        logger.log("日志输出")
        logger.error("错误日志")

    }
}
