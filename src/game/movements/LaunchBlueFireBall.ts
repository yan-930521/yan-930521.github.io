import { Character } from "../Character";
import { Movement, MovementHandler } from "../managers/MovementManager";
import BlueFireBall from "./../effects/BlueFireBall";

export default {
    key: [Movement.LaunchBlueFireBall],
    name: "LaunchBlueFireBall",
    description: "發射幽藍爆炎",
    cd: 3000,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        BlueFireBall.create(character);
    }
} as MovementHandler;