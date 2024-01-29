import { Face } from "../Face";
import { Character } from "../Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

import { gameMain } from "../..";

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
            character.moveByPosition({
                x: gameMain.config.GameSetting.moveSpeed,
                y: 0
            });
            character.switchAnimation("Run");
        } else character.moveByPosition({
            x: gameMain.config.GameSetting.moveSpeedOnAir,
            y: 0
        });
    }
} as MovementHandler;