/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import {TSObject1} from "./tsObject1";

export class TSObject5 {
    private _t1: TSObject1;

    constructor(t1: TSObject1) {
        this._t1 = t1;
    }

    static create() {
        return new TSObject5(new TSObject1("1"));
    }


    get t1(): TSObject1 {
        return this._t1;
    }

    set t1(value: TSObject1) {
        this._t1 = value;
    }
}