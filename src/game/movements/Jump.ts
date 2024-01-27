import { Character } from "../Character";
import { Movement, MovementHandler } from "../MovementManager";

export default {
    key: [Movement.Jump],
    name: "Jump",
    description: "跳躍",
    cd: 500,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        // character.setFace(Face.LEFT);
        // character.moveByPos(-3, 0);
        
        if (character.canJump()) {
            character.jump();
        }
    }
} as MovementHandler;