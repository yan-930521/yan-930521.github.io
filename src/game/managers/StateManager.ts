import { AnimatedSprite, Sprite } from "pixi.js";

import { BasicObject } from "../objects/BasicObject";
import { gameMain } from "../..";

export class StateManager {
    MovementSetting: CONFIG.MovementSetting
    constructor(MovementSetting: CONFIG.MovementSetting) {
        this.MovementSetting = MovementSetting;
    }
}