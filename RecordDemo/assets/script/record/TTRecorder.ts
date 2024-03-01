/**
 * Created by jsroads on 2023/12/08.22:26
 * Note:
 */
import {TTUtils} from "./TTUtils";
import {TTAutoRecordTimer} from "./TTAutoRecordTimer";
import {RECORD_MIN_DURATION, RECORD_TYPE, RECORD_TARGET_DURATION, RECORD_INTERVAL_TIME} from "./TTRecordConfig";
import {TTPlatformSDK} from "./TTPlatformSDK";


export class TTRecorder {
    private static _i: TTRecorder;
    public static get i(): TTRecorder {
        if (!this._i) this._i = new TTRecorder();
        return this._i;
    }

    private _recorder: GameRecorderManager = null;

    private get recorder(): GameRecorderManager {
        if (!TTUtils.isTTGame) return null;
        if (!this._recorder) this._recorder = tt.getGameRecorderManager();
        return this._recorder;
    }

    private recordType: RECORD_TYPE = RECORD_TYPE.UI;

    public isRecord: boolean = false;

    private timer: TTAutoRecordTimer = null;

    private clipIndexList: number[] = []; // 剪辑索引列表

    private videoPath: string = "";

    private maskInfo: { x: number, y: number } = {x: 0, y: 0};

    private timerInfo: { interval: number, callback: (count: number) => void } = null;

    public initRecorder(): void {
        if (TTUtils.isTTGame) {
            const systemInfo = TTPlatformSDK.i.sdk.getSystemInfoSync();
            const screenWidth = systemInfo.screenWidth;
            const screenHeight = systemInfo.screenHeight;
            const maskInfo = this.recorder.getMark();
            this.maskInfo.x = (screenWidth - maskInfo.markWidth) / 2;
            this.maskInfo.y = (screenHeight - maskInfo.markHeight) / 2;
            this.setRecordDefault();
            this.recorder.onStart((res: any) => {
                console.log('录屏开始：---------');
                this.isRecord = true;
                this.timer = new TTAutoRecordTimer();
                this.timer.startTimer(this.timerInfo.interval, this.timerInfo.callback);
            });
            this.recorder.onStop((res: any) => {
                console.log('录屏停止' + res.videoPath);
                const clipTime: number = this.getTimerCount();
                this.setRecordDefault();
                const videoTimeVaild: boolean = clipTime < RECORD_MIN_DURATION;
                const videoFileValid: boolean = (res.videoPath && res.videoPath != "");
                const videoValid: boolean = videoTimeVaild && videoFileValid;
                // 如果录制时间小于3秒，不做处理
                if (videoValid) {
                    if (videoTimeVaild) {
                        console.log('录制时间过短，无效录屏');
                    } else {
                        console.log('视频录制失败');
                    }
                    return;
                }
                const duration: number = Math.min(clipTime, RECORD_TARGET_DURATION)
                console.log("录制了", duration)
                if (this.recordType === RECORD_TYPE.UI) {
                    this.videoPath = res.videoPath;
                    this.clipRecord(this.videoPath, duration);
                } else {
                    this.videoPath = res.videoPath;
                    this.clipRecord2(this.videoPath);

                }
            });
            this.recorder.onError((error: { errMsg: string }) => {
                console.log('录屏onError', error);
                this.setRecordDefault();
            });
            this.recorder.onResume((res: any) => {
                console.log('录屏onResume', res);
                this.setRecordDefault();
            });
            this.recorder.onInterruptionBegin && this.recorder.onInterruptionBegin((res: any) => {
                console.log('录屏onInterruptionBegin', res);
                this.setRecordDefault();
            });
            this.recorder.onInterruptionEnd && this.recorder.onInterruptionEnd((res: any) => {
                console.log('录屏onInterruptionEnd', res);
                this.setRecordDefault();
            });

        }
    }

    private setRecordDefault() {
        if (this.isRecord && this.timer) {
            this.timer.stopTimer();
            this.timer = null;
        }
        this.isRecord = false;
    }

    public recordClip(start: number, end: number, index: number): void {
        if (!TTUtils.isTTGame) return;
        if (this.isRecord && this.recorder) {
            this.recorder.recordClip && this.recorder.recordClip({
                timeRange: [start, end],
                success(res: any) {
                    this.clipIndexList[index] = res.index;
                }
            });
        }
    }

    /**
     * 录屏的时长，单位 s，必须大于3s，最大值 300（5 分钟）
     * @param second
     */
    public startRecord(data:{type: number, second: number, interval: number, callback}): void {
        const second = data.second || RECORD_TARGET_DURATION;
        this.recordType = data.type || RECORD_TYPE.UI;
        this.timerInfo = {interval:data.interval, callback:data.callback};
        if (!this.isRecord) {
            console.log("startRecord------recorder:start");
            if (this.recorder) {
                this.recorder.start({
                    duration: second,
                    isMarkOpen: true,
                    locLeft: this.maskInfo.x,
                    locTop: this.maskInfo.y
                });
            }
        } else {
            console.log("recorder没有初始化");
            this.initRecorder();
        }
    }

    public clipRecord(videoPath: string, duration: number): void {
        if (this.recorder) {
            this.recorder.clipVideo({
                path: videoPath,
                timeRange: [duration, 0],
                success: (clipRes) => {
                    this.videoPath = clipRes.videoPath;
                    console.log('剪辑成功，剪辑后视频路径是', clipRes.videoPath, "-->", this.videoPath);
                },
                fail: (err) => {
                    console.log('剪辑失败', err);
                },
            });
            console.log('录制成功，视频路径是', videoPath);
        }
    }

    public clipRecord2(videoPath: string): void {
        if (this.recorder) {
            this.recorder.clipVideo({
                path: videoPath,
                clipRange: this.clipIndexList, // 倒序拼接
                success: (clipRes) => {
                    this.videoPath = clipRes.videoPath;
                    console.log('剪辑成功，剪辑后视频路径是', clipRes.videoPath, "-->", this.videoPath);
                },
                fail: (err) => {
                    console.log('剪辑失败', err);
                }
            });
        }
    }


    public stopRecord(): void {
        if (this.recorder) this.recorder.stop();
    }

    public pauseRecord(): void {
        if (this.recorder) this.recorder.pause();
    }


    public resumeRecord(): void {
        if (this.recorder) this.recorder.resume();
    }
    public shareRecord(callback:()=>void): void {
        if (this.recorder&&this.videoPath) TTPlatformSDK.i.shareRecordVideo(this.videoPath,callback);
    }

    public getTimerCount(): number {
        if (this.isRecord && this.timer) {
            return this.timer.count;
        }
        return 0;
    }
}


