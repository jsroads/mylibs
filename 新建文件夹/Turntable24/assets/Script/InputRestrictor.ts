/**
 * Created by jsroads on 2023/4/24 22:48
 * Note:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class InputRestrictor extends cc.Component {
    @property(cc.EditBox)
    public inputField: cc.EditBox = null;

    start() {
        this.inputField.string = "";
        this.inputField.node.on("text-changed", this.onTextChanged, this);
    }
    private onTextChanged(editbox: cc.EditBox) {
        let num = parseInt(editbox.string);
        if (isNaN(num) || num < 1 || num > 16) {
            editbox.string = ""; // 清除输入
        } else {
            editbox.string = num.toString(); // 保留有效输入
        }
    }
}
