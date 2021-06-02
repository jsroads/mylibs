/**
 * @author xshu
 * @date 2019-12-07
 */

const { ccclass, property } = cc._decorator;

@ccclass
class MapControl extends cc.Component {

    @property({
        type: cc.Node,
        tooltip: '目标节点'
    })
    public map: cc.Node = null;

    @property(cc.Label)
    public scaleTime: cc.Label = null;

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
    public singleTouchCb: Function = null; // 点击回调函数

    private isMoving: boolean = false; // 是否拖动地图flag
    private mapTouchList: any[] = []; // 触摸点列表容器

    @property
    public isStrict: boolean = false; // 默认为非严格模式

    protected onLoad(): void {

    }

    protected start() {
        this.addEvent();
        this.smoothOperate(this.map, cc.Vec2.ZERO, this.defaultScaling);
    }

    // 有些设备单点过于灵敏，单点操作会触发TOUCH_MOVE回调，在这里作误差值判断
    private canStartMove(touch: any): boolean {
        let startPos: any = touch.getStartLocation();
        let nowPos: any = touch.getLocation();
        // 有些设备单点过于灵敏，单点操作会触发TOUCH_MOVE回调，在这里作误差值判断
        return (Math.abs(nowPos.x - startPos.x) > this.moveOffset
            || Math.abs(nowPos.y - startPos.y) > this.moveOffset);
    }

