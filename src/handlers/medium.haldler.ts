import { AbstractHandler } from "../core/abstract-handler";

export class MediumHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === "MEDIUM") {
            console.log(`This is the ${request} handler.`);
            return `This is the ${request} handler.`;
        }
        return super.handle(request);
    }
}