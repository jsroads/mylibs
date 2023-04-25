/**
 * Created by jsroads on 2023/4/24 22:48
 * Note:
 */
import { _decorator, Component, EditBox } from "cc";
const { ccclass, property } = _decorator;

@ccclass("InputRestrictor")
export class InputRestrictor extends Component {
    @property(EditBox)
    public inputField: EditBox = null;

    start() {
        this.inputField.string = "";
        this.inputField.node.on(EditBox.EventType.TEXT_CHANGED, this.onTextChanged, this);
    }

    private onTextChanged(editbox: EditBox) {
        let num = parseInt(editbox.string);
        if (isNaN(num) || num < 1 || num > 16) {
            editbox.string = ""; // 清除输入
        } else {
            editbox.string = num.toString(); // 保留有效输入
        }
    }
}