    private addEvent(): void {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event: any) {
            if (this.locked) return;

            let touches: any[] = event.getTouches(); // 获取所有触摸点
            if (this.isStrict) { // 严格模式下过滤掉初始点击位置不在目标节点范围内的触摸点
                touches
                    .filter(v => {
                        let startPos: cc.Vec2 = cc.v2(v.getStartLocation()); // 触摸点最初的位置
                        let worldPos: cc.Vec2 = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
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
                            this.mapTouchList[this.mapTouchList.length] = ({ id: v.getID(), touch: v });
                    });
                touches = this.mapTouchList.map(v => v.touch);
            }

            if (touches.length >= 2) {
                // cc.log('multi touch');
                // multi touch
                this.isMoving = true;
                let touch1: any = touches[0];
                let touch2: any = touches[1];
                let delta1: cc.Vec2 = cc.v2(touch1.getDelta());
                let delta2: cc.Vec2 = cc.v2(touch2.getDelta());
                let touchPoint1: cc.Vec2 = this.map.convertToNodeSpaceAR(cc.v2(touch1.getLocation()));
                let touchPoint2: cc.Vec2 = this.map.convertToNodeSpaceAR(cc.v2(touch2.getLocation()));
                let distance: cc.Vec2 = touchPoint1.sub(touchPoint2);
                const rateV2: cc.Vec2 = cc.v2(this.fingerIncreaseRate, this.fingerIncreaseRate);
                let delta: cc.Vec2 = delta1.sub(delta2).scale(rateV2);
                let scale: number = 1;
                if (Math.abs(distance.x) > Math.abs(distance.y)) {
                    scale = (distance.x + delta.x) / distance.x * this.map.scaleX;
                }
                else {
                    scale = (distance.y + delta.y) / distance.y * this.map.scaleY;
                }
                let pos: cc.Vec2 = touchPoint2.add(cc.v2(distance.x / 2, distance.y / 2));
                this.smoothOperate(this.map, pos, scale);
            }
            else if (touches.length === 1) {
                // cc.log('single touch');
                // single touch
                if (this.isMoving || this.canStartMove(touches[0])) {
                    this.isMoving = true;
                    let dir: cc.Vec2 = cc.v2(touches[0].getDelta());
                    this.dealMove(dir, this.map, this.node);
                }
            }
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, function (event: any) {
            if (this.locked) return;

            let touches: any[] = this.isStrict ? this.mapTouchList : event.getTouches();
            if (touches.length <= 1) {
                if (!this.isMoving) {
                    let worldPos: cc.Vec2 = cc.v2(event.getLocation());
                    let nodePos: cc.Vec2 = this.map.convertToNodeSpaceAR(worldPos);
                    this.dealSelect(nodePos);
                }
                this.isMoving = false; // 当容器中仅剩最后一个触摸点时将移动flag还原
            };
            if (this.isStrict)
                this.removeTouchFromContent(event, this.mapTouchList);
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event: any) {
            if (this.locked) return;

            let touches: any[] = this.isStrict ? this.mapTouchList : event.getTouches();
            // 当容器中仅剩最后一个触摸点时将移动flag还原
            if (touches.length <= 1) this.isMoving = false;

            if (this.isStrict)
                this.removeTouchFromContent(event, this.mapTouchList);
        }, this);

        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function (event: any) {
            if (this.locked) return;

            let worldPos: cc.Vec2 = cc.v2(event.getLocation());
            let scrollDelta: number = event.getScrollY();
            let scale: number = (this.map.scale + (scrollDelta / this.increaseRate));

            let target: cc.Node = this.map;
            let pos: cc.Vec2 = target.convertToNodeSpaceAR(worldPos);
            this.smoothOperate(target, pos, scale);
        }, this);
    }

    public removeTouchFromContent(event: any, content: any[]): void {
        let eventToucheIDs: number[] = event['getTouches']().map(v => v.getID());
        for (let len = content.length, i = len - 1; i >= 0; --i) {
            if (eventToucheIDs.indexOf(content[i].id) > -1)
                content.splice(i, 1); // 删除触摸
        }
    }

    private smoothOperate(target: cc.Node, pos: cc.Vec2, scale: number): void {
        // 放大缩小
        if (this.minScale <= scale && scale <= this.maxScale) {
            // 当前缩放值与原来缩放值之差
            let deltaScale: number = scale - target.scaleX;
            // 当前点击的坐标与缩放值差像乘
            let gapPos: cc.Vec2 = pos.scale(cc.v2(deltaScale, deltaScale));
            // 当前node坐标位置减去点击 点击坐标和缩放值的值
            let mapPos: cc.Vec2 = target.position.sub(gapPos);
            // 获取速率的小数后几位，防止速率过小时取整直接舍弃掉了变化
            const rateStr: string = this.fingerIncreaseRate.toString();
            const digit: number = rateStr.split('.')[1] ? rateStr.split('.')[1].length : 0;
            const rate: number = Math.pow(10, 2 + digit);
            scale = Math.floor(scale * rate) / rate;
            target.scale = scale;
            this.dealScalePos(mapPos, target);
        }
        else {
            scale = cc.misc.clampf(scale, this.minScale, this.maxScale);
        }
        // render ui
        if (cc.isValid(this.scaleTime))
            this.scaleTime.string = `${Math.floor(scale * 100)}%`;
    }

    private dealScalePos(pos: cc.Vec2, target: cc.Node): void {
        if (target.scale === 1) {
            pos = cc.Vec2.ZERO;
        }
        else {
            let worldPos: cc.Vec2 = this.node.convertToWorldSpaceAR(pos);
            let nodePos: cc.Vec2 = this.node.convertToNodeSpaceAR(worldPos);
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
        }
        target.position = pos;
    }

    private dealMove(dir: cc.Vec2, map: cc.Node, container: cc.Node): void {
        let worldPos: cc.Vec2 = map.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let nodePos: cc.Vec2 = container.convertToNodeSpaceAR(worldPos);
        nodePos.x += dir.x;
        nodePos.y += dir.y;
        let edge: any = this.calculateEdge(map, container, nodePos);
        if (edge.left <= 0 && edge.right <= 0) {
            map.x += dir.x;
        }
        if (edge.top <= 0 && edge.bottom <= 0) {
            map.y += dir.y;
        }
    }

    private dealSelect(nodePos: cc.Vec2): void {
        cc.log(`click map on (${nodePos.x}, ${nodePos.y})`);
        // do sth
        if (this.singleTouchCb) this.singleTouchCb(nodePos);
    }

    // 计算map的四条边距离容器的距离，为负代表超出去
    public calculateEdge(target: cc.Node, container: cc.Node, nodePos: cc.Vec2): any {
        // distance to the edge when anchor is (0.5, 0.5)
        let horizontalDistance: number = (container.width - target.width * target.scaleX) / 2;
        let verticalDistance: number = (container.height - target.height * target.scaleY) / 2;

        let left: number = horizontalDistance + nodePos.x;
        let right: number = horizontalDistance - nodePos.x;
        let top: number = verticalDistance - nodePos.y;
        let bottom: number = verticalDistance + nodePos.y;

        return { left, right, top, bottom };
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

export = MapControl;