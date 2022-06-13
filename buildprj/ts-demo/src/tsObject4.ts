/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
export class TSObject4{
    private _num:number;
    private _jkl:string;

    constructor(num: number, jkl: string) {
        this._num = num;
        this._jkl = jkl;
    }


    get num(): number {
        return this._num;
    }

    set num(value: number) {
        this._num = value;
    }

    get jkl(): string {
        return this._jkl;
    }

    set jkl(value: string) {
        this._jkl = value;
    }
}