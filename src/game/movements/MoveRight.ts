import { Face } from "../BasicObject";
import { Character } from "../Character";
import { Movement, MovementHandler } from "../MovementManager";

export default {
    key: [Movement.Right],
    name: "MoveRight",
    description: "向右移動",
    cd: 0,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.setFace(Face.RIGHT);

        if (!character.isJumping()) {
            character.isRunning = true;
            character.moveByPos(7, 0);
            character.switchAnimation("Run");
        } else character.moveByPos(3, 0);
    }
} as MovementHandler;