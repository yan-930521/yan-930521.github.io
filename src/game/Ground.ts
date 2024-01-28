import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

import { Config } from "../Confjg";
import { BasicObject } from "./BasicObject";
import { World } from "./World";
import { gameMain } from "..";


export class Ground extends BasicObject {
    public body: Matter.Body;

    init(): Ground {
        this.body = Matter.Bodies.rectangle(gameMain.config.GameViewport.WIDTH / 2, gameMain.config.GameViewport.GroundHeight + 50, gameMain.config.GameViewport.WIDTH, 50, {
            isStatic: true
        });
        return this;
    }
}