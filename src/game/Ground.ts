import { Bodies } from "matter-js";

import { gameMain } from "..";
import { BodyObject } from "./BodyObject";


export class Ground extends BodyObject {
    init(): Ground {
        this.body = Bodies.rectangle(gameMain.config.GameViewport.WIDTH / 2, gameMain.config.GameViewport.GroundHeight + 50, gameMain.config.GameViewport.WIDTH, 50, {
            isStatic: true
        });
        return this;
    }
}