export class TTUtils {
    private static timeInterval: number = 0;

    static get now(): number {
        return cc.sys.now() + TTUtils.timeInterval * 1000;
    }

    static get clientWidth(): number {
        return cc.view.getCanvasSize().width;
    }

    static get clientHeight(): number {
        return cc.view.getCanvasSize().height;
    }

    static get width(): number {
        return cc.view.getDesignResolutionSize().width;
    }

    static get height(): number {
        return TTUtils.width * (TTUtils.clientHeight / TTUtils.clientWidth);
    }

    public static get isTTGame(): boolean {
        return cc.sys.platform === cc.sys.BYTEDANCE_GAME
    }

    /**
     * 根据秒数 获得 "mm:ss"格式的倒计时
     * @param second
     * @returns {string}
     */
    public static getRemainTimeBySecond(second: number): string {
        if (second <= 0) return "00:00";
        return this.formatBySecond(second, "mm:ss");
    }

    public static formatBySecond(second: number, format: string): string {
        if (second <= 0) return "00:00";
        let leftStr: string = format || "hh:mm:ss";
        if (second <= 0) return leftStr.replace('mm', "00")
            .replace('mm', "00")
            .replace('ss', "00");
        let h: number = Math.floor(second / 3600);
        let m: number = Math.floor((second % 3600) / 60);
        let s: number = Math.floor(second % 60);
        if (h < 100) {
            return leftStr.replace('hh', ('0' + (h + "")).slice(-2))
                .replace('mm', ('0' + (m + "")).slice(-2))
                .replace('ss', ('0' + (s + "")).slice(-2))
        } else {
            leftStr = leftStr.replace("hh", "hhh");
            return leftStr.replace('hhh', ('0' + (h + "")).slice(-3))
                .replace('mm', ('0' + (m + "")).slice(-2))
                .replace('ss', ('0' + (s + "")).slice(-2))
        }
    }
}