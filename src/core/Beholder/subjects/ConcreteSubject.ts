import { Subject } from "../Subject.interface";
import { Observer } from "../Observer.interface";
import log4js from "log4js";

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export class ConcreteSubject implements Subject {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    public state: number;

    /**
     * @type {string} Attach an observer to the subject.
     */
    public logger: log4js.Logger;

    /**
     * @type {Observer[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private observers: Observer[] = [];

    constructor() {
        this.state = 0;
        
        log4js.configure({
            appenders: {
                out: { type: 'file', filename: './logs/observer/trace.log' },
            },
            categories: {
                default: { appenders: ['out'], level: 'trace' },
            },
        })
        this.logger = log4js.getLogger('out');
        this.logger.trace('ConcreteSubject instantiated: line 39');
    }
    /**
     * The subscription management methods.
     */
    public attach(observer: Observer): void {
        this.logger.trace(`ConcreteSubject: Attached an observer. (${observer})`);
        const isExist = this.observers.includes(observer);
        if (isExist) {
            this.logger.trace(`ConcreteSubject: Observer has been attached already. (${observer})`);
            return;
        }

        this.logger.trace(`ConcreteSubject: Attached an observer. (${observer})`);
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}