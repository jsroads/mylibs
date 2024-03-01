import {TTUtils} from "./TTUtils";
import {TTRecorder} from "./TTRecorder";
import {RECORD_TYPE, RECORD_TARGET_DURATION, RECORD_INTERVAL_TIME} from "./TTRecordConfig";
import {TTPlatformSDK} from "./TTPlatformSDK";


const {ccclass, property} = cc._decorator;

@ccclass
export class RecorderUI extends cc.Component {
    @property({tooltip: "录制按钮", type: cc.Node})
    private btn_record: cc.Node = null;

    @property({tooltip: "停止按钮", type: cc.Node})
    private btn_stop: cc.Node = null;

    @property({tooltip: "重新录制按钮", type: cc.Node})
    private btn_re_record: cc.Node = null;
    @property({tooltip: "分享按钮", type: cc.Node})
    private btn_share: cc.Node = null;
    @property({tooltip: "时间文本", type: cc.Label})
    private timeText: cc.Label = null;

    private count: number = 0;

    private deltaPos: cc.Vec2 = null;

    protected start() {
        if (TTUtils.isTTGame) {
            this.initListener();
            this.node.active = true;
        } else {
            this.node.active = false;
        }
    }

    private initListener() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event: cc.Event.EventTouch) => {
            const delta = event.touch.getDelta();
            this.node.x += delta.x;
            this.node.y += delta.y;
            const left = (TTUtils.width - this.node.width) * -0.5;
            const right = (TTUtils.width - this.node.width) * 0.5;
            const top = (TTUtils.height - this.node.height) * 0.5;
            const bottom = (TTUtils.height - this.node.height) * -0.5;
            this.node.x = this.node.x < left ? left : this.node.x;
            this.node.x = this.node.x > right ? right : this.node.x;
            this.node.y = this.node.y < bottom ? bottom : this.node.y;
            this.node.y = this.node.y > top ? top : this.node.y;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event: cc.Event.EventTouch) => {
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_START, (event: cc.Event.EventTouch) => {
            this.deltaPos = event.getLocation();
        }, this);

        this.btn_record.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            if (this.check(event.getLocation())) return;
            this.record(event);
            return true;
        }, this);
        this.btn_re_record.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            if (this.check(event.getLocation())) return;
            this.record(event);
            return true;
        }, this);
        this.btn_stop.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            if (this.check(event.getLocation())) return;
            this.stop(event);
            return true;
        }, this);
        this.btn_share.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            if (this.check(event.getLocation())) return;
            this.share(event);
            return true;
        }, this);
        this.setBtnVisible(true, false, false, false);
        cc.game.on(cc.game.EVENT_HIDE, () => {
            console.log("录屏游戏进入后台");
            this.pause(null);
        }, this);

        cc.game.on(cc.game.EVENT_SHOW, () => {
            console.log("录屏重新返回游戏");
            this.resume(null);
        }, this);
    }

    private setBtnVisible(record: boolean, reRecord: boolean, share: boolean, stop: boolean) {
        this.btn_record.active = record;
        this.btn_re_record.active = reRecord;
        this.btn_share.active = share;
        this.btn_stop.active = stop;
    }

    private record(event: cc.Event.EventTouch) {
        if (!TTUtils.isTTGame) return;
        this.count = 0;
        if (!TTRecorder.i.isRecord) {
            this.timeText.string = TTUtils.getRemainTimeBySecond(0);
            const data = {
                type: RECORD_TYPE.UI,
                second: RECORD_TARGET_DURATION,
                interval: RECORD_INTERVAL_TIME,
                callback: (count: number) => {
                    this.updateSecongHandler(count);
                }
            }
            TTRecorder.i.startRecord(data);
            this.setBtnVisible(false, false, false, true);
        }
    }

    private updateSecongHandler(count: number) {
        this.count = count;
        const timeStr = TTUtils.getRemainTimeBySecond(this.count);
        console.log("显示时间:", timeStr);
        this.timeText.string = timeStr;
        if (this.count >= RECORD_TARGET_DURATION) {
            this.setBtnVisible(false, true, true, false);
            TTRecorder.i.stopRecord();
        }
    }

    private pause(event: cc.Event.EventTouch) {
        if (!TTUtils.isTTGame) return;
        TTRecorder.i.pauseRecord();
    }

    private resume(event: cc.Event.EventTouch) {
        if (!TTUtils.isTTGame) return;
        TTRecorder.i.resumeRecord();
    }

    private stop(event: cc.Event.EventTouch) {
        if (!TTUtils.isTTGame) return;
        if (this.count < 4) {
            const message = {title: "录制时间不能小于3秒", duration: 1500};
            TTPlatformSDK.i.showToast(message);
            return;
        }
        TTRecorder.i.stopRecord();
        this.setBtnVisible(false, true, true, false);
    }

    private share(event: cc.Event.EventTouch) {
        if (!TTUtils.isTTGame) return;
        TTRecorder.i.shareRecord(() => {
            this.setBtnVisible(true, false, false, false);
        });
    }

    private check(point: cc.Vec2) {
        const pos: cc.Vec2 = point;
        return Math.abs(pos.x - this.deltaPos.x) > 10 || Math.abs(pos.y - this.deltaPos.y) > 10;
    }
}