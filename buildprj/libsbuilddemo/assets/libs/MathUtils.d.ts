/**
 * Created by jsroads on 2022/6/10 18:30
 * Note:
 */
/**
 * 数学计算工具类
 */
export declare class MathUtils {
    /**
     * 弧度制转换为角度值
     * @param radian 弧度制
     * @returns {number}
     */
    static getAngle(radian: number): number;
    /**
     * 角度值转换为弧度制
     * @param angle
     */
    static getRadian(angle: number): number;
    /**
     * 获取两点间弧度
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    static getRadian2(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    static getDistance(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
    static toFixedStr(value: number, fixCount: number): string;
    static toPercentStr(value: number, fixCount: number): string;
    static toFixedWan(value: number): string;
    static getFinalValueBasedOnParams(level: number, paramList: Array<number>, needCeil?: boolean): number;
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    static limit($from: number, $end: number): number;
    /**
     * 获取一个区间的随机数(帧数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    static limitInteger($from: number, $end: number): number;
    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    static randomArray(arr: Array<any>): any;
}
