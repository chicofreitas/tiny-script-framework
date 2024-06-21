import { SimpleHandler } from "../handlers/simple.handler";

export default class ClientHandler {

    private handlers!: any;
    
    constructor(handlers: any) {
        this.handlers = handlers;
    }

    build() {
        const simpleHandler = new SimpleHandler;
        Object.keys(this.handlers).forEach((key, index) => {
            simpleHandler.setNext(new this.handlers[key]);
        });
        return simpleHandler;
    }

    run(request: string) {
        const handler = this.build();
        handler.handle(request);
    }
}