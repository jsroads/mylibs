const {ccclass, property} = cc._decorator;

const GRID_SIZE: number = 80; // 转盘格子尺寸
const TURNTABLE_SIZE: number = 5; // 横向纵向格子数
@ccclass
export class TurntableController extends cc.Component {

    @property({type: cc.Prefab})
    public itemPrefab: cc.Prefab = null; // 转盘格子预制体

    @property(cc.EditBox)
    public inputField: cc.EditBox = null;
    @property(cc.Button)
    public button: cc.Button = null;


    private itemList: cc.Node[] = []; // 转盘格子节点列表
    private currentNumberIndex: number = 0; // 当前点亮的数字索引
    private targetNumberIndex: number = 0; // 转盘停止时的目标数字索引
    private remainNumberIndex: number = 0; // 倒计时个数
    private frequencyLevels: number[] = [20, 16, 12, 8, 4, 2]; // 转盘转动的频率等级
    private currentFrequencyLevel: number = 0; // 当前频率等级
    private currentBg: cc.Node = null;// 前一个显示对象

    protected start() {
        this.initTurntable(); // 初始化转盘
    }

    private initTurntable() {
        const array = this.generateArrayWithZeros(TURNTABLE_SIZE); // 生成数组
        const offsetX = (GRID_SIZE * TURNTABLE_SIZE - GRID_SIZE) / 2; // 计算x轴偏移量
        const offsetY = (GRID_SIZE * TURNTABLE_SIZE - GRID_SIZE) / 2 + 200; // 计算y轴偏移量
        for (let i = 0; i < TURNTABLE_SIZE * TURNTABLE_SIZE; i++) {
            const itemNode = cc.instantiate(this.itemPrefab); // 实例化预制体
            // 设置节点位置
            itemNode.position = cc.v3(
                GRID_SIZE * (i % TURNTABLE_SIZE) - offsetX,
                offsetY - GRID_SIZE * Math.floor(i / TURNTABLE_SIZE),
                0
            );
            this.node.addChild(itemNode); // 添加节点
            if (array[i]) {
                itemNode.getChildByName("num").getComponent(cc.Label).string = array[i] + "";
                itemNode.name = array[i] + "";
                this.itemList.push(itemNode);
            } else {
                itemNode.getChildByName("num").getComponent(cc.Label).string = "";
            }
        }
        // 对 itemList 按数字排序
        this.itemList.sort((a, b) => {
            return parseInt(a.name) - parseInt(b.name);
        });
    }

    // 开始转动转盘
    private startTurntable() {
        this.button.interactable = false;
        this.resetNumbers(); // 重置数字显示
        this.currentNumberIndex = 0; // 初始化当前数字索引
        this.currentFrequencyLevel = 0; // 初始化当前频率等级
        this.remainNumberIndex = 0; // 倒计时个数
        const inputNumber: number = parseInt(this.inputField.string);
        this.targetNumberIndex = Number.isNaN(inputNumber) ? this.calculateTargetNumberIndex() : inputNumber - 1; // 计算目标数字索引
        this.remainNumberIndex = this.targetNumberIndex;
        if (Number.isNaN(inputNumber)) console.log("没有输入数字本次随机:", inputNumber);
        console.log("幸运数字:", this.targetNumberIndex + 1);
        // 定时更新转盘
        this.schedule(this.updateTurntable, 1 / this.frequencyLevels[this.currentFrequencyLevel]);
    }

    // 重置数字显示
    private resetNumbers() {
        this.currentBg = null;
        this.itemList.forEach((value, index) => {
            const bg = value.getChildByName("bg");
            bg.color = cc.Color.WHITE;
            // 设置数字节点的文本为对应的数字
            value.getChildByName("num").getComponent(cc.Label).string = value.name;
        });
    }

    // 更新转盘状态
    private updateTurntable() {
        // 重置上一个数字颜色
        if (this.currentBg) this.currentBg.color = cc.Color.WHITE;
        // 点亮当前数字
        this.highlightNumber(this.currentNumberIndex, cc.Color.RED);
        this.currentNumberIndex++;
        if (this.currentNumberIndex >= this.itemList.length) {
            this.currentNumberIndex = 0;
            this.currentFrequencyLevel++;
            if (this.currentFrequencyLevel >= this.frequencyLevels.length - 1) {
                this.unschedule(this.updateTurntable); // 取消定时更新转盘
                // const interval = 2 / this.targetNumberIndex;
                this.schedule(this.lastTurntable, 1 / this.frequencyLevels[this.currentFrequencyLevel], this.remainNumberIndex); // 降低到每秒点亮2个数字
            } else {
                this.unschedule(this.updateTurntable); // 取消定时更新转盘
                this.schedule(this.updateTurntable, 1 / this.frequencyLevels[this.currentFrequencyLevel]);
            }
        }
    }

    private lastTurntable() {
        // 重置上一个数字颜色
        if (this.currentBg) this.currentBg.color = cc.Color.WHITE;
        // 点亮当前数字
        this.highlightNumber(this.currentNumberIndex, cc.Color.RED);
        this.remainNumberIndex--;
        console.log("转盘:", this.remainNumberIndex);
        this.currentNumberIndex++;
        if (this.remainNumberIndex < 0) {
            console.log("转盘结束:", this.remainNumberIndex);
            this.scheduleOnce(() => {
                this.stopTurntable();
            }, 2);
        }
    }

// 停止转盘
    private stopTurntable() {
        this.highlightNumber(this.targetNumberIndex, cc.Color.GREEN); // 点亮目标数字
        this.setAllNumbersTo100(); // 将所有数字设置为100
        this.button.interactable = true;
    }

// 点亮指定数字
    private highlightNumber(index: number, color: cc.Color) {
        const numberNode = this.itemList[index];
        if (numberNode) {
            const bg = numberNode.getChildByName("bg");
            bg.color = color;
            this.currentBg = bg;
        }
    }

// 计算目标数字索引
    private calculateTargetNumberIndex(): number {
        // 计算转盘最终停止位置的数字索引
        // 用您想要的逻辑替换此处
        return Math.floor(Math.random() * this.itemList.length);
    }

    private setAllNumbersTo100() {
        for (const numberNode of this.itemList) {
            // 设置数字节点的文本为100
            numberNode.getChildByName("num").getComponent(cc.Label).string = "100";
        }
    }

    // 生成带有0的数组
    private generateArrayWithZeros(size: number): number[] {
        const array = new Array(size * size).fill(0);

        let currentNum = 1;

        const fillLayer = (layer: number) => {
            const maxIndex = size - layer - 1;

            // 顶部行
            for (let x = layer; x <= maxIndex; x++) {
                array[layer * size + x] = currentNum++;
            }
            // 右侧列
            for (let y = layer + 1; y <= maxIndex; y++) {
                array[y * size + maxIndex] = currentNum++;
            }
            // 底部行
            for (let x = maxIndex - 1; x >= layer; x--) {
                array[maxIndex * size + x] = currentNum++;
            }
            // 左侧列
            for (let y = maxIndex - 1; y > layer; y--) {
                array[y * size + layer] = currentNum++;
            }
        };

        for (let layer = 0; layer < 1; layer++) {
            fillLayer(layer);
        }

        return array;
    }
}
