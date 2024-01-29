import { Face } from "../Face";
import { Character } from "../Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

import { gameMain } from "../..";

export default  {
    key: [Movement.Left],
    name: "MoveLeft",
    description: "向左移動",
    cd: 0,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.setFace(Face.LEFT);

        if (!character.isJumping()) {
            character.isRunning = true;
            character.moveByPosition({
                x: -1 * gameMain.config.GameSetting.moveSpeed,
                y: 0
            });
            character.switchAnimation("Run");
        } else character.moveByPosition({
            x: -1 * gameMain.config.GameSetting.moveSpeedOnAir,
            y: 0
        });
    }
} as MovementHandler;