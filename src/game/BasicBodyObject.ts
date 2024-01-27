import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

import { BasicObject } from "./BasicObject";

export class BasicBodyObject extends BasicObject {
    public body: Matter.Body;

    stop() {
        Matter.Body.setVelocity(this.body, {
            x: 0,
            y: 0
        });
    }

    setBodyPosition(x: number, y: number) {
        if (this.body) Matter.Body.setPosition(this.body, {
            x, y
        })
    }
    moveByForce = (x: number, y: number) => {
        if (this.body) Matter.Body.applyForce(this.body, this.body.position, { x: x, y: y });
    }
    moveByPos = (x: number, y: number) => {
        if (this.body) Matter.Body.translate(this.body, {
            x: x,
            y: y
        });
    }
    moveByVel = (x: number, y: number) => {
        if (this.body) Matter.Body.setVelocity(this.body, {
            x: x,
            y: y
        });
    }
}