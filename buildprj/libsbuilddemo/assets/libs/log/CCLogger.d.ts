/**
 * Created by jsroads on 2022/6/10 18:35
 * Note:
 */
import { LoggerInterface, LoggerOption } from "./LoggerInterface";
export declare class CCLogger implements LoggerInterface {
    private _option;
    init(option: LoggerOption): void;
    log(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
