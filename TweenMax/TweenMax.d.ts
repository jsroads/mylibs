/**
 * Created by jsroads on 2021/4/29.1:31 下午
 * Note:jsroads@163.com
 */
declare class TweenMax {
    // onComplete: Function;
    /**可用于存储你需要的数据*/
    data: any;


    /**获取动画的目标对象*/
    target: any;
    /**获取动画的父级时间轴对象（只读）*/
    readonly timeline: any;
    /**一个存储了传递给构造器的配置变量的对象。包含动画选项和回调函数等。例如delay、paused、onComplete*/
    vars: any;

    defaultEase : Ease;
    defaultOverwrite : string;
    onOverwrite : Function;
    selector:any;
    ticker : Object;
    /**
     *构造函数
     *@param target 应该影响其属性的目标对象（或对象数组）
     *@param duration 持续时间（以秒为单位）
     *@param vars 参数对象，用于定义应该补间的每个属性的结束值以及任何特殊属性
     */
    constructor(target: Object, duration: Number, vars: Object);

    static to(target: Object, duration: Number, vars: Object): TweenMax;

    static from(target: Object, duration: Number, vars: Object): TweenMax

    static fromTo( target:Object, duration:Number, fromVars:Object, toVars:Object ) : TweenMax;

    static staggerTo( targets:any[], duration:Number, vars:Object, stagger:Number, onCompleteAll:Function, onCompleteAllParams:any[], onCompleteAllScope:any ) : any[];

    static staggerFrom( targets:any[], duration:Number, vars:Object, stagger:Number, onCompleteAll:Function, onCompleteAllParams:any[], onCompleteAllScope:any ) : any[];

    static staggerFromTo( targets:any[], duration:Number, fromVars:Object, toVars:Object, stagger:Number, onCompleteAll:Function, onCompleteAllParams:any[], onCompleteAllScope:any ) : any[];

    static delayedCall( delay:Number, callback:Function, params:any[], scope:any, useFrames:Boolean) : TweenMax;

    static getTweensOf( target:Object, onlyActive:Boolean ):any ;

    static getAllTweens( includeTimelines:Boolean ) : any[];

    static killDelayedCallsTo( callback:Function ) :any;

    static killTweensOf( target:Object, vars?:Object ) :any;

    static killAll( complete:Boolean, tweens:Boolean, delayedCalls:Boolean, timelines:Boolean ) :any;

    static killChildTweensOf( parent:Object, complete:Boolean ) :any;

    static pauseAll( tweens:Boolean, delayedCalls:Boolean, timelines:Boolean ):any;

    static resumeAll( tweens:Boolean, delayedCalls:Boolean, timelines:Boolean ):any ;

    static set( target:Object, vars:Object ) : TweenMax;

    isActive(): Boolean;

    delay(value?: Number): any;

    duration(value: Number): any;

    eventCallback(type: String, callback?: Function, params?: Array<any>, scope?: any): any;

    endTime(includeRepeats: Boolean): Number;

    /**
     * 刷新任何内部记录的开始/结束值，如果您想要重新启动动画而不恢复任何先前记录的起始值，这将非常有用。
     */
    invalidate():TweenMax;

    kill(vars?: any, target?: any): any;

    pause(atTime: any, suppressEvents: Boolean): any;

    paused(value: Boolean): any;

    play(from: any, suppressEvents: Boolean): any;

    progress(value: Number, suppressEvents: Boolean): any;

    /**
     * 重启
     *@param includeDelay（default =  false） - 确定重新启动时是否遵循延迟（如果有）
     *@param suppressEvents（default =  true） - 如果  true （默认值），当播放头移动到time 参数中定义的新位置时，不会触发任何事件或回调。
     */
    restart(includeDelay?: Boolean, suppressEvents?: Boolean): any;

    resume(from?: any, suppressEvents?: Boolean): any;

    /**
     * 反转播放，以便动画的所有方面都向后定向，包括例如补间的简易性。
     *@param from （default =  null） - 动画开始反向播放的时间（或TimelineLite / TimelineMax实例的标签）（如果没有定义，它将从播放头当前所在的任何地方开始播放）。要从动画的最后开始，请使用  0。负数相对于动画结束，因此-1将从结尾开始为1秒
     *@param
     */
    reverse(from?: any, suppressEvents?: Boolean): any;

    /**
     * 获取或设置动画的反转状态，指示是否应该向后播放动画。
     *@param value （default =  false） - 省略参数返回当前值（getter），而定义参数则设置值（setter）并返回实例本身以便于链接
     */
    reversed(value?: Boolean): any;

