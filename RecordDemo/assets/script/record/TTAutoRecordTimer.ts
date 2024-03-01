
export class TTAutoRecordTimer extends cc.Component {
    /*时间计数器*/
    public count: number = 0;

    private updateCallback: (count: number) => void;

    /*开始计时*/
    public startTimer(interval: number,callback: (count: number) => void): void {
        const isScheduled =  cc.director.getScheduler().isScheduled(this.repeatHandler, this);
        if (isScheduled) {
            this.unschedule(this.repeatHandler);
        }
        this.schedule(this.repeatHandler, interval, cc.macro.REPEAT_FOREVER);
        this.updateCallback = callback;
        this.count = 0;
    }

    /**
     *
     * 停止计时
     */
    public stopTimer(): void {
        this.count = 0;
        this.unschedule(this.repeatHandler);
    }

    /**
     *
     * @param dt {number} 此次迭代间隔时间
     */
    public repeatHandler(dt: number): void {
        this.count++;
        this.updateCallback && this.updateCallback(this.count);
    }
}