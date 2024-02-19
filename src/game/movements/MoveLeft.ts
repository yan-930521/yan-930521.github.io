import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
import { Movement, MovementHandler, moveByPositionFunction } from "../managers/MovementManager";

import { gameMain } from "../..";

export default {
    key: [Movement.Left],
    name: "MoveLeft",
    description: "向左移動",
    cd: 100,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.setFace(Face.LEFT);

        if (!character.isJumping()) {
            character.isRunning = true;
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: -1 * character.characterConfig.MovementSetting.MoveSpeed / 1000,
                    y: 0
                });
            } else {
                let base = -1 * character.characterConfig.MovementSetting.MoveSpeed / 10;
                moveByPositionFunction(character, base);
            }
        } else {
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: -1 * character.characterConfig.MovementSetting.MoveSpeedOnAir / 1000,
                    y: 0
                });
            } else {
                let base = -1 * character.characterConfig.MovementSetting.MoveSpeedOnAir / 10;
                moveByPositionFunction(character, base);
            }
        }
        if(character.onGround) character.switchAnimation("Run");
    }
} as MovementHandler;