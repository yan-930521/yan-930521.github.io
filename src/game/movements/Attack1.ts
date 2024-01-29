import { Character } from "../Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

export default {
    key: [Movement.Attack1],
    name: "Attack1",
    description: "拔刀斬",
    cd: 500,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.switchAnimation("Attack1")
    }
} as MovementHandler;