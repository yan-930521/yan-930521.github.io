import { Character } from "../Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

export default {
    key: [Movement.Jump],
    name: "Jump",
    description: "跳躍",
    cd: 100,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        // character.setFace(Face.LEFT);
        // character.moveByPos(-3, 0);
        
        if (character.canJump()) {
            character.jump();
        }
    }
} as MovementHandler;