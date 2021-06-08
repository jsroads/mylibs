
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;

        const doc = { long: bs.Long.fromNumber(100) };
        const data = bs.serialize(doc);
        console.log('data:', data);
    }
}
