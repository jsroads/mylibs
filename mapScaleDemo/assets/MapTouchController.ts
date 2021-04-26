import {
    _decorator,
    Component,
    EventMouse,
    EventTouch,
    isValid,
    Label,
    misc,
    Node,
    Rect,
    rect,
    Touch,
    UITransform,
    v2,
    v3,
    Vec2,
    Vec3
} from "cc";
/**
 * Created by jsroads on 2021/4/15.4:35 下午
 * Note:
 */
const {ccclass, property} = _decorator;
@ccclass('MapTouchController')
export class MapTouchController extends Component {
    @property({
        type: Node,
        tooltip: '目标节点'
    })
    public map: Node = null!;

    @property(Label)
    public scaleTime: Label = null!;

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

    private isMoving: boolean = false; // 是否拖动地图flag
    private mapTouchList: any[] = []; // 触摸点列表容器

    @property
    public isStrict: boolean = false; // 默认为非严格模式

    protected onLoad(): void {

    }
    protected start() {
        this.addEvent();
        // this.defaultScaling = 1
        this.smoothOperate(this.map, v3(0, 0, 0), this.defaultScaling);
        this.map.setPosition(0, 0);
    }

    // 有些设备单点过于灵敏，单点操作会触发TOUCH_MOVE回调，在这里作误差值判断
    private canStartMove(touch: any): boolean {
        let startPos: any = touch.getPreviousLocation();
        let nowPos: any = touch.getUILocation();
        // 有些设备单点过于灵敏，单点操作会触发TOUCH_MOVE回调，在这里作误差值判断
        return Math.abs(nowPos.x - startPos.x) > this.moveOffset || Math.abs(nowPos.y - startPos.y) > this.moveOffset;
    }

    private addEvent(): void {
        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            if (this.locked) return;
            let touches: Touch[] = event.getTouches(); // 获取所有触摸点
            if (this.isStrict) { // 严格模式下过滤掉初始点击位置不在目标节点范围内的触摸点
                touches
                    .filter(v => {
                        let startPos: Vec2 = v2(v.getStartLocation()); // 触摸点最初的位置
                        let transform = <UITransform>this.node.getComponent(UITransform);
                        let worldPos: Vec3 = transform.convertToWorldSpaceAR(v3(0, 0, 0));
                        let worldRect: Rect = rect(
                            worldPos.x - transform.width / 2,
                            worldPos.y - transform.height / 2,
                            transform.width,
                            transform.height
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
                let touch1: Touch = touches[0];
                let touch2: Touch = touches[1];
                let delta1: Vec2 = v2(touch1.getDelta());
                let delta2: Vec2 = v2(touch2.getDelta());
                let transform = <UITransform>this.node.getComponent(UITransform);
                let touchPoint1: Vec3 = transform.convertToNodeSpaceAR(v3(touch1.getUILocation().x, touch1.getUILocation().y));
                let touchPoint2: Vec3 = transform.convertToNodeSpaceAR(v3(touch2.getUILocation().x, touch2.getUILocation().y));

                let distance: Vec3 = touchPoint1.subtract(touchPoint2);
                // const rateV2: Vec2 = v2(this.fingerIncreaseRate, this.fingerIncreaseRate);
                let delta: Vec2 = delta1.subtract(delta2).multiplyScalar(this.fingerIncreaseRate);
                let scale: number = 1;
                if (Math.abs(distance.x) > Math.abs(distance.y)) {
                    scale = (distance.x + delta.x) / distance.x * this.map.getScale().x;
                } else {
                    scale = (distance.y + delta.y) / distance.y * this.map.getScale().y;
                }
                let pos: Vec3 = touchPoint2.add(v3(distance.x / 2, distance.y / 2));
                this.smoothOperate(this.map, pos, scale);
            } else if (touches.length === 1) {
                // console.log('single touch');
                // single touch
                let touch: Touch = touches[0];
                if (this.isMoving || this.canStartMove(touch)) {
                    this.isMoving = true;
                    let dir: Vec3 = v3(touch.getUIDelta().x,touch.getUIDelta().y);
                    this.dealMove(dir, this.map, this.node);
                }else {
                    console.log("不能移动")
                }
            }else {
                console.log("未知触摸类型")
            }
            event.propagationStopped = true;
        }, this);
        this.node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
            if (this.locked) return;

            let touches: any[] = this.isStrict ? this.mapTouchList : event.getTouches();
            if (touches.length <= 1) {
                if (!this.isMoving) {
                    let worldPos: Vec3 = v3(event.getLocation().x, event.getLocation().y);
                    let transform = <UITransform>this.map.getComponent(UITransform);
                    let nodePos: Vec3 = transform.convertToNodeSpaceAR(worldPos);
                    this.dealSelect(nodePos);
                }
                this.isMoving = false; // 当容器中仅剩最后一个触摸点时将移动flag还原
            }
            if (this.isStrict) this.removeTouchFromContent(event, this.mapTouchList);
            event.propagationStopped = true;
        }, this);

