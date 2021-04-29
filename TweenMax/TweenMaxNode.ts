/**
 * Created by jsroads on 2021/4/29.1:01 下午
 * Note:jsroads@163.com
 */
import {_decorator, Color, Component, Node, Renderable2D, UIOpacity, UITransform} from "cc";

const {ccclass} = _decorator;
@ccclass("TweenMaxNode")
export default class TweenMaxNode extends Component {
    get x(): number {
        return this.node.position.x;
    }

    set x(value: number) {
        this.node.setPosition(value, this.node.position.y, this.node.position.z)
    }

    get y(): number {
        return this.node.position.y;
    }

    set y(value: number) {
        this.node.setPosition(this.node.position.y, value, this.node.position.z)
    }

    get scale(): number {
        return this.node.scale.x;
    }

    // get pos(): Vec2 {
    //     return v2(this.node.position.x, this.node.position.y);
    // }
    //
    // set pos(value: Vec2) {
    //     this.node.setPosition(v3(value.x, value.y));
    // }

    set scale(value: number) {
        this.node.setScale(value, value, 1);
    }

    get scaleX(): number {
        return this.node.scale.x;
    }

    set scaleX(value: number) {
        this.node.setScale(value, this.node.scale.y, 1);
    }

    get scaleY(): number {
        return this.node.scale.y;
    }

    set scaleY(value: number) {
        this.node.setScale(this.node.scale.x, value, 1);
    }

    get width(): number {
        const transform = <UITransform>this.node.getComponent(UITransform);
        return transform.width;
    }

    set width(value: number) {
        const transform = <UITransform>this.node.getComponent(UITransform);
        transform.width = value;
    }

    get height(): number {
        const transform = <UITransform>this.node.getComponent(UITransform);
        return transform.height;
    }

    set height(value: number) {
        const transform = <UITransform>this.node.getComponent(UITransform);
        transform.height = value;
    }

    get opacity(): number {
        const render = this.node.getComponent(Renderable2D);
        if (render !== null) {
            return render.color.a;
        }
        const opacity: UIOpacity = <UIOpacity>this.node.getComponent(UIOpacity);
        if (opacity !== null) {
            return opacity.opacity;
        }
        return 255;
    }

    // get contentSize(): Size {
    //     const transform = <UITransform>this.node.getComponent(UITransform);
    //     return transform.contentSize;
    // }
    //
    // set contentSize(value: Size) {
    //     const transform = <UITransform>this.node.getComponent(UITransform);
    //     transform.setContentSize(value);
    // }

    set opacity(value: number) {
        const render = this.node.getComponent(Renderable2D);
        if (render !== null) {
            render.color = new Color(render.color.r, render.color.g, render.color.b, value)
            return;
        }
        const opacity: UIOpacity = <UIOpacity>this.node.getComponent(UIOpacity);
        if (opacity !== null) {
            opacity.opacity = value;
        }
    }

    get angle(): number {
        return this.node.angle;
    }

    set angle(value: number) {
        this.node.angle = value;
    }

    static trans(node: Node): TweenMaxNode {
        return <TweenMaxNode>node.getComponent(TweenMaxNode);
    }
}
