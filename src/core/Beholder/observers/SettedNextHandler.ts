import { Observer } from "../Observer.interface";
import { Subject } from "../Subject.interface";
import { ConcreteSubject } from "../subjects/ConcreteSubject";
/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
export class SettedNextHandler implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserver: Reacted to the event.');
        }
    }
}