/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
class TSObject2 {
    constructor(num) {
        this._num = num;
    }
    get num() {
        return this._num;
    }
    set num(value) {
        this._num = value;
    }
}

/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
class TSObject1 {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
class TSObject3 {
    constructor(ts1, ts2) {
        this._ts1 = ts1;
        this._ts2 = ts2;
    }
    static valueOf() {
        let t1 = new TSObject1('1');
        let t2 = new TSObject2(2);
        return new TSObject3(t1, t2);
    }
    get ts1() {
        return this._ts1;
    }
    get ts2() {
        return this._ts2;
    }
    set ts1(value) {
        this._ts1 = value;
    }
    set ts2(value) {
        this._ts2 = value;
    }
}

/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
class TSObject4 {
    constructor(num, jkl) {
        this._num = num;
        this._jkl = jkl;
    }
    get num() {
        return this._num;
    }
    set num(value) {
        this._num = value;
    }
    get jkl() {
        return this._jkl;
    }
    set jkl(value) {
        this._jkl = value;
    }
}

/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
class TSObject5 {
    constructor(t1) {
        this._t1 = t1;
    }
    static create() {
        return new TSObject5(new TSObject1("1"));
    }
    get t1() {
        return this._t1;
    }
    set t1(value) {
        this._t1 = value;
    }
}

export { TSObject1, TSObject2, TSObject3, TSObject4, TSObject5 };