        this.node.on(Node.EventType.TOUCH_CANCEL, (event: EventTouch) => {
            if (this.locked) return;

            let touches: any[] = this.isStrict ? this.mapTouchList : event.getTouches();
            // 当容器中仅剩最后一个触摸点时将移动flag还原
            if (touches.length <= 1) this.isMoving = false;

            if (this.isStrict)
                this.removeTouchFromContent(event, this.mapTouchList);
            event.propagationStopped = true;
        }, this);

        this.node.on(Node.EventType.MOUSE_WHEEL, (event: EventMouse) => {
            if (this.locked) return;
            let scrollDelta: number = event.getScrollY();
            let scale: number = (this.map.getScale().x + (scrollDelta / this.increaseRate));
            // scale = this.map.getScale().x+0.2
            let target: Node = this.map;
            let transform = <UITransform>this.node.getComponent(UITransform);
            let pos: Vec3 = transform.convertToNodeSpaceAR(v3(event.getUILocation().x, event.getUILocation().y));
            // pos = v3(50,50)
            this.smoothOperate(target, pos, scale);
            event.propagationStopped = true;
        }, this);
    }

    public removeTouchFromContent(event: EventTouch, content: any[]): void {
        let eventToucheIDs: number[] = event['getTouches']().map(v => v.getID());
        for (let len = content.length, i = len - 1; i >= 0; --i) {
            if (eventToucheIDs.indexOf(content[i].id) > -1)
                content.splice(i, 1); // 删除触摸
        }
    }

    private smoothOperate(target: Node, pos: Vec3, scale: number): void {
        // 放大缩小
        if (this.minScale <= scale && scale <= this.maxScale) {
            // 获取速率的小数后几位，防止速率过小时取整直接舍弃掉了变化
            scale = Number(scale.toFixed(2));
            // let deltaScale: number = scale - target.getScale().x;
            let uiScaleVec3: Vec3 = v3(target.getScale().x, target.getScale().y, 1)
            let uiTouchPos: Vec3 = (pos.clone().subtract(target.position.clone())).divide(uiScaleVec3);
            let mapPos: Vec3 = pos.clone().subtract(uiTouchPos.multiplyScalar(scale));
            //UI setScale z 必须为非0
            target.setScale(v3(scale, scale, 1));
            this.dealScalePos(v3(mapPos.x,mapPos.y), target);
        } else {
            console.log("smile----:", JSON.stringify("特殊情况"));
            scale = misc.clampf(scale, this.minScale, this.maxScale);
        }
        // render ui
        if (isValid(this.scaleTime))
            this.scaleTime.string = `${Math.floor(scale * 100)}%`;
    }

    private dealScalePos(pos: Vec3, target: Node): void {
        let transform = <UITransform>this.node.getComponent(UITransform);
        let worldPos: Vec3 = transform.convertToWorldSpaceAR(pos);
        let nodePos: Vec3 = transform.convertToNodeSpaceAR(worldPos);
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
        target.setPosition(v3(pos.x, pos.y, 0));
    }

    private dealMove(dir: Vec3, map: Node, container: Node): void {
        let worldPos: Vec3 = (<UITransform>map.getComponent(UITransform)).convertToWorldSpaceAR(v3(Vec3.ZERO));
        let nodePos: Vec3 = (<UITransform>container.getComponent(UITransform)).convertToNodeSpaceAR(worldPos);
        nodePos.add(dir);
        let edge: any = this.calculateEdge(map, container, nodePos);
        if (edge.left <= 0 && edge.right <= 0) {
            map.setPosition(map.position.x + dir.x, map.position.y);
        }
        if (edge.top <= 0 && edge.bottom <= 0) {
            map.setPosition(map.position.x, map.position.y + dir.y)
        }
    }

    private dealSelect(nodePos: Vec3): void {
        console.log(`click map on (${nodePos.x}, ${nodePos.y})`);
        // do sth
        if (this.singleTouchCb) this.singleTouchCb(nodePos);
    }

    // 计算map的四条边距离容器的距离，为负代表超出去
    public calculateEdge(target: Node, container: Node, nodePos: Vec3): any {
        // distance to the edge when anchor is (0.5, 0.5)

        let containerTransform: UITransform = <UITransform>container.getComponent(UITransform);
        let targetTransform: UITransform = <UITransform>target.getComponent(UITransform);
        let targetScale = target.scale

        let horizontalDistance: number = (containerTransform.width - targetTransform.width * targetScale.x) / 2;
        let verticalDistance: number = (containerTransform.height - targetTransform.height * targetScale.y) / 2;

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

}