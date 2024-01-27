import { gameMain } from "../..";
import { Character } from "../Character";
import { Movement, MovementHandler } from "../MovementManager";
import BlueFireBall from "./../effects/BlueFireBall";

export default {
    key: [Movement.LaunchBlueFireBall],
    name: "LaunchBlueFireBall",
    description: "發射幽藍火球",
    cd: 3000,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        BlueFireBall.create(character);
    }
} as MovementHandler;