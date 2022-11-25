/**
 * Created by jsroads on 2022/6/10 18:35
 * Note:原生日志输出管理器
 * 会将 [object object] 转换为 object Json 化后的结果
 */
import { LoggerInterface, LoggerOption } from "./LoggerInterface";
export declare class NativeLogger implements LoggerInterface {
    private _option;
    init(option: LoggerOption): void;
    log(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    /**
     * 原生平台上不能直接打印object和array，因此这里将object和array转换为字符串进行输出，方便在 Android Logcat 中直接看 log 结果
     */
    private _format;
}
