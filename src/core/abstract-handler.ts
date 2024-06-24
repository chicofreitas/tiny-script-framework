import { SetNextHandlerEvent } from "./Beholder/events";

export abstract class AbstractHandler implements Handler<string, string> {

    private nextHandler: Handler | undefined;

    public setNext(handler: Handler): Handler {
        SetNextHandlerEvent.notify();
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        // Handle the request
        if (this.nextHandler) {
            // Returning next handler
            return this.nextHandler.handle(request);
        }
        // Returning Null Handler
        return null;
    }
}