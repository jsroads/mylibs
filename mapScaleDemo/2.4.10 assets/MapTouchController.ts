/**
 * Created by jsroads on 2021/4/15.4:35 下午
 * Note:
 */
const {ccclass, property} = cc._decorator;
const NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 2;//统计最大移动次数个数
@ccclass
export class MapTouchController extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: '目标节点'
    })
    public map: cc.Node = null!;

    @property(cc.Label)
    public scaleTime: cc.Label = null!;

    @property({
        tooltip: '图片初始缩放'
    })
    public defaultScaling: number = 1.1;

    @property({
        tooltip: '图片缩放最小scale'
    })
    public minScale: number = 1;

    @property({
        tooltip: '图片缩放最大scale'
    })
    public maxScale: number = 3;

    @property({
        tooltip: '单点触摸容忍误差'
    })
    public moveOffset: number = 2;

    @property({
        tooltip: '滚轮缩放比率'
    })
    public increaseRate: number = 10000;

    @property({
        displayName: '双指缩放速率',
        max: 10,
        min: 0.001,
    })
    public fingerIncreaseRate: number = 1;

    public locked: boolean = false; // 操作锁
    public singleTouchCb: Function = null!; // 点击回调函数
    @property({type: false})
    public isStrict: boolean = false; // 默认为非严格模式
    @property({
        tooltip: "是否开启滚动惯性"
    })
    public inertia: boolean = true; // 是否开启滚动惯性
    @property({
        tooltip: "惯性系数，范围 0~1, 1表示立刻停止 ",
        min: 0.01,
        max: 1,
        step: 0.01,
        range: [0.01, 1],
        slide: true,
        visible: function (this: MapTouchController) {
            return this.inertia;
        }
    })
    public brake: number = 0.5; //惯性系数
    @property({
        tooltip: "阻尼系数，摩擦力 范围大于 0 ",
        min: 0.01,
        max: 10,
        step: 0.01,
        visible: function (this: MapTouchController) {
            return this.inertia;
        }
    })
    public friction: number = 0.85; //阻尼系数，摩擦力
    protected touchMoveDisplacements: cc.Vec2[] = [];//统计位置数组
    protected touchMoveTimeDeltas: number[] = [];//统计时间数组
    protected touchMovePreviousTimestamp = 0;//前一次事件时间戳
    protected autoScrolling: boolean = false;//是否在惯性移动中
    protected speed: cc.Vec2 = new cc.Vec2();//当前速度
    private isMoving: boolean = false; // 是否拖动地图flag
    private mapTouchList: any[] = []; // 触摸点列表容器

    public removeTouchFromContent(event: cc.Event.EventTouch, content: any[]): void {
        let eventToucheIDs: number[] = event['getTouches']().map(v => v.getID());
        for (let len = content.length, i = len - 1; i >= 0; --i) {
            if (eventToucheIDs.indexOf(content[i].id) > -1)
                content.splice(i, 1); // 删除触摸
        }
    }

    // 计算map的四条边距离容器的距离，为负代表超出去
    public calculateEdge(target: cc.Node, container: cc.Node, nodePos: cc.Vec3): any {
        // distance to the edge when anchor is (0.5, 0.5)
        let targetScaleX: number = target.scaleX;
        let targetScaleY: number = target.scaleY;
        let horizontalDistance: number = (container.width - target.width * targetScaleX) / 2;
        let verticalDistance: number = (container.height - target.height * targetScaleY) / 2;

        let left: number = horizontalDistance + nodePos.x;
        let right: number = horizontalDistance - nodePos.x;
        let top: number = verticalDistance - nodePos.y;
        let bottom: number = verticalDistance + nodePos.y;

        return {left, right, top, bottom};
    }

    /**
     * @brief 设置是否严格模式，如果为严格模式，则会过滤不在目标身上的触摸点， 反之不作处理
     *              默认为非严格模式
     * @param isStrict
     */
    public setStrictPattern(isStrict: boolean): void {
        this.isStrict = isStrict;
    }

    public getStrictPattern(): boolean {
        return this.isStrict;
    }

    protected onLoad(): void {

    }

    protected start() {
        this.addEvent();
        // this.defaultScaling = 1
        this.smoothOperate(this.map, cc.v3(0, 0, 0), this.defaultScaling);
        this.map.setPosition(0, 225);
    }

    protected handleReleaseLogic() {
        if (!this.inertia) return;
        this.touchMovePreviousTimestamp = Date.now();
        this.touchMoveDisplacements.length = 0;
        this.touchMoveTimeDeltas.length = 0;
        this.autoScrolling = false;
    }

    protected gatherTouchMove(clampDt: cc.Vec2) {
        while (this.touchMoveDisplacements.length >= NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED) {
            this.touchMoveDisplacements.shift();
            this.touchMoveTimeDeltas.shift();
        }
        this.touchMoveDisplacements.push(clampDt);
        const timeStamp = Date.now();
        this.touchMoveTimeDeltas.push((timeStamp - this.touchMovePreviousTimestamp) / 1000);
        this.touchMovePreviousTimestamp = timeStamp;
    }

    protected processInertiaScroll() {
        if (this.inertia) {
            this.speed = this.calculateTouchMoveVelocity();
            if (Math.abs(this.speed.x) > 0 || Math.abs(this.speed.y) > 0) {
                this.autoScrolling = true;
                return;
            }
        }
    }

    protected calculateTouchMoveVelocity(): cc.Vec2 {
        let totalTime = 0;
        totalTime = this.touchMoveTimeDeltas.reduce(function (a, b) {
            return a + b;
        }, totalTime);
        if (totalTime <= 0 || totalTime >= 0.5) {
            return cc.v2(0, 0);
        }

        let totalMovement = cc.v2(0, 0);
        totalMovement = this.touchMoveDisplacements.reduce(function (a, b) {
            return a.add(b);
        }, totalMovement);
        let result = cc.v2(totalMovement.x * (1 - this.brake),
            totalMovement.y * (1 - this.brake));
        return result;
    }

    protected update(dt: number) {
        if (!this.inertia) return;
        if (!this.autoScrolling) return;
        let speed = this.speed.clone();
        speed = speed.multiplyScalar(this.friction);
        let worldPos: cc.Vec3 = this.map.convertToWorldSpaceAR(cc.v3(0, 0, 0)).clone();
        let nodePos: cc.Vec3 = this.node.convertToNodeSpaceAR(worldPos).clone();
        nodePos.add(cc.v3(speed.x, speed.y, 0));
        this.speed = cc.v2(Math.round(speed.x * 100) / 100, Math.round(speed.y * 100) / 100);
        let targetPos: cc.Vec3 = cc.v3(this.map.position.x, this.map.position.y, this.map.position.z);
        if (Math.abs(this.speed.x) < 0.1 && Math.abs(this.speed.y) < 0.1) {
            this.autoScrolling = false;
            return;
        }
        targetPos = targetPos.add(cc.v3(this.speed.x, this.speed.y));
        let edge: any = this.calculateEdge(this.map, this.node, nodePos);
        if (edge.left > 0) {
            targetPos.x -= edge.left;
        }
        if (edge.right > 0) {
            targetPos.x += edge.right;
        }
        if (edge.top > 0) {
            targetPos.y += edge.top;
        }
        if (edge.bottom > 0) {
            targetPos.y -= edge.bottom;
        }
        this.map.setPosition(targetPos.x, targetPos.y, targetPos.z);
    }

    private canStartMove(touch: cc.Touch): boolean {
        // 有些设备单点过于灵敏，单点操作会触发TOUCH_MOVE回调，在这里作误差值判断
        return touch.getDelta().mag() > this.moveOffset;
    }

    //计算距离
    private moveDistance(touch: cc.Touch): cc.Vec3 {
        return cc.v3(touch.getDelta().x, touch.getDelta().y,0);
    }

    private addEvent(): void {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event: cc.Event.EventTouch) => {
            if (this.locked) return;
            let touches: cc.Touch[] = event.getTouches(); // 获取所有触摸点
            if (this.isStrict) { // 严格模式下过滤掉初始点击位置不在目标节点范围内的触摸点
                touches
                    .filter(v => {
                        let startPos: cc.Vec2 = cc.v2(v.getStartLocation()); // 触摸点最初的位置
                        let worldPos: cc.Vec3 = this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
                        let worldRect: cc.Rect = cc.rect(
                            worldPos.x - this.node.width / 2,
                            worldPos.y - this.node.height / 2,
                            this.node.width,
                            this.node.height
                        );
                        return worldRect.contains(startPos);
                    })
                    .forEach(v => { // 将有效的触摸点放在容器里自行管理
                        let intersection: any[] = this.mapTouchList.filter(v1 => v1.id === v.getID());
                        if (intersection.length === 0)
                            this.mapTouchList[this.mapTouchList.length] = ({id: v.getID(), touch: v});
                    });
                touches = this.mapTouchList.map(v => v.touch);
            }

            if (touches.length >= 2) {
                // console.log('multi touch');
                // multi touch
                this.isMoving = true;
                let touch1: cc.Touch = touches[0];
                let touch2: cc.Touch = touches[1];
                let delta1: cc.Vec2 = cc.v2(touch1.getDelta());
                let delta2: cc.Vec2 = cc.v2(touch2.getDelta());
                let touchPoint1: cc.Vec3 = this.node.convertToNodeSpaceAR(cc.v3(touch1.getLocation().x, touch1.getLocation().y));
                let touchPoint2: cc.Vec3 = this.node.convertToNodeSpaceAR(cc.v3(touch2.getLocation().x, touch2.getLocation().y));

                let distance: cc.Vec3 = touchPoint1.subtract(touchPoint2);
                // const rateV2: cc.Vec2 = cc.v2(this.fingerIncreaseRate, this.fingerIncreaseRate);
                let delta: cc.Vec2 = delta1.subtract(delta2).multiplyScalar(this.fingerIncreaseRate);
                let scale: number = 1;
                if (Math.abs(distance.x) > Math.abs(distance.y)) {
                    scale = (distance.x + delta.x) / distance.x * this.map.scaleX;
                } else {
                    scale = (distance.y + delta.y) / distance.y * this.map.scaleY;
                }
                let pos: cc.Vec3 = touchPoint2.add(cc.v3(distance.x / 2, distance.y / 2));
                this.smoothOperate(this.map, pos, scale);
            } else if (touches.length === 1) {
                // console.log('single touch');
                // single touch
                const touch: cc.Touch = touches[0];
                if (this.isMoving || this.canStartMove(touch)) {
                    this.isMoving = true;
                    const distance: cc.Vec3 = this.moveDistance(touch);
                    this.dealMove(distance, this.map, this.node);
                } else {
                    // const distance: cc.Vec2 = this.moveDistance(touch);
                    // console.log("smile----this.isMoving:" + JSON.stringify(this.isMoving));
                    // console.log("smile----distance:" + JSON.stringify(distance));
                    console.log("不能移动");
                }
            } else {
                console.log("未知触摸类型");
            }
            event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_START, (event: cc.Event.EventTouch) => {
            if (this.locked) return;
            this.handleReleaseLogic();
            event.stopPropagation();
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            if (this.locked) return;
            let touches: any[] = this.isStrict ? this.mapTouchList : event.getTouches();
            if (touches.length <= 1) {
                if (!this.isMoving) {
                    let worldPos: cc.Vec3 = cc.v3(event.getLocation().x, event.getLocation().y);
                    let nodePos: cc.Vec3 = this.map.convertToNodeSpaceAR(worldPos);
                    this.dealSelect(nodePos);
                }
                this.isMoving = false; // 当容器中仅剩最后一个触摸点时将移动flag还原
                this.processInertiaScroll();
            }
            if (this.isStrict) this.removeTouchFromContent(event, this.mapTouchList);
            event.stopPropagation();
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event: cc.Event.EventTouch) => {
            if (this.locked) return;
            this.handleReleaseLogic();
            let touches: any[] = this.isStrict ? this.mapTouchList : event.getTouches();
            // 当容器中仅剩最后一个触摸点时将移动flag还原
            if (touches.length <= 1) this.isMoving = false;
            this.handleReleaseLogic();
            if (this.isStrict)
                this.removeTouchFromContent(event, this.mapTouchList);
            event.stopPropagation();
        }, this);

        this.node.on(cc.Node.EventType.MOUSE_WHEEL, (event: cc.Event.EventMouse) => {
            if (this.locked) return;
            // this.handleReleaseLogic();
            let scrollDelta: number = event.getScrollY();
            let scale: number = (this.map.scale + (scrollDelta / this.increaseRate));
            let target: cc.Node = this.map;
            let pos: cc.Vec3 = this.node.convertToNodeSpaceAR(cc.v3(event.getLocation().x, event.getLocation().y, 0));
            // pos = cc.v3(50,50)
            this.smoothOperate(target, pos, scale);
            event.stopPropagation();
        }, this);
    }

    private smoothOperate(target: cc.Node, pos: cc.Vec3, scale: number): void {
        // 放大缩小
        if (this.minScale <= scale && scale <= this.maxScale) {
            // 获取速率的小数后几位，防止速率过小时取整直接舍弃掉了变化
            scale = Number(scale.toFixed(2));
            let uiTouchPos: cc.Vec3 = (pos.clone().subtract(target.position.clone())).divide(target.scale);
            let mapPos: cc.Vec3 = pos.clone().subtract(uiTouchPos.multiplyScalar(scale));
            target.setScale(scale);
            this.dealScalePos(cc.v3(mapPos.x, mapPos.y), target);
        } else {
            scale = cc.misc.clampf(scale, this.minScale, this.maxScale);
        }
        // render ui
        if (cc.isValid(this.scaleTime))
            this.scaleTime.string = `${Math.floor(scale * 100)}%`;
    }

    private dealScalePos(pos: cc.Vec3, target: cc.Node): void {

        let worldPos: cc.Vec3 = this.node.convertToWorldSpaceAR(pos);
        let nodePos: cc.Vec3 = this.node.convertToNodeSpaceAR(worldPos);
        let edge: any = this.calculateEdge(target, this.node, nodePos);
        if (edge.left > 0) {
            pos.x -= edge.left;
        }
        if (edge.right > 0) {
            pos.x += edge.right;
        }
        if (edge.top > 0) {
            pos.y += edge.top;
        }
        if (edge.bottom > 0) {
            pos.y -= edge.bottom;
        }
        target.setPosition(cc.v3(pos.x, pos.y, 0));
    }

    private dealMove(dir: cc.Vec3, map: cc.Node, container: cc.Node): void {
        const clampDt = cc.v2(dir.x, dir.y);
        let worldPos: cc.Vec3 = map.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        let nodePos: cc.Vec3 = container.convertToNodeSpaceAR(worldPos);
        nodePos.x += dir.x;
        nodePos.y += dir.y;
        let edge: any = this.calculateEdge(map, container, nodePos), targetPos: cc.Vec3 = map.position.clone();
        if (edge.left <= 0 && edge.right <= 0) {
            targetPos.x += dir.x;
        } else {
            clampDt.x = 0;
        }
        if (edge.top <= 0 && edge.bottom <= 0) {
            targetPos.y += dir.y;
        } else {
            clampDt.y = 0;
        }
        this.gatherTouchMove(clampDt);
        // this.targetPos = this.targetPos.lerp(this.targetPos,0.016 * 2.0);
        map.setPosition(targetPos.x, targetPos.y, targetPos.z);
    }

    private dealSelect(nodePos: cc.Vec3): void {
        // console.log(`click map on (${nodePos.x}, ${nodePos.y})`);
        if (this.singleTouchCb) this.singleTouchCb(nodePos);
    }


}