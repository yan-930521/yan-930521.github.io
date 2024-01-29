import { Body } from "matter-js";

import { BasicObject } from "./BasicObject";

export class BodyObject extends BasicObject implements IBodyObject {
    public body: Body;

    stop() {
        Body.setVelocity(this.body, {
            x: 0,
            y: 0
        });
    }
    setBodyPosition(vector: CONFIG.Vector): void {
        if (this.body) Body.setPosition(this.body, vector)
    }
    moveByForce(vector: CONFIG.Vector): void {
        if (this.body) Body.applyForce(this.body, this.body.position, vector);
    }
    moveByPosition(vector: CONFIG.Vector): void {
        if (this.body) Body.translate(this.body, vector);
    }
    moveByVelocity(vector: CONFIG.Vector): void {
        if (this.body) Body.setVelocity(this.body, vector);
    }
}