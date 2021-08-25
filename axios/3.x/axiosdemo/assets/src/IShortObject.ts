/**
 * Created by jsroads on 2020/6/17.2:30 下午
 * Note:
 */
export interface IShortObject {
    /**
     * 接口 携带的参数
     */
    data?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: (result?: any) => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: (error?: any) => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
}