    /**
     * 重复动画
     *@param value 次数（第一次不计算在内）
     */
    repeat(value: Number): any;

    /**
     * 获取或设置重复之间的秒数（或基于帧的补间的帧）的时间量。
     */
    repeatDelay(value: Number): any;

    /**
     * 跳转到指定时间(不影响实例是暂停还是反转)
     *@param time 要去的时间
     *@param suppressEvents（default = true）-如果true（默认值），当播放头移动到time 参数中定义的新位置时，不会触发任何事件或回调。
     */
    seek(time: any, suppressEvents?: Boolean): any;

    startTime(value: Number): any;

    time(value: Number): any;

    timeScale(value: Number): any;

    // ease: Ease;// (or Function or String);

    /**
     * 获取或设置补间的总持续时间（以秒为单位）（或基于帧的补间的帧），包括任何重复或repeatDelay。
     *@param value （default =  NaN） - 省略参数返回当前值（getter），而定义参数则设置值（setter）并返回实例本身以便于链接。负值将从 动画的END开始解释
     */
    totalDuration(value: Number): any;

    totalProgress(value: Number, suppressEvents: Boolean): any;

    totalTime(time: Number, suppressEvents: Boolean): any;

    /**
     * 动态更新补间值，即使补间正在进行中，它们也会无缝地改变路线。
     *@param vars 包含应具有udpated的目标值的属性的对象。但如果你改变一个插件值，则需要完全定义它,例如，要将目标值更新x为300并将目标值更新y为500，请传递:{x:300, y:500}
     *@param resetDuration （默认值=  false） -如果补间已开始（或成品），并  resetDuration 是  true，补间将重新启动。如果  resetDuration 是  false，则补间的时间将被接受（不重启），并且将调整每个补间属性的起始值，使其看起来无缝地重定向到新的目标值
     */
    updateTo(vars: object, resetDuration?: Boolean): any;
}

declare class Ease {
    constructor(func?: (...args: any[]) => void, extraParams?: any[], type?: number, power?: number);

    /** Translates the tween's progress ratio into the corresponding ease ratio. */
    getRatio(p: number): number;
}

interface EaseLookup {
    find(name: string): Ease;
}

declare class Back extends Ease {
    static easeIn: Back;
    static easeInOut: Back;
    static easeOut: Back;

    config(overshoot: number): Elastic;
}

declare class Bounce extends Ease {
    static easeIn: Bounce;
    static easeInOut: Bounce;
    static easeOut: Bounce;
}

declare class Circ extends Ease {
    static easeIn: Circ;
    static easeInOut: Circ;
    static easeOut: Circ;
}

declare class Cubic extends Ease {
    static easeIn: Cubic;
    static easeInOut: Cubic;
    static easeOut: Cubic;
}

declare class Elastic extends Ease {
    static easeIn: Elastic;
    static easeInOut: Elastic;
    static easeOut: Elastic;

    config(amplitude: number, period: number): Elastic;
}

declare class Expo extends Ease {
    static easeIn: Expo;
    static easeInOut: Expo;
    static easeOut: Expo;
}

declare class Linear extends Ease {
    static ease: Linear;
    static easeIn: Linear;
    static easeInOut: Linear;
    static easeNone: Linear;
    static easeOut: Linear;
}

declare class Quad extends Ease {
    static easeIn: Quad;
    static easeInOut: Quad;
    static easeOut: Quad;
}

declare class Quart extends Ease {
    static easeIn: Quart;
    static easeInOut: Quart;
    static easeOut: Quart;
}

declare class Quint extends Ease {
    static easeIn: Quint;
    static easeInOut: Quint;
    static easeOut: Quint;
}

declare class Sine extends Ease {
    static easeIn: Sine;
    static easeInOut: Sine;
    static easeOut: Sine;
}

declare class SlowMo extends Ease {
    static ease: SlowMo;

    config(linearRatio: number, power: number, yoyoMode: boolean): SlowMo;
}

declare class SteppedEase extends Ease {
    constructor(staps: number);

    config(steps: number): SteppedEase;
}

interface RoughEaseConfig {
    clamp?: boolean;
    points?: number;
    randomize?: boolean;
    strength?: number;
    taper?: "in" | "out" | "both" | "none";
    template?: Ease;
}

declare class RoughEase extends Ease {
    static ease: RoughEase;

    constructor(vars: RoughEaseConfig);

    config(steps?: number): RoughEase;
}

declare const Power0: typeof Linear;
declare const Power1: typeof Quad;
declare const Power2: typeof Cubic;
declare const Power3: typeof Quart;
declare const Power4: typeof Quint;
declare const Strong: typeof Quint;