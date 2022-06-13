/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import {TSObject1, TSObject2, TSObject3, TSObject4, TSObject5} from "../src/index";

let t1 = new TSObject1('1');
let t2 = new TSObject2(2);
console.log(t1);
console.log(t2);
let t3 = new TSObject3(t1, t2);
console.log(t3);
let t4 = new TSObject4(4, "4");
console.log(t4);
let t5 = new TSObject5(t1);
console.log(t5);