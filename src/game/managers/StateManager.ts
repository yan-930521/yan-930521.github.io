import { AnimatedSprite, Sprite } from "pixi.js";

import { BasicObject } from "../objects/BasicObject";
import { gameMain } from "../..";

// 生命值 - Health
// 體力 - Stamina
// 魔力 - Mana
// 移動速度 - Movement Speed
// 滑翔速度 - Movement Speed On Air
// 物理攻擊力 - Physical Attack Power
// 魔法攻擊力 - Magic Attack Power
// 物理防禦力 - Physical Defense
// 魔法防禦力 - Magic Defense
interface Attributes {
    MaxHealth: number;
    MaxStamina: number;
    MaxMana: number;
    Combo: number;
    MovementSpeed: number;
    MovementSpeedOnAir: number;
    PhysicalAttackPower: number;
    MagicAttackPower: number;
    PhysicalDefense: number;
    MagicDefense: number;
}

export class StateManager {
    movementSetting: CONFIG.MovementSetting;

    attributes: Attributes;
   
    constructor(movementSetting: CONFIG.MovementSetting) {
        this.movementSetting = movementSetting;
    }
}