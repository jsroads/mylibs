/**
 * Created by jsroads on 2022/6/10 18:34
 * Note:日志接口
 */
export interface LoggerInterface {
    /**
     * 初始化日志
     *
     * @param option 参数选项
     */
    init(option: LoggerOption): void;
    log(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export interface LoggerOption {
    /**
     * 是否允许输出log
     */
    enableLog: boolean;
}
