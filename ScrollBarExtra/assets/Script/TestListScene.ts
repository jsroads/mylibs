/**
 * Created by jsroads on 2021/10/29.12:23 下午
 * Note:
 */
import { ScrollList } from "./ScrollList";
import { ScrollBarEnhance } from "./ScrollBarEnhance";

const { ccclass, property } = cc._decorator;

@ccclass
export class TestListScene extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;
    @property(ScrollList)
    private scrollList: ScrollList = null!;

    @property(ScrollList)
    private scrollList2: ScrollList = null!;
    @property(ScrollBarEnhance)
    private scrollBarEnhance: ScrollBarEnhance = null!;
    @property(ScrollBarEnhance)
    private scrollBarEnhance2: ScrollBarEnhance = null!;
    protected info = {rewards: []};
    async onLoad() {
        this.info.rewards = [];
        for (let i = 0; i < 20; i++) {
            const datum = {index: i, name: "name" + i};
            this.info.rewards.push(datum);
        }

    }
    async start() {
        this.scrollList.numItems = this.info.rewards.length
        this.scrollList2.numItems = this.info.rewards.length
    }
}
