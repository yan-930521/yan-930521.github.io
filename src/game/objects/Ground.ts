import { Bodies } from "matter-js";

import { gameMain } from "../..";
import { BodyObject } from "./BodyObject";


export class Ground extends BodyObject {
    init(): Ground {
        this.body = Bodies.rectangle(
            gameMain.config.GameViewport.WIDTH / 2,
            gameMain.config.GameViewport.GroundHeight + 50,
            gameMain.config.GameViewport.WIDTH * 1.5,
            100, {
            isStatic: true
        });
        return this;
    }
}