import { SettedNextHandler } from "../observers/SettedNextHandler";
import { ConcreteSubject } from "../subjects/ConcreteSubject";

const SetNextHandlerEvent = new ConcreteSubject;

SetNextHandlerEvent.attach(
        new SettedNextHandler,
);

export { SetNextHandlerEvent };