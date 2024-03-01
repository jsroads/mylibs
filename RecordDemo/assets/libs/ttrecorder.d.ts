/**
 * Created by jsroads on 2022/11/30 15:45
 * Note:
 */

declare namespace DouYinMinigame {
    interface Tt {
        getGameRecorderManager(): GameRecorderManager;
    }
}

interface GameRecorderManager {
    start(options: RecorderStartOptions);

    pause();

    recordClip(options: RecordClipOptions);

    clipVideo(options: ClipVideoOptions);

    resume();

    stop();

    onStart(callback: (res: any) => void): void;

    onResume(callback: (res: any) => void): void;

    onPause(callback: (res: any) => void): void;

    onStop(callback: (res: { videoPath: string }) => void): void;

    onError(callback: (res: { errMsg: string }) => void): void;

    onInterruptionBegin(callback: (res: any) => void): void;

    onInterruptionEnd(callback: (res: any) => void): void;

    getMark(): RecordMark;
}

interface RecorderStartOptions {
    duration?: number;
    isMarkOpen?: boolean;
    locTop?: number;
    locLeft?: number;
    frameRate?: number;
}

interface RecordClipOptions {
    timeRange?: number[];
    success?: (index: number) => void;//裁剪片段的唯一索引，用于 tt.clipVideo 接口调用时指定裁剪拼接顺序。
    fail?: (err: Error) => void;
    complete?: () => void;
}

interface ClipVideoOptions {
    path: string;
    timeRange?: number[];
    clipRange?: number[];
    success?: (clipRes:{videoPath: string}) => void;
    fail?: (err: Error) => void;
    complete?: () => void;
}

interface RecordMark {
    markWidth: number;
    markHeight: number;
}