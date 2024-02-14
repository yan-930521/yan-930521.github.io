import { Body } from "matter-js";

import { BasicObject } from "./BasicObject";
import { gameMain } from "../..";

export class BodyObject extends BasicObject implements IBodyObject {
    body: Body;
    bodyBackup: Body;

    stop() {
        Body.setVelocity(this.body, {
            x: 0,
            y: 0
        });
    }
    setBodyPosition(vector: CONFIG.Vector): void {
        if (this.body) Body.setPosition(this.body, vector);
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

    /**
     * @abstract
     */
    createBody(initX: number, initY: number, width: number, height: number): Body {
        return this.body;
    }

    cloneBody(body: Body, width: number, height: number): Body {
        this.backupBody(body);
        const newBody = this.createBody(body.position.x, body.position.y, width, height);

        const data = this.getBodyData(body);

        Body.set(newBody, data);
        return newBody;
    }

    backupBody(body: Body): Body {
        this.bodyBackup = Object.assign({}, body); // clone the body with depth 1
        return this.bodyBackup;
    }

    getBodyData(body: Body): Body {
        const temp: Body = Object.assign({}, this.body); // clone the body with depth 1

        this.bodyBackup.parent = this.bodyBackup;

        delete this.bodyBackup.id; // prevent multiple objects with same ID
        delete this.bodyBackup.axes; // prevent weird normal calculations from shared axis
        delete this.bodyBackup.bounds; // prevent random collisions from shared bounds

        return temp;
    }
}