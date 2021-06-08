
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FirstScene')
export class FirstScene extends Component {
    start () {
// Serialize a document
        const doc = { long: bs.Long.fromNumber(100) };
        const data = bs.serialize(doc);
        console.log('data:', data);

// De serialize it again
        const doc_2 = bs.deserialize(data);
        console.log('doc_2:', doc_2);
    }


}

