import { AbstractHandler } from "../core/abstract-handler";

export class ComplexHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === "COMPLEX") {
            return `This is the ${request} handler.`;
        }
        return super.handle(request);
    }
}