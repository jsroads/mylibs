
/**
 * A base <code>INotifier</code> implementation.
 *
 * <code>MacroCommand</code>, <code>SimpleCommand</code>, <code>Mediator</code> and
 * <code>Proxy</code> all have a need to send <code>Notifications</code>.
 *
 * The <code>INotifier</code> interface provides a common method called
 * <code>sendNotification</code> that relieves implementation code of the necessity to actually
 * construct <code>Notification</code>s.
 *
 * The <code>INotifier</code> interface, which all of the above mentioned classes extend,
 * provides an initialized reference to the <code>Facade</code> singleton, which is required by
 * the convenience method <code>sendNotification</code>    for sending <code>Notifications</code>,
 * but it also eases implementation as these classes have frequent <code>Facade</code>
 * interactions and usually require access to the facade anyway.
 */
export class Notifier implements INotifier {
    /**
     * Local reference to the singleton <code>Facade</code>.
     *
     * @protected
     */
    facade: IFacade = null!;

    /**
     * Constructs a <code>Notifier</code> instance.
     */
    constructor() {
        this.facade = Facade.getInstance();
    }

    /**
     * Create and send a <code>Notification</code>.
     *
     * Keeps us from having to construct new <code>Notification</code> instances in our
     * implementation code.
     *
     * @param name
     *        The name of the notification to send.
     *
     * @param body
     *        The body of the notification.
     *
     * @param type
     *        The type of the notification.
     */
    sendNotification(name: string, body: any = null, type?: string): void {
        this.facade.sendNotification(name, body, type);
    }
}
/**
 * The <code>Controller</code> class for PureMVC.
 *
 * A singleton <code>IController</code> implementation.
 *
 * In PureMVC, the <code>Controller</code> class follows the 'Command and Controller' strategy,
 * and assumes these responsibilities:
 *
 * <UL>
 * <LI>Remembering which <code>ICommand</code>s are intended to handle which
 * <code>INotification</code>s.
 * <LI>Registering itself as an <code>IObserver</code> with the <code>View</code> for each
 * <code>INotification</code> that it has an <code>ICommand</code> mapping for.
 * <LI>Creating a new instance of the proper <code>ICommand</code> to handle a given
 * <code>INotification</code> when notified by the <code>View</code>.
 * <LI>Calling the <code>ICommand</code>'s <code>execute</code> method, passing in the
 * <code>INotification</code>.
 *
 * Your application must register <code>ICommand</code>s with the <code>Controller</code>.
 *
 * The simplest way is to subclass </code>Facade</code>, and use its
 * <code>initializeController</code> method to add your registrations.
 */
export class Controller implements IController {
    /**
     * Singleton instance local reference.
     *
     * @protected
     */
    static instance: IController;
    /**
     * Error message used to indicate that a controller singleton is already constructed when
     * trying to constructs the class twice.
     *
     * @protected
     * @constant
     */
    static SINGLETON_MSG: string = "Controller singleton already constructed!";
    /**
     * Local reference to the <code>View</code> singleton.
     *
     * @protected
     */
    view: IView = null!;
    /**
     * Mapping of <code>Notification<code> names to <code>Command</code> constructors references.
     *
     * @protected
     */
    commandMap: Record<string, any> = null!;

    /**
     /**
     * Constructs a <code>Controller</code> instance.
     *
     * This <code>IController</code> implementation is a singleton, so you should not call the
     * constructor directly, but instead call the static singleton Factory method
     * <code>Controller.getInstance()</code>.
     *
     * @throws Error
     *        Throws an error if an instance for this singleton has already been constructed.
     */
    constructor() {
        if (Controller.instance)
            throw Error(Controller.SINGLETON_MSG);

        Controller.instance = this;
        this.commandMap = {};
        this.initializeController();
    }

    /**
     * <code>Controller</code> singleton Factory method.
     *
     * @return
     *        The singleton instance of <code>Controller</code>
     */
    static getInstance(): IController {
        if (!Controller.instance)
            Controller.instance = new Controller();

        return Controller.instance;
    }

    /**
     * Initialize the singleton <code>Controller</code> instance.
     *
     * Called automatically by the constructor.
     *
     * Note that if you are using a subclass of <code>View</code> in your application, you
     * should <i>also</i> subclass <code>Controller</code> and override the
     * <code>initializeController</code> method in the following way:
     *
     * <pre>
     *        // ensure that the Controller is talking to my IView implementation
     *        initializeController():void
     *        {
     *			this.view = MyView.getInstance();
     *		}
     * </pre>
     *
     * @protected
     */
    initializeController(): void {
        this.view = View.getInstance();
    }

    /**
     * If an <code>ICommand</code> has previously been registered to handle the given
     * <code>INotification</code>, then it is executed.
     *
     * @param notification
     *        The <code>INotification</code> the command will receive as parameter.
     */
    executeCommand(notification: INotification): void {
        /*
         * Typed any here instead of <code>Function</code> ( won't compile if set to Function
         * because today the compiler consider that <code>Function</code> is not newable and
         * doesn't have a <code>Class</code> type)
         */
        const commandClassRef: any = this.commandMap[notification.getName()];
        if (commandClassRef) {
            const command: ICommand = <ICommand> /*</>*/ new commandClassRef();
            command.execute(notification);
        }

    }

    /**
     * Register a particular <code>ICommand</code> class as the handler for a particular
     * <code>INotification</code>.
     *
     * If an <code>ICommand</code> has already been registered to handle
     * <code>INotification</code>s with this name, it is no longer used, the new
     * <code>ICommand</code> is used instead.
     *
     * The <code>Observer</code> for the new <code>ICommand</code> is only created if this the
     * first time an <code>ICommand</code> has been registered for this
     * <code>Notification</code> name.
     *
     * @param notificationName
     *        The name of the <code>INotification</code>.
     *
     * @param commandClassRef
     *        The constructor of the <code>ICommand</code>.
     */
    registerCommand<T extends SimpleCommand>(notificationName: string, commandClassRef:  new () => T): void {
        if (!this.commandMap[notificationName])
            this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));

        this.commandMap[notificationName] = commandClassRef;
    }

    /**
     * Check if an <code>ICommand</code> is registered for a given <code>Notification</code>.
     *
     * @param notificationName
     *        Name of the <code>Notification</code> to check wheter an <code>ICommand</code> is
     *        registered for.
     *
     * @return
     *        An <code>ICommand</code> is currently registered for the given
     *        <code>notificationName</code>.
     */
    hasCommand(notificationName: string): boolean {
        return this.commandMap[notificationName] != null;
    }

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code>
     * mapping.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to remove the <code>ICommand</code>
     *        mapping for.
     */
    removeCommand(notificationName: string): void {
        // if the Command is registered...
        if (this.hasCommand(notificationName)) {
            this.view.removeObserver(notificationName, this);
            delete this.commandMap[notificationName];
        }
    }
}
/**
 * The <code>Model</code> class for PureMVC.
 *
 * A singleton <code>IModel</code> implementation.
 *
 * In PureMVC, the <code>IModel</code> class provides access to model objects
 * <code>Proxie</code>s by named lookup.
 *
 * The <code>Model</code> assumes these responsibilities:
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances.
 * <LI>Provide methods for registering, retrieving, and removing <code>Proxy</code> instances.
 *
 * Your application must register <code>IProxy</code> instances with the <code>Model</code>.
 * Typically, you use an <code>ICommand</code> to create and register <code>Proxy</code> instances
 * once the <code>Facade</code> has initialized the Core actors.
 */
export class Model
    implements IModel {
    /**
     * Error message used to indicate that a controller singleton is already constructed when
     * trying to constructs the class twice.
     *
     * @constant
     * @protected
     */
    static SINGLETON_MSG: string = "Model singleton already constructed!";
    /**
     * singleton instance local reference.
     *
     * @protected
     */
    static instance: IModel;
    /**
     * HashTable of <code>IProxy</code> registered with the <code>Model</code>.
     *
     * @protected
     */
    proxyMap: Record<string, any> = null!;

    /**
     * This <code>IModel</code> implementation is a singleton, so you should not call the
     * constructor directly, but instead call the static singleton Factory method
     * <code>Model.getInstance()</code>.
     *
     * @throws Error
     *        Error if singleton instance has already been constructed.
     */
    constructor() {
        if (Model.instance)
            throw Error(Model.SINGLETON_MSG);

        Model.instance = this;
        this.proxyMap = {};
        this.initializeModel();
    }

    /**
     * <code>Model</code> singleton factory method.
     *
     * @return
     *        The singleton instance of <code>Model</code>.
     */
    static getInstance(): IModel {
        if (!Model.instance)
            Model.instance = new Model();

        return Model.instance;
    }

    /**
     * Initialize the singleton <code>Model</code> instance.
     *
     * Called automatically by the constructor, this is the opportunity to initialize the
     * singleton instance in a subclass without overriding the constructor.
     *
     * @protected
     */
    initializeModel(): void {

    }

    /**
     * Register an <code>IProxy</code> with the <code>Model</code>.
     *
     * @param proxy
     *        An <code>IProxy</code> to be held by the <code>Model</code>.
     */
    registerProxy<T extends Proxy>(proxy: T): void {
        this.proxyMap[proxy.getProxyName()] = proxy;
        proxy.onRegister();
    }

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param proxyName
     *        The name of the <code>Proxy</code> instance to be removed.
     *
     * @return
     *        The <code>IProxy</code> that was removed from the <code>Model</code> or an
     *        explicit <code>null</null> if the <code>IProxy</code> didn't exist.
     */
    removeProxy<T extends Proxy>(proxyName: string): T {
        const proxy: T = this.proxyMap[proxyName];
        if (proxy) {
            delete this.proxyMap[proxyName];
            proxy.onRemove();
        }

        return proxy;
    }

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param proxyName
     *         The <code>IProxy</code> name to retrieve from the <code>Model</code>.
     *
     * @return
     *        The <code>IProxy</code> instance previously registered with the given
     *        <code>proxyName</code> or an explicit <code>null</code> if it doesn't exists.
     */
    retrieveProxy<T extends Proxy>(proxyName: string): T {
        //Return a strict null when the proxy doesn't exist
        return this.proxyMap[proxyName] || null;
    }

    /**
     * Check if a Proxy is registered
     *
     * @param proxyName
     *        The name of the <code>IProxy</code> to verify the existence of its registration.
     *
     * @return
     *        A Proxy is currently registered with the given <code>proxyName</code>.
     */
    hasProxy(proxyName: string): boolean {
        return this.proxyMap[proxyName] != null;
    }
}
/**
 * The <code>View</code> class for PureMVC.
 *
 * A singleton <code>IView</code> implementation.
 *
 * In PureMVC, the <code>View</code> class assumes these responsibilities:
 * <UL>
 * <LI>Maintain a cache of <code>IMediator</code> instances.
 * <LI>Provide methods for registering, retrieving, and removing <code>IMediator</code>s.
 * <LI>Notifiying <code>IMediator</code>s when they are registered or removed.
 * <LI>Managing the <code>Observer</code> lists for each <code>INotification</code> in the
 * application.
 * <LI>Providing a method for attaching <code>IObservers</code> to an
 * <code>INotification</code>'s <code>Observer</code> list.
 * <LI>Providing a method for broadcasting an <code>INotification</code>.
 * <LI>Notifying the <code>IObserver</code>s of a given <code>INotification</code> when it
 * broadcasts.
 */
export class View
    implements IView {
    /**
     * @constant
     * @protected
     */
    static SINGLETON_MSG: string = "View singleton already constructed!";
    /**
     * Singleton instance local reference.
     *
     * @protected
     */
    static instance: IView;
    /**
     * Mapping of <code>Mediator</code> names to <code>Mediator</code> instances.
     *
     * @protected
     */
    mediatorMap: Record<string, any> = null!;
    /**
     * Mapping of <code>Notification</code> names to <code>Observers</code> lists.
     *
     * @protected
     */
    observerMap: Record<string, IObserver[]> = null!;

    /**
     * This <code>IView</code> implementation is a singleton, so you should not call the
     * constructor directly, but instead call the static singleton Factory method
     * <code>View.getInstance()</code>.
     *
     * @throws Error
     *        Throws an error if an instance for this singleton has already been constructed.
     */
    constructor() {
        if (View.instance)
            throw Error(View.SINGLETON_MSG);

        View.instance = this;
        this.mediatorMap = {};
        this.observerMap = {};
        this.initializeView();
    }

    /**
     * <code>View</code> singleton Factory method.
     *
     * @return
     *        The singleton instance of <code>View</code>.
     */
    static getInstance(): IView {
        if (!View.instance)
            View.instance = new View();

        return View.instance;
    }

    /**
     * Initialize the singleton <code>View</code> instance.
     *
     * Called automatically by the constructor. This is the opportunity to initialize the
     * singleton instance in a subclass without overriding the constructor.
     */
    initializeView(): void {

    }

    /**
     * Register an <code>IObserver</code> to be notified of <code>INotifications</code> with a
     * given name.
     *
     * @param notificationName
     *        The name of the <code>INotifications</code> to notify this <code>IObserver</code>
     *        of.
     *
     * @param observer
     *        The <code>IObserver</code> to register.
     */
    registerObserver(notificationName: string, observer: IObserver): void {
        const observers: IObserver[] = this.observerMap[notificationName];
        if (observers)
            observers.push(observer);
        else
            this.observerMap[notificationName] = [observer];
    }

    /**
     * Remove a list of <code>Observer</code>s for a given <code>notifyContext</code> from an
     * <code>Observer</code> list for a given <code>INotification</code> name.
     *
     * @param notificationName
     *        Which <code>IObserver</code> list to remove from.
     *
     * @param notifyContext
     *        Remove the <code>IObserver</code> with this object as its
     *        <code>notifyContext</code>.
     */
    removeObserver(notificationName: string, notifyContext: any): void {
        //The observer list for the notification under inspection
        const observers: IObserver[] = this.observerMap[notificationName];

        //Find the observer for the notifyContext.
        let i: number = observers.length;
        while (i--) {
            const observer: IObserver = observers[i];
            if (observer.compareNotifyContext(notifyContext)) {
                observers.splice(i, 1);
                break;
            }
        }

        /*
         * Also, when a Notification's Observer list length falls to zero, delete the
         * notification key from the observer map.
         */
        if (observers.length == 0)
            delete this.observerMap[notificationName];
    }

    /**
     * Notify the <code>IObserver</code>s for a particular <code>INotification</code>.
     *
     * All previously attached <code>IObserver</code>s for this <code>INotification</code>'s
     * list are notified and are passed a reference to the <code>INotification</code> in the
     * order in which they were registered.
     *
     * @param notification
     *        The <code>INotification</code> to notify <code>IObserver</code>s of.
     */
    notifyObservers(notification: INotification): void {
        const notificationName: string = notification.getName();

        const observersRef/*Array*/ = this.observerMap[notificationName];
        if (observersRef) {
            // Copy the array.
            const observers/*Array*/ = observersRef.slice(0);
            const len/*Number*/ = observers.length;
            for (let i/*Number*/ = 0; i < len; i++) {
                const observer/*Observer*/ = observers[i];
                observer.notifyObserver(notification);
            }
        }
    }

    /**
     * Register an <code>IMediator</code> instance with the <code>View</code>.
     *
     * Registers the <code>IMediator</code> so that it can be retrieved by name, and further
     * interrogates the <code>IMediator</code> for its <code>INotification</code> interests.
     *
     * If the <code>IMediator</code> returns any <code>INotification</code> names to be
     * notified about, an <code>Observer</code> is created to encapsulate the
     * <code>IMediator</code> instance's <code>handleNotification</code> method and register
     * it as an <code>Observer</code> for all <code>INotification</code>s the
     * <code>IMediator</code> is interested in.
     *
     * @param mediator
     *        A reference to an <code>IMediator</code> implementation instance.
     */
    registerMediator<V, T extends Mediator<V>>(mediator: T): void {
        const name: string = mediator.getMediatorName();

        //Do not allow re-registration (you must removeMediator first).
        if (this.mediatorMap[name])
            return;

        //Register the Mediator for retrieval by name.
        this.mediatorMap[name] = mediator;

        //Get Notification interests, if any.
        const interests: string[] = mediator.listNotificationInterests();
        const len: number = interests.length;
        if (len > 0) {
            //Create Observer referencing this mediator's handlNotification method.
            const observer: IObserver = new Observer(mediator.handleNotification, mediator);

            //Register Mediator as Observer for its list of Notification interests.
            for (let i: number = 0; i < len; i++)
                this.registerObserver(interests[i], observer);
        }

        //Alert the mediator that it has been registered.
        mediator.onRegister();
    }

    /**
     * Retrieve an <code>IMediator</code> from the <code>View</code>.
     *
     * @param mediatorName
     *        The name of the <code>IMediator</code> instance to retrieve.
     *
     * @return
     *        The <code>IMediator</code> instance previously registered with the given
     *        <code>mediatorName</code> or an explicit <code>null</code> if it doesn't exists.
     */
    retrieveMediator<V, T extends Mediator<V>>(mediatorName: string): T {
        //Return a strict null when the mediator doesn't exist
        return this.mediatorMap[mediatorName] || null;
    }

    /**
     * Remove an <code>IMediator</code> from the <code>View</code>.
     *
     * @param mediatorName
     *        Name of the <code>IMediator</code> instance to be removed.
     *
     * @return
     *        The <code>IMediator</code> that was removed from the <code>View</code> or a
     *        strict <code>null</null> if the <code>Mediator</code> didn't exist.
     */
    removeMediator<V, T extends Mediator<V>>(mediatorName: string): T {
        // Retrieve the named mediator
        const mediator: T = this.mediatorMap[mediatorName];
        if (!mediator)
            return null!;

        //Get Notification interests, if any.
        const interests: string[] = mediator.listNotificationInterests();

        //For every notification this mediator is interested in...
        let i: number = interests.length;
        while (i--)
            this.removeObserver(interests[i], mediator);

        // remove the mediator from the map
        delete this.mediatorMap[mediatorName];

        //Alert the mediator that it has been removed
        mediator.onRemove();

        return mediator;
    }

    /**
     * Check if a <code>IMediator</code> is registered or not.
     *
     * @param mediatorName
     *        The <code>IMediator</code> name to check whether it is registered.
     *
     * @return
     *        A <code>Mediator</code> is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName: string): boolean {
        return this.mediatorMap[mediatorName] != null;
    }
}// export {Controller} from "./core/Controller";
// export {Model} from "./core/Model";
// export {View} from "./core/View";
// export {ICommand} from "./interfaces/ICommand";
// export {IController} from "./interfaces/IController";
// export {IFacade} from "./interfaces/IFacade";
// export {IMediator} from "./interfaces/IMediator";
// export {IModel} from "./interfaces/IModel";
// export {INotification} from "./interfaces/INotification";
// export {INotifier} from "./interfaces/INotifier";
// export {IObserver} from "./interfaces/IObserver";
// export {IProxy} from "./interfaces/IProxy";
// export {IView} from "./interfaces/IView";
// export {MacroCommand} from "./patterns/command/MacroCommand";
// export {SimpleCommand} from "./patterns/command/SimpleCommand";
// export {Facade} from "./patterns/facade/Facade";
// export {Mediator} from "./patterns/mediator/Mediator";
// export {Notification} from "./patterns/observer/Notification";
// export {Notifier} from "./patterns/observer/Notifier";
// export {Observer} from "./patterns/observer/Observer";
// export {Proxy} from "./patterns/proxy/Proxy";
// export {
//     Controller,
//     Model,
//     View,
//     ICommand,
//     IController,
//     IFacade,
//     IMediator,
//     IModel,
//     INotification,
//     INotifier,
//     IObserver,
//     IProxy,
//     IView,
//     MacroCommand,
//     SimpleCommand,
//     Facade,
//     Mediator,
//     Notification,
//     Notifier,
//     Observer,
//     Proxy
// };
/**
 * The interface definition for a PureMVC Command.
 */
export interface ICommand
    extends INotifier {
    /**
     * Fulfill the use-case initiated by the given <code>INotification</code>.
     *
     * In the Command Pattern, an application use-case typically begins with some user action,
     * which results in an <code>INotification</code> being broadcast, which is handled by
     * business logic in the <code>execute</code> method of an <code>ICommand</code>.
     *
     * @param notification
     *        The <code>INotification</code> to handle.
     */
    execute(notification: INotification): void;
}
/**
 * The interface definition for a PureMVC Controller.
 *
 * In PureMVC, an <code>IController</code> implementor follows the 'Command and Controller'
 * strategy, and assumes these responsibilities:
 * <UL>
 * <LI>Remembering which <code>ICommand</code>s are intended to handle which
 * <code>INotification</code>s.
 * <LI>Registering itself as an <code>IObserver</code> with the <code>View</code> for each
 * <code>INotification</code> that it has an <code>ICommand</code> mapping for.
 * <LI>Creating a new instance of the proper <code>ICommand</code> to handle a given
 * <code>INotification</code> when notified by the <code>View</code>.
 * <LI>Calling the <code>ICommand</code>'s <code>execute</code> method, passing in the
 * <code>INotification</code>.
 *
 * Your application must register <code>ICommand</code>s with the <code>Controller</code>.
 *
 * The simplest way is to subclass </code>Facade</code>, and use its
 * <code>initializeController</code> method to add your registrations.
 */
export interface IController {
    /**
     * If an <code>ICommand</code> has previously been registered to handle the given
     * <code>INotification</code>, then it is executed.
     *
     * @param notification
     *        The <code>INotification</code> the command will receive as parameter.
     */
    executeCommand(notification: INotification): void;

    /**
     * Register a particular <code>ICommand</code> class as the handler for a particular
     * <code>INotification</code>.
     *
     * If an <code>ICommand</code> has already been registered to handle
     * <code>INotification</code>s with this name, it is no longer used, the new
     * <code>ICommand</code> is used instead.
     *
     * The <code>Observer</code> for the new <code>ICommand</code> is only created if this the
     * first time an <code>ICommand</code> has been registered for this
     * <code>Notification</code> name.
     *
     * @param notificationName
     *        The name of the <code>INotification</code>.
     *
     * @param commandClassRef
     *        The constructor of the <code>ICommand</code> implementor.
     */
    registerCommand<T extends SimpleCommand>(notificationName: string, commandClassRef:  new () => T): void;

    /**
     * Check if an <code>ICommand</code> is registered for a given <code>Notification</code>.
     *
     * @param notificationName
     *        Name of the <code>Notification</code> to check wheter an <code>ICommand</code> is
     *        registered for.
     *
     * @return
     *        An <code>ICommand</code> is currently registered for the given
     *        <code>notificationName</code>.
     */
    hasCommand(notificationName: string): boolean;

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code>
     * mapping.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to remove the <code>ICommand</code>
     *        mapping for.
     */
    removeCommand(notificationName: string): void;
}
/**
 * The interface definition for a PureMVC Facade.
 *
 *
 * The Facade Pattern suggests providing a single class to act as a central point of
 * communication for a subsystem.
 *
 *
 * In PureMVC, the Facade acts as an interface between the core MVC actors (Model, View,
 * Controller) and the rest of your application.
 */
export interface IFacade
    extends INotifier {
    /**
     * Register an <code>ICommand</code> with the <code>IController</code> associating it to a
     * <code>INotification</code> name.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to associate the <code>ICommand</code>
     *        with.
     *
     * @param commandClassRef
     *        A reference to the constructor of the <code>ICommand</code>.
     */
    registerCommand<T extends SimpleCommand>(notificationName: string, commandClassRef: new () => T): void;

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code>
     * mapping from the <code>Controller</code>.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to remove the <code>ICommand</code>
     *        mapping for.
     */
    removeCommand(notificationName: string): void;

    /**
     * Check if an <code>ICommand</code> is registered for a given <code>Notification</code>.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to verify for the existence of a
     *        <code>ICommand</code> mapping for.
     *
     * @return
     *        A <code>Command</code> is currently registered for the given
     *        <code>notificationName</code>.
     */
    hasCommand(notificationName: string): boolean;

    /**
     * Register an <code>IProxy</code> with the <code>Model</code> by name.
     *
     * @param proxy
     *        The <code>IProxy</code> to be registered with the <code>Model</code>.
     */
    registerProxy(proxy: IProxy): void;

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param proxyName
     *        The name of the <code>IProxy</code> to be retrieved.
     *
     * @return
     *        The <code>IProxy</code> previously registered with the given <code>proxyName</code>.
     */
    retrieveProxy(proxyName: string): IProxy;

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param proxyName
     *        The <code>IProxy</code> to remove from the <code>Model</code>.
     *
     * @return
     *        The <code>IProxy</code> that was removed from the <code>Model</code>
     */
    removeProxy(proxyName: string): IProxy;

    /**
     * Check if a <code>Proxy</code> is registered.
     *
     * @param proxyName
     *        The <code>IProxy</code> to verify the existence of a registration with the
     *        <code>IModel</code>.
     *
     * @return
     *        A <code>Proxy</code> is currently registered with the given    <code>proxyName</code>.
     */
    hasProxy(proxyName: string): boolean;

    /**
     * Register a <code>IMediator</code> with the <code>IView</code>.
     *
     * @param mediator
     A reference to the <code>IMediator</code>.
     */
    registerMediator<V, T extends Mediator<V>>(mediator: T): void;

    /**
     * Retrieve an <code>IMediator</code> from the <code>IView</code>.
     *
     * @param mediatorName
     *        The name of the registered <code>Mediator</code> to retrieve.
     *
     * @return
     *        The <code>IMediator</code> previously registered with the given
     *        <code>mediatorName</code>.
     */
    retrieveMediator<V, T extends Mediator<V>>(mediatorName: string): T;

    /**
     * Remove an <code>IMediator</code> from the <code>IView</code>.
     *
     * @param mediatorName
     *        Name of the <code>IMediator</code> to be removed.
     *
     * @return
     *        The <code>IMediator</code> that was removed from the <code>IView</code>
     */
    removeMediator<V, T extends Mediator<V>>(mediatorName: string): T;

    /**
     * Check if a Mediator is registered or not
     *
     * @param mediatorName
     *        The name of the <code>IMediator</code> to verify the existence of a registration
     *        for.
     *
     * @return
     *        An <code>IMediator</code> is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName: string): boolean;

    /**
     * Notify the <code>IObservers</code> for a particular <code>INotification</code>.
     *
     * This method is left public mostly for backward compatibility, and to allow you to send
     * custom notification classes using the facade.
     *
     * Usually you should just call sendNotification and pass the parameters, never having to
     * construct the notification yourself.
     *
     * @param notification
     *        The <code>INotification</code> to have the <code>IView</code> notify
     *        <code>IObserver</code>s    of.
     */
    notifyObservers(notification: INotification): void;
}

/**
 * The interface definition for a PureMVC Mediator.
 *
 * In PureMVC, <code>IMediator</code> implementors assume these responsibilities:
 * <UL>
 * <LI>Implement a common method which returns a list of all <code>INotification</code>s
 * the <code>IMediator</code> has interest in.
 * <LI>Implement a notification callback method.
 * <LI>Implement methods that are called when the IMediator is registered or removed from the View.
 *
 * Additionally, <code>IMediator</code>s typically:
 * <UL>
 * <LI>Act as an intermediary between one or more view components such as text boxes or
 * list controls, maintaining references and coordinating their behavior.
 * <LI>In a PureMVC application, this the place where event listeners are added to view
 * components, and their handlers implemented.
 * <LI>Respond to and generate <code>INotifications</code>, interacting with of the rest of the
 * PureMVC application.
 *
 * When an <code>IMediator</code> is registered with the <code>IView</code>,
 * the <code>IView</code> will call the <code>IMediator</code>'s
 * <code>listNotificationInterests</code> method. The <code>IMediator</code> will
 * return a list of <code>INotification</code> names which
 * it wishes to be notified about.
 *
 * The <code>IView</code> will then create an <code>Observer</code> object
 * encapsulating that <code>IMediator</code>'s (<code>handleNotification</code>) method
 * and register it as an Observer for each <code>INotification</code> name returned by
 * <code>listNotificationInterests</code>.
 */
export interface IMediator
    extends INotifier {
    /**
     * Get the <code>IMediator</code> instance name
     *
     * @return
     *        The <code>IMediator</code> instance name
     */
    getMediatorName(): string;

    /**
     * Get the <code>Mediator</code>'s view component.
     *
     * Additionally, an implicit getter will usually be defined in the subclass that casts the
     * view object to a type, like this:
     *
     * <code>
     *        getMenu: function
     *        {
     *			return this.viewComponent;
     *		}
     * </code>
     *
     * @return
     *        The <code>Mediator</code>'s view component.
     */
    getViewComponent(): any;

    /**
     * Set the <code>IMediator</code>'s view component.
     *
     * @param viewComponent
     *        The default view component to set for this <code>Mediator</code>.
     */
    setViewComponent(viewComponent: any): void;

    /**
     * List the <code>INotification</code> names this <code>IMediator</code> is interested in
     * being notified of.
     *
     * @return
     *        The list of notifications names in which is interested the <code>Mediator</code>.
     */
    listNotificationInterests(): string[];

    /**
     * Handle <code>INotification</code>s.
     *
     *
     * Typically this will be handled in a switch statement, with one 'case' entry per
     * <code>INotification</code> the <code>Mediator</code> is interested in.
     *
     * @param notification
     *        The notification instance to be handled.
     */
    handleNotification(notification: INotification): void;

    /**
     * Called by the View when the Mediator is registered. This method has to be overridden
     * by the subclass to know when the instance is registered.
     */
    onRegister(): void;

    /**
     * Called by the View when the Mediator is removed. This method has to be overridden
     * by the subclass to know when the instance is removed.
     */
    onRemove(): void;
}

/**
 * The interface definition for a PureMVC Model.
 *
 * In PureMVC, the <code>IModel</code> class provides access to model objects
 * <code>Proxie</code>s by named lookup.
 *
 * The <code>Model</code> assumes these responsibilities:
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances.
 * <LI>Provide methods for registering, retrieving, and removing <code>Proxy</code> instances.
 *
 * Your application must register <code>IProxy</code> instances with the <code>Model</code>.
 * Typically, you use an <code>ICommand</code> to create and register <code>Proxy</code> instances
 * once the <code>Facade</code> has initialized the Core actors.
 */
export interface IModel {
    /**
     * Register an <code>IProxy</code> with the <code>Model</code>.
     *
     * @param proxy
     *        An <code>IProxy</code> to be held by the <code>Model</code>.
     */
    registerProxy<T extends Proxy>(proxy: T): void;

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param proxyName
     *        The name of the <code>Proxy</code> instance to be removed.
     *
     * @return
     *        The <code>IProxy</code> that was removed from the <code>Model</code> or an
     *        explicit <code>null</null> if the <code>IProxy</code> didn't exist.
     */
    removeProxy<T extends Proxy>(proxyName: string): T;

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param proxyName
     *         The <code>IProxy</code> name to retrieve from the <code>Model</code>.
     *
     * @return
     *        The <code>IProxy</code> instance previously registered with the given
     *        <code>proxyName</code> or an explicit <code>null</code> if it doesn't exists.
     */
    retrieveProxy<T extends Proxy>(proxyName: string): T;

    /**
     * Check if a Proxy is registered
     *
     * @param proxyName
     *        The name of the <code>IProxy</code> to verify the existence of its registration.
     *
     * @return
     *        A Proxy is currently registered with the given <code>proxyName</code>.
     */
    hasProxy(proxyName: string): boolean;
}/**
 * The interface definition for a PureMVC notification.
 *
 * PureMVC does not rely upon underlying event models such as the one provided in JavaScript DOM API,
 * and TypeScript does not have an inherent event model.
 *
 * The Observer pattern as implemented within PureMVC exists to support event-driven
 * communication between the application and the actors of the MVC triad (Model, View and
 * Controller).
 *
 * Notifications are not meant to be a replacement for Events in Javascript.
 * Generally, <code>IMediator</code> implementors place event listeners on their view components,
 * which they then handle in the usual way. This may lead to the broadcast of
 * <code>INotification</code>s to trigger <code>ICommand</code>s or to communicate with other
 * <code>IMediators</code>. <code>IProxy</code> and <code>ICommand</code> instances communicate
 * with each other and <code>IMediator</code>s by broadcasting <code>INotification</code>s.
 *
 * A key difference between JavaScript <code>Event</code>s and PureMVC
 * <code>INotification</code>s is that <code>Event</code>s follow the 'Chain of Responsibility'
 * pattern, 'bubbling' up the display hierarchy until some parent component handles the
 * <code>Event</code>, while PureMVC <code>INotification</code>s follow a 'Publish/Subscribe'
 * pattern. PureMVC classes need not be related to each other in a parent/child relationship in
 * order to communicate with one another using <code>INotification</code>s.
 */
export interface INotification {
    /**
     * Get the name of the <code>Notification</code> instance.
     *
     * @return
     *        The name of the <code>Notification</code> instance.
     */
    getName(): string;

    /**
     * Set the body of the <code>INotification</code>.
     *
     * @param body
     *        The body of the notification instance.
     */
    setBody(body: any): void;

    /**
     * Get the body of the <code>INotification</code>.
     *
     * @return
     *        The body object of the <code>INotification</code>.
     */
    getBody(): any;

    /**
     * Set the type of the <code>INotification</code>.
     *
     * @param type
     *        The type identifier for the notification.
     */
    setType(type: string): void;

    /**
     * Get the type of the <code>INotification</code>.
     *
     * @return
     *        The type of the <code>INotification</code>.
     */
    getType(): string;

    /**
     * Get a textual representation of the <code>Notification</code> instance.
     *
     * @return
     *        The textual representation of the <code>Notification</code>    instance.
     */
    toString(): string;
}/**
 * The interface definition for a PureMVC <code>Notifier</code>.
 *
 * <code>MacroCommand</code>, <code>SimpleCommand</code>, <code>Mediator</code> and
 * <code>Proxy</code> all have a need to send <code>Notifications</code>.
 *
 * The <code>INotifier</code> interface provides a common method called
 * <code>sendNotification</code> that relieves implementation code of the necessity to actually
 * construct <code>Notification</code>s.
 *
 * The <code>INotifier</code> interface, which all of the above mentioned classes extend,
 * provides an initialized reference to the <code>Facade</code> singleton, which is required by
 * the convenience method <code>sendNotification</code>    for sending <code>Notifications</code>,
 * but it also eases implementation as these classes have frequent <code>Facade</code>
 * interactions and usually require access to the facade anyway.
 */
export interface INotifier {
    /**
     * Create and send a <code>Notification</code>.
     *
     * Keeps us from having to construct new <code>Notification</code> instances in our
     * implementation code.
     *
     * @param name
     *        The name of the notification to send.
     *
     * @param body
     *        The body of the notification (optional).
     *
     * @param type
     *        The type of the notification (optional).
     */
    sendNotification(name: string, body?: any, type?: string): void;
}
/**
 * The interface definition for a PureMVC Observer.
 *
 * In PureMVC, <code>IObserver</code> implementors assumes these responsibilities:
 * <UL>
 * <LI>Encapsulate the notification (callback) method of the interested object.
 * <LI>Encapsulate the notification context (this) of the interested object.
 * <LI>Provide methods for setting the interested object notification method and context.
 * <LI>Provide a method for notifying the interested object.
 *
 * PureMVC does not rely upon underlying event models such as the one provided in JavaScript DOM API,
 * and JavaScript does not have an inherent event model.
 *
 * The Observer Pattern as implemented within PureMVC exists to support event driven
 * communication between the application and the actors of the MVC triad (Model, View, Controller).
 *
 * An Observer is an object that encapsulates information about an interested object with a
 * notification method that should be called when an </code>INotification</code> is broadcast.
 * The Observer then acts as a proxy for notifying the interested object.
 *
 * Observers can receive <code>Notification</code>s by having their <code>notifyObserver</code>
 * method invoked, passing in an object implementing the <code>INotification</code> interface,
 * such as a subclass of <code>Notification</code>.
 */
export interface IObserver {
    /**
     * Set the notification method.
     *
     * The notification method should take one parameter of type <code>INotification</code>.
     *
     * @param notifyMethod
     *        The notification (callback) method of the interested object.
     */
    setNotifyMethod(notifyMethod: Function): void;

    /**
     /**
     * Set the notification context.
     *
     * @param notifyContext
     *        The notification context (this) of the interested object.
     */
    setNotifyContext(notifyContext: any): void;

    /**
     * Notify the interested object.
     *
     * @param notification
     *        The <code>INotification</code> to pass to the interested object's notification
     *        method.
     */
    notifyObserver(notification: INotification): void;

    /**
     * Compare an object to the notification context.
     *
     * @param object
     *        The object to compare.
     *
     * @return
     *        The object and the notification context are the same.
     */
    compareNotifyContext(object: any): boolean;
}
/**
 * The interface definition for a PureMVC Proxy.
 *
 * In PureMVC, <code>IProxy</code> implementors assume these responsibilities:
 * <UL>
 * <LI>Implement a common method which returns the name of the Proxy.
 * <LI>Provide methods for setting and getting the data object.
 *
 * Additionally, <code>IProxy</code>s typically:
 * <UL>
 * <LI>Maintain references to one or more pieces of model data.
 * <LI>Provide methods for manipulating that data.
 * <LI>Generate <code>INotifications</code> when their model data changes.
 * <LI>Expose their name as a <code>constant</code> called <code>NAME</code>, if they are not
 * instantiated multiple times.
 * <LI>Encapsulate interaction with local or remote services used to fetch and persist model
 * data.
 */
export interface IProxy
    extends INotifier {
    /**
     * Get the name of the <code>IProxy></code> instance.
     *
     * @return
     *        The name of the <code>IProxy></code> instance.
     */
    getProxyName(): string;

    /**
     * Set the data of the <code>IProxy></code> instance.
     *
     * @param data
     *        The data to set for the <code>IProxy></code> instance.
     */
    setData(data: any): void;

    /**
     * Get the data of the <code>IProxy></code> instance.
     *
     * @return
     *        The data held in the <code>IProxy</code> instance.
     */
    getData(): any;

    /**
     * Called by the Model when the <code>IProxy</code> is registered. This method has to be
     * overridden by the subclass to know when the instance is registered.
     */
    onRegister(): void;

    /**
     * Called by the Model when the <code>IProxy</code> is removed. This method has to be
     * overridden by the subclass to know when the instance is removed.
     */
    onRemove(): void;
}
/**
 * The interface definition for a PureMVC view.
 *
 * In PureMVC, <code>IView</code> implementors assume these responsibilities:
 *
 * In PureMVC, the <code>View</code> class assumes these responsibilities:
 * <UL>
 * <LI>Maintain a cache of <code>IMediator</code> instances.
 * <LI>Provide methods for registering, retrieving, and removing <code>IMediator</code>s.
 * <LI>Notifiying <code>IMediator</code>s when they are registered or removed.
 * <LI>Managing the <code>Observer</code> lists for each <code>INotification</code> in the
 * application.
 * <LI>Providing a method for attaching <code>IObservers</code> to an
 * <code>INotification</code>'s <code>Observer</code> list.
 * <LI>Providing a method for broadcasting an <code>INotification</code>.
 * <LI>Notifying the <code>IObserver</code>s of a given <code>INotification</code> when it
 * broadcasts.
 */
export interface IView {
    /**
     * Register an <code>IObserver</code> to be notified of <code>INotifications</code> with a
     * given name.
     *
     * @param notificationName
     *        The name of the <code>INotifications</code> to notify this <code>IObserver</code>
     *        of.
     *
     * @param observer
     *        The <code>IObserver</code> to register.
     */
    registerObserver(notificationName: string, observer: IObserver): void;

    /**
     * Remove a list of <code>Observer</code>s for a given <code>notifyContext</code> from an
     * <code>Observer</code> list for a given <code>INotification</code> name.
     *
     * @param notificationName
     *        Which <code>IObserver</code> list to remove from.
     *
     * @param notifyContext
     *        Remove the <code>IObserver</code> with this object as its
     *        <code>notifyContext</code>.
     */
    removeObserver(notificationName: string, notifyContext: any): void;

    /**
     * Notify the <code>IObserver</code>s for a particular <code>INotification</code>.
     *
     * All previously attached <code>IObserver</code>s for this <code>INotification</code>'s
     * list are notified and are passed a reference to the <code>INotification</code> in the
     * order in which they were registered.
     *
     * @param notification
     *        The <code>INotification</code> to notify <code>IObserver</code>s of.
     */
    notifyObservers(notification: INotification): void;

    /**
     * Register an <code>IMediator</code> instance with the <code>View</code>.
     *
     * Registers the <code>IMediator</code> so that it can be retrieved by name, and further
     * interrogates the <code>IMediator</code> for its <code>INotification</code> interests.
     *
     * If the <code>IMediator</code> returns any <code>INotification</code> names to be
     * notified about, an <code>Observer</code> is created to encapsulate the
     * <code>IMediator</code> instance's <code>handleNotification</code> method and register
     * it as an <code>Observer</code> for all <code>INotification</code>s the
     * <code>IMediator</code> is interested in.
     *
     * @param mediator
     *        A reference to an <code>IMediator</code> implementation instance.
     */
    registerMediator<V, T extends Mediator<V>>(mediator: T): void;

    /**
     * Retrieve an <code>IMediator</code> from the <code>View</code>.
     *
     * @param mediatorName
     *        The name of the <code>IMediator</code> instance to retrieve.
     *
     * @return
     *        The <code>IMediator</code> instance previously registered with the given
     *        <code>mediatorName</code> or an explicit <code>null</code> if it doesn't exists.
     */
    retrieveMediator<V, T extends Mediator<V>>(mediatorName: string): T;

    /**
     * Remove an <code>IMediator</code> from the <code>View</code>.
     *
     * @param mediatorName
     *        Name of the <code>IMediator</code> instance to be removed.
     *
     * @return
     *        The <code>IMediator</code> that was removed from the <code>View</code> or a
     *        strict <code>null</null> if the <code>Mediator</code> didn't exist.
     */
    removeMediator<V, T extends Mediator<V>>(mediatorName: string): T;

    /**
     * Check if a <code>IMediator</code> is registered or not.
     *
     * @param mediatorName
     *        The <code>IMediator</code> name to check whether it is registered.
     *
     * @return
     *        A <code>Mediator</code> is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName: string): boolean;
}
/**
 * A base <code>ICommand</code> implementation that executes other <code>ICommand</code>s.
 *
 * A <code>MacroCommand</code> maintains an list of <code>ICommand</code> constructor references
 * called <i>SubCommand</i>s.
 *
 * When <code>execute</code> is called, the <code>MacroCommand</code> instantiates and calls
 * <code>execute</code> on each of its <i>SubCommands</i> turn. Each <i>SubCommand</i> will be
 * passed a reference to the original <code>INotification</code> that was passed to the
 * <code>MacroCommand</code>'s <code>execute</code> method.
 *
 * Unlike <code>SimpleCommand</code>, your subclass should not override <code>execute</code>,
 * but instead, should override the <code>initializeMacroCommand</code> method, calling
 * <code>addSubCommand</code> once for each <i>SubCommand</i> to be executed.
 */
export abstract class MacroCommand<T> extends Notifier implements ICommand, INotifier {
    /**
     * An array of <code>ICommand</code>s.
     *
     * @protected
     */
    subCommands: Array<new () => T> = null!;

    /**
     * Constructs a <code>MacroCommand</code> instance.
     *
     * You should not need to define a constructor in your subclasses, instead, override the
     * <code>initializeMacroCommand</code> method.
     *
     * If your subclass does define a constructor, be  sure to call <code>super()</code>.
     */
    constructor() {
        super();

        this.subCommands = [];
        this.initializeMacroCommand();
    }

    /**
     * Initialize the <code>MacroCommand</code>.
     *
     * In your subclass, override this method to  initialize the <code>MacroCommand</code>'s
     * <i>SubCommand</i> list with <code>ICommand</code> class references like this:
     *
     * <pre>
     *        // Initialize MyMacroCommand
     *        initializeMacroCommand():void
     *        {
     *			this.addSubCommand( FirstCommand );
     *			this.addSubCommand( SecondCommand );
     *			this.addSubCommand( ThirdCommand );
     *		}
     * </pre>
     *
     * Note that <i>subCommand</i>s may be any <code>ICommand</code> implementor so
     * <code>MacroCommand</code>s or <code>SimpleCommand</code>s are both acceptable.
     */
    initializeMacroCommand(): void {

    }

    /**
     * Add an entry to the <i>subCommands</i> list.
     *
     * The <i>subCommands</i> will be called in First In/First Out (FIFO) order.
     *
     * @param commandClassRef
     *        A reference to the constructor of the <code>ICommand</code>.
     */
    addSubCommand(commandClassRef: new () => T): void {
        this.subCommands.push(commandClassRef);
    }

    /**
     * Execute this <code>MacroCommand</code>'s <i>SubCommands</i>.
     *
     * The <i>SubCommands</i> will be called in First In/First Out (FIFO)
     * order.
     *
     * @param notification
     *        The <code>INotification</code> object to be passed to each <i>SubCommand</i> of
     *        the list.
     *
     * @final
     */
    execute(notification: INotification): void {
        const subCommands: Function[] = this.subCommands.slice(0);
        const len: number = this.subCommands.length;
        for (let i: number = 0; i < len; i++) {
            /*
             * Typed any here instead of <code>Function</code> ( won't compile if set to Function
             * because today the compiler consider that <code>Function</code> is not newable and
             * doesn't have a <code>Class</code> type)
             */
            const commandClassRef: any = subCommands[i];
            const commandInstance: ICommand = <ICommand> /*</>*/ new commandClassRef();
            commandInstance.execute(notification);
        }

        this.subCommands.splice(0);
    }
}
/**
 * A base <code>ICommand</code> implementation.
 *
 * Your subclass should override the <code>execute</code> method where your business logic will
 * handle the <code>INotification</code>.
 */
export abstract class SimpleCommand
    extends Notifier
    implements ICommand, INotifier {
    /**
     * Fulfill the use-case initiated by the given <code>INotification</code>.
     *
     * In the Command Pattern, an application use-case typically begins with some user action,
     * which results in an <code>INotification</code> being broadcast, which is handled by
     * business logic in the <code>execute</code> method of an <code>ICommand</code>.
     *
     * @param notification
     *        The <code>INotification</code> to handle.
     */
    execute(notification: INotification): void {

    }
}
/**
 * A base singleton <code>IFacade</code> implementation.
 *
 * In PureMVC, the <code>Facade</code> class assumes these responsibilities:
 *
 * <UL>
 * <LI>Initializing the <code>Model</code>, <code>View</code> and <code>Controller</code>
 * singletons.
 * <LI>Providing all the methods defined by the <code>IModel</code>, <code>IView</code>, &
 * <code>IController</code> interfaces.
 * <LI>Providing the ability to override the specific <code>Model</code>, <code>View</code> and
 * <code>Controller</code> singletons created.
 * <LI>Providing a single point of contact to the application for registering
 * <code>Commands</code> and notifying <code>Observer</code>s.
 *
 * This <code>Facade</code> implementation is a singleton and cannot be instantiated directly,
 * but instead calls the static singleton factory method <code>Facade.getInstance()</code>.
 */
export class Facade
    implements IFacade {
    /**
     * @constant
     * @protected
     */
    static SINGLETON_MSG: string = "Facade singleton already constructed!";
    /**
     * The singleton <code>Facade</code> instance.
     *
     * @protected
     */
    static instance: IFacade;
    /**
     * Local reference to the <code>Model</code> singleton.
     *
     * @protected
     */
    model: IModel = null!;
    /**
     * Local reference to the <code>View</code> singleton.
     *
     * @protected
     */
    view: IView = null!;
    /**
     * Local reference to the <code>Controller</code> singleton.
     *
     * @protected
     */
    controller: IController = null!;

    /**
     * Constructs a <code>Controller</code> instance.
     *
     * This <code>IFacade</code> implementation is a singleton, so you should not call the
     * constructor directly, but instead call the static singleton Factory method
     * <code>Facade.getInstance()</code>.
     *
     * @throws Error
     *        Throws an error if an instance of this singleton has already been constructed.
     */
    constructor() {
        if (Facade.instance)
            throw Error(Facade.SINGLETON_MSG);

        Facade.instance = this;
        this.initializeFacade();
    }

    /**
     * Facade singleton factory method.
     *
     * @return
     *        The singleton instance of <code>Facade</code>.
     */
    static getInstance(): IFacade {
        if (!Facade.instance)
            Facade.instance = new Facade();

        return Facade.instance;
    }

    /**
     * Called automatically by the constructor.
     * Initialize the singleton <code>Facade</code> instance.
     *
     * Override in your subclass to do any subclass specific initializations. Be sure to
     * extend the <code>Facade</code> with the methods and properties on your implementation
     * and call <code>Facade.initializeFacade()</code>.
     *
     * @protected
     */
    initializeFacade(): void {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    /**
     * Initialize the <code>Model</code>.
     *
     * Called by the <code>initializeFacade</code> method. Override this method in your
     * subclass of <code>Facade</code> if one or both of the following are true:
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IModel</code>.
     * <LI> You have <code>Proxy</code>s to register with the <code>Model</code> that do not
     * retrieve a reference to the <code>Facade</code> at construction time.
     *
     * If you don't want to initialize a different <code>IModel</code>, call
     * <code>super.initializeModel()</code> at the beginning of your method, then register
     * <code>Proxy</code>s.
     *
     * Note: This method is <i>rarely</i> overridden; in practice you are more likely to use a
     * <code>Command</code> to create and register <code>Proxy</code>s with the
     * <code>Model</code>, since <code>Proxy</code>s with mutable data will likely need to send
     * <code>INotification</code>s and thus will likely want to fetch a reference to the
     * <code>Facade</code> during their construction.
     *
     * @protected
     */
    initializeModel(): void {
        if (!this.model)
            this.model = Model.getInstance();
    }

    /**
     * Initialize the <code>Controller</code>.
     *
     * Called by the <code>initializeFacade</code> method. Override this method in your
     * subclass of <code>Facade</code> if one or both of the following are true:
     *
     * <UL>
     * <LI>You wish to initialize a different <code>IController</code>.
     * <LI>You have <code>ICommand</code>s to register with the <code>Controller</code> at
     * startup.
     *
     * If you don't want to initialize a different <code>IController</code>, call
     * <code>super.initializeController()</code> at the beginning of your method, then register
     * <code>Command</code>s.
     *
     * @protected
     */
    initializeController(): void {
        if (!this.controller)
            this.controller = Controller.getInstance();
    }

    /**
     * Initialize the <code>View</code>.
     *
     * Called by the <code>initializeFacade</code> method. Override this method in your
     * subclass of <code>Facade</code> if one or both of the following are true:
     * <UL>
     * <LI> You wish to initialize a different <code>IView</code>.
     * <LI> You have <code>Observers</code> to register with the <code>View</code>
     *
     * If you don't want to initialize a different <code>IView</code>, call
     * <code>super.initializeView()</code> at the beginning of your method, then register
     * <code>IMediator</code> instances.
     *
     * Note: This method is <i>rarely</i> overridden; in practice you are more likely to use a
     * <code>Command</code> to create and register <code>Mediator</code>s with the
     * <code>View</code>, since <code>IMediator</code> instances will need to send
     * <code>INotification</code>s and thus will likely want to fetch a reference to the
     * <code>Facade</code> during their construction.
     *
     * @protected
     */
    initializeView(): void {
        if (!this.view)
            this.view = View.getInstance();
    }

    /**
     * Register an <code>ICommand</code> with the <code>IController</code> associating it to a
     * <code>INotification</code> name.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to associate the <code>ICommand</code>
     *        with.

     * @param commandClassRef
     *        A reference to the constructor of the <code>ICommand</code>.
     */
    registerCommand<T extends SimpleCommand>(notificationName: string, commandClassRef: new () => T): void {
        this.controller.registerCommand<T>(notificationName, commandClassRef);
    }

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code>
     * mapping from the <code>Controller</code>.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to remove the <code>ICommand</code>
     *        mapping for.
     */
    removeCommand(notificationName: string): void {
        this.controller.removeCommand(notificationName);
    }

    /**
     * Check if an <code>ICommand</code> is registered for a given <code>Notification</code>.
     *
     * @param notificationName
     *        The name of the <code>INotification</code> to verify for the existence of an
     *        <code>ICommand</code> mapping for.
     *
     * @return
     *        A <code>Command</code> is currently registered for the given
     *        <code>notificationName</code>.
     */
    hasCommand(notificationName: string): boolean {
        return this.controller.hasCommand(notificationName);
    }

    /**
     * Register an <code>IProxy</code> with the <code>Model</code> by name.
     *
     * @param proxy
     *        The <code>IProxy</code> to be registered with the <code>Model</code>.
     */
    registerProxy<T extends Proxy>(proxy: T): void {
        this.model.registerProxy<T>(proxy);
    }

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param proxyName
     *        The name of the <code>IProxy</code> to be retrieved.
     *
     * @return
     *        The <code>IProxy</code> previously registered with the given
     *        <code>proxyName</code>.
     */
    retrieveProxy(proxyName: string): Proxy {
        return this.model.retrieveProxy(proxyName);
    }

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param proxyName
     *        The <code>IProxy</code> to remove from the <code>Model</code>.
     *
     * @return
     *        The <code>IProxy</code> that was removed from the <code>Model</code>
     */
    removeProxy<T extends Proxy>(proxyName: string): T {
        let proxy: T;
        if (this.model)
            proxy = this.model.removeProxy<T>(proxyName);

        return proxy!;
    }

    /**
     * Check if a <code>Proxy</code> is registered.
     *
     * @param proxyName
     *        The <code>IProxy</code> to verify the existence of a registration with the
     *        <code>IModel</code>.
     *
     * @return
     *        A <code>Proxy</code> is currently registered with the given    <code>proxyName</code>.
     */
    hasProxy(proxyName: string): boolean {
        return this.model.hasProxy(proxyName);
    }

    /**
     * Register a <code>IMediator</code> with the <code>IView</code>.
     *
     * @param mediator
     A reference to the <code>IMediator</code>.
     */
    registerMediator <V, T extends Mediator<V>>(mediator: T): void {
        if (this.view)
            this.view.registerMediator(mediator);
    }

    /**
     * Retrieve an <code>IMediator</code> from the <code>IView</code>.
     *
     * @param mediatorName
     *        The name of the registered <code>Mediator</code> to retrieve.
     *
     * @return
     *        The <code>IMediator</code> previously registered with the given
     *        <code>mediatorName</code>.
     */
    retrieveMediator<V, T extends Mediator<V>>(mediatorName: string): T {
        return this.view.retrieveMediator(mediatorName);
    }

    /**
     * Remove an <code>IMediator</code> from the <code>IView</code>.
     *
     * @param mediatorName
     *        Name of the <code>IMediator</code> to be removed.
     *
     * @return
     *        The <code>IMediator</code> that was removed from the <code>IView</code>
     */
    removeMediator<V, T extends Mediator<V>>(mediatorName: string): T {
        let mediator: T;
        if (this.view)
            mediator = this.view.removeMediator(mediatorName);

        return mediator!;
    }

    /**
     * Check if a <code>Mediator</code> is registered or not
     *
     * @param mediatorName
     *        The name of the <code>IMediator</code> to verify the existence of a registration
     *        for.
     *
     * @return
     *        An <code>IMediator</code> is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName: string): boolean {
        return this.view.hasMediator(mediatorName);
    }

    /**
     * Notify the <code>IObservers</code> for a particular <code>INotification</code>.
     *
     * This method is left public mostly for backward compatibility, and to allow you to
     * send custom notification classes using the <code>Facade</code>.
     *
     *
     * Usually you should just call <code>sendNotification</code> and pass the parameters,
     * never having to construct the <code>INotification</code> yourself.
     *
     * @param notification
     *        The <code>INotification</code> to have the <code>IView</code> notify
     *        <code>IObserver</code>s    of.
     */
    notifyObservers(notification: INotification): void {
        if (this.view)
            this.view.notifyObservers(notification);
    }

    /**
     * Create and send an <code>INotification</code>.
     *
     * Keeps us from having to construct new notification instances in our implementation code.
     *
     * @param name
     *        The name of the notification to send.
     *
     * @param body
     *        The body of the notification to send.
     *
     * @param type
     *        The type of the notification to send.
     */
    sendNotification(name: string, body: any = null, type?: string): void {
        this.notifyObservers(new Notification(name, body, type));
    }
}
/**
 * A base <code>IMediator</code> implementation.
 *
 * Typically, a <code>Mediator</code> will be written to serve one specific control or group
 * controls and so, will not have a need to be dynamically named.
 */
export abstract class Mediator<V> extends Notifier implements IMediator, INotifier {
    /**
     * Default name of the <code>Mediator</code>.
     *
     * @constant
     */
    static NAME: string = "Mediator";
    /**
     * The name of the <code>Mediator</code>.
     *
     * @protected
     */
    mediatorName: string = null!;
    /**
     * The <code>Mediator</code>'s view component.
     *
     * @protected
     */
    viewComponent: V = null;


    /**
     * Constructs a <code>Mediator</code> instance.
     *
     * @param mediatorName
     *        The name of the <code>Mediator</code>.
     *
     * @param viewComponent
     *        The view component handled by this <code>Mediator</code>.
     */
    constructor(mediatorName: string = "", viewComponent: V = null) {
        super();
        this.mediatorName = (mediatorName !== "") ? mediatorName : Mediator.NAME;
        this.viewComponent = viewComponent;
    }

    /**
     * Get the <code>Mediator</code> instance name.
     *
     * @return
     *        The <code>Mediator</code> instance name
     */
    getMediatorName(): string {
        return this.mediatorName;
    }

    /**
     * Get the <code>Mediator</code>'s view component.
     *
     * Additionally, an implicit getter will usually be defined in the subclass that casts the
     * view object to a type, like this:
     *
     * <code>
     *        getMenu():Menu
     *        {
     *			return <Menu> this.viewComponent;
     *		}
     * </code>
     *
     * @return
     *        The <code>Mediator</code>'s default view component.
     */
    getViewComponent(): V {
        return this.viewComponent;
    }

    /**
     * Set the <code>IMediator</code>'s view component.
     *
     * @param viewComponent
     *        The default view component to set for this <code>Mediator</code>.
     */
    setViewComponent(viewComponent: V): void {
        this.viewComponent = viewComponent;
    }

    /**
     * List the <code>INotification</code> names this <code>IMediator</code> is interested in
     * being notified of.
     *
     * @return
     *        The list of notifications names in which is interested the <code>Mediator</code>.
     */
    listNotificationInterests(): string[] {
        return [];
    }

    /**
     * Handle <code>INotification</code>s.
     *
     *
     * Typically this will be handled in a switch statement, with one 'case' entry per
     * <code>INotification</code> the <code>Mediator</code> is interested in.
     *
     * @param notification
     *        The notification instance to be handled.
     */
    handleNotification(notification: INotification): void {

    }

    /**
     * Called by the View when the Mediator is registered. This method has to be overridden
     * by the subclass to know when the instance is registered.
     */
    onRegister(): void {

    }

    /**
     * Called by the View when the Mediator is removed. This method has to be overridden
     * by the subclass to know when the instance is removed.
     */
    onRemove(): void {

    }
}
/**
 * A base <code>INotification</code> implementation.
 *
 * PureMVC does not rely upon underlying event models such as the one provided in JavaScript DOM API,
 * and TypeScript does not have an inherent event model.
 *
 * The Observer pattern as implemented within PureMVC exists to support event-driven
 * communication between the application and the actors of the MVC triad (Model, View and
 * Controller).
 *
 * Notifications are not meant to be a replacement for Events in Javascript.
 * Generally, <code>IMediator</code> implementors place event listeners on their view components,
 * which they then handle in the usual way. This may lead to the broadcast of
 * <code>INotification</code>s to trigger <code>ICommand</code>s or to communicate with other
 * <code>IMediators</code>. <code>IProxy</code> and <code>ICommand</code> instances communicate
 * with each other and <code>IMediator</code>s by broadcasting <code>INotification</code>s.
 *
 * A key difference between JavaScript <code>Event</code>s and PureMVC
 * <code>INotification</code>s is that <code>Event</code>s follow the 'Chain of Responsibility'
 * pattern, 'bubbling' up the display hierarchy until some parent component handles the
 * <code>Event</code>, while PureMVC <code>INotification</code>s follow a 'Publish/Subscribe'
 * pattern. PureMVC classes need not be related to each other in a parent/child relationship in
 * order to communicate with one another using <code>INotification</code>s.
 */
export class Notification<T> implements INotification {
    /**
     * The name of the <code>Notification</code>.
     *
     * @protected
     */
    name: string = null!;

    /**
     * The body data to send with the <code>Notification</code>.
     *
     * @protected
     */
    body: T = null!;

    /**
     * The type identifier of the <code>Notification</code>.
     *
     * @protected
     */
    type: string = null!;

    /**
     * Constructs a <code>Notification</code> instance.
     *
     * @param name
     *        The name of the notification.
     *
     * @param body
     *        Body data to send with the <code>Notification</code>.
     *
     * @param type
     *        Type identifier of the <code>Notification</code>.
     */
    constructor(name: string, body: T = null, type?: string) {
        this.name = name;
        this.body = body;
        this.type = type!;
    }

    /**
     * Get the name of the <code>Notification</code> instance.
     *
     * @return
     *        The name of the <code>Notification</code> instance.
     */
    getName(): string {
        return this.name;
    }

    /**
     * Set the body of the <code>Notification</code> instance.
     *
     * @param body
     *        The body of the <code>Notification</code> instance.
     */
    setBody(body: T): void {
        this.body = body;
    }

    /**
     * Get the body of the <code>Notification</code> instance.
     *
     * @return
     *        The body object of the <code>Notification</code> instance.
     */
    getBody(): T {
        return this.body;
    }

    /**
     * Set the type of the <code>Notification</code> instance.
     *
     * @param type
     *        The type of the <code>Notification</code> instance.
     */
    setType(type: string): void {
        this.type = type;
    }

    /**
     * Get the type of the <code>Notification</code> instance.
     *
     * @return
     *        The type of the <code>Notification</code> instance.
     */
    getType(): string {
        return this.type;
    }

    /**
     * Get a textual representation of the <code>Notification</code> instance.
     *
     * @return
     *        The textual representation of the <code>Notification</code>    instance.
     */
    toString(): string {
        let msg: string = "Notification Name: " + this.getName();
        msg += "\nBody:" + ((this.getBody() == null) ? "null" : this.getBody().toString());
        msg += "\nType:" + ((this.getType() == null) ? "null" : this.getType());
        return msg;
    }
}

/**
 * A base <code>IObserver</code> implementation.
 *
 * In PureMVC, the <code>Observer</code> class assumes these responsibilities:
 * <UL>
 * <LI>Encapsulate the notification (callback) method of the interested object.
 * <LI>Encapsulate the notification context (this) of the interested object.
 * <LI>Provide methods for setting the interested object notification method and context.
 * <LI>Provide a method for notifying the interested object.
 *
 * PureMVC does not rely upon underlying event models such as the one provided in JavaScript DOM API,
 * and TypeScript does not have an inherent event model.
 *
 * The Observer Pattern as implemented within PureMVC exists to support event driven
 * communication between the application and the actors of the MVC triad (Model, View, Controller).
 *
 * An Observer is an object that encapsulates information about an interested object with a
 * notification method that should be called when an </code>INotification</code> is broadcast.
 * The Observer then acts as a proxy for notifying the interested object.
 *
 * Observers can receive <code>Notification</code>s by having their <code>notifyObserver</code>
 * method invoked, passing in an object implementing the <code>INotification</code> interface,
 * such as a subclass of <code>Notification</code>.
 */
export class Observer
    implements IObserver {
    /**
     * The notification method of the interested object.
     * @protected
     */
    notify: Function = null!;

    /**
     * The notification context of the interested object.
     * @protected
     */
    context: any = null;

    /**
     * Constructs an <code>Observer</code> instance.
     *
     * @param notifyMethod
     *        The notification method of the interested object.
     *
     * @param notifyContext
     *        The notification context of the interested object.
     */
    constructor(notifyMethod: Function, notifyContext: any) {
        this.setNotifyMethod(notifyMethod);
        this.setNotifyContext(notifyContext);
    }

    /**
     * Set the notification method.
     *
     * The notification method should take one parameter of type <code>INotification</code>.
     *
     * @param notifyMethod
     *        The notification (callback) method of the interested object.
     */
    setNotifyMethod(notifyMethod: Function): void {
        this.notify = notifyMethod;
    }

    /**
     * Set the notification context.
     *
     * @param notifyContext
     *        The notification context (this) of the interested object.
     */
    setNotifyContext(notifyContext: any): void {
        this.context = notifyContext;
    }

    /**
     * Notify the interested object.
     *
     * @param notification
     *        The <code>INotification</code> to pass to the interested object's notification
     *        method.
     */
    notifyObserver(notification: INotification): void {
        this.getNotifyMethod().call(this.getNotifyContext(), notification);
    }

    /**
     * Compare an object to the notification context.
     *
     * @param object
     *        The object to compare.
     *
     * @return
     *        The object and the notification context are the same.
     */
    compareNotifyContext(object: any): boolean {
        return object === this.context;
    }

    /**
     * Get the notification method.
     *
     * @return
     *        The notification (callback) method of the interested object.
     */
    private getNotifyMethod(): Function {
        return this.notify;
    }

    /**
     * Get the notification context.
     *
     * @return
     *        The notification context (<code>this</code>) of the interested object.
     */
    private getNotifyContext(): any {
        return this.context;
    }
}
/**
 * A base <code>IProxy</code> implementation.
 *
 * In PureMVC, <code>IProxy</code> implementors assume these responsibilities:
 * <UL>
 * <LI>Implement a common method which returns the name of the Proxy.
 * <LI>Provide methods for setting and getting the data object.
 *
 * Additionally, <code>IProxy</code>s typically:
 * <UL>
 * <LI>Maintain references to one or more pieces of model data.
 * <LI>Provide methods for manipulating that data.
 * <LI>Generate <code>INotifications</code> when their model data changes.
 * <LI>Expose their name as a <code>constant</code> called <code>NAME</code>, if they are not
 * instantiated multiple times.
 * <LI>Encapsulate interaction with local or remote services used to fetch and persist model
 * data.
 */
export abstract class Proxy
    extends Notifier
    implements IProxy, INotifier {
    /**
     * The default name of the <code>Proxy</code>
     *
     * @constant
     */
    static NAME: string = "Proxy";
    /**
     * The data object controlled by the <code>Proxy</code>.
     *
     * @protected
     */
    proxyName: string = null!;
    /**
     * The name of the <code>Proxy</code>.
     *
     * @protected
     */
    data: any = null;

    /**
     * Constructs a <code>Proxy</code> instance.
     *
     * @param proxyName
     *        The name of the <code>Proxy</code> instance.
     *
     * @param data
     *        An initial data object to be held by the <code>Proxy</code>.
     */
    constructor(proxyName: string = "", data: any = null) {
        super();

        this.proxyName = (proxyName !== "") ? proxyName : Proxy.NAME;

        if (data != null)
            this.setData(data);
    }

    /**
     * Get the name of the <code>Proxy></code> instance.
     *
     * @return
     *        The name of the <code>Proxy></code> instance.
     */
    getProxyName(): string {
        return this.proxyName;
    }

    /**
     * Set the data of the <code>Proxy></code> instance.
     *
     * @param data
     *        The data to set for the <code>Proxy></code> instance.
     */
    setData(data: any): void {
        this.data = data;
    }

    /**
     * Get the data of the <code>Proxy></code> instance.
     *
     * @return
     *        The data held in the <code>Proxy</code> instance.
     */
    getData(): any {
        return this.data;
    }

    /**
     * Called by the Model when the <code>Proxy</code> is registered. This method has to be
     * overridden by the subclass to know when the instance is registered.
     */
    onRegister(): void {

    }

    /**
     * Called by the Model when the <code>Proxy</code> is removed. This method has to be
     * overridden by the subclass to know when the instance is removed.
     */
    onRemove(): void {

    }
}
