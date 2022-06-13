/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
export class TSObject2 {
    private _num:number;

    constructor(num: number) {
        this._num = num;
    }


    get num(): number {
        return this._num;
    }

    set num(value: number) {
        this._num = value;
    }
}