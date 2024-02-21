import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
import { Movement, MovementHandler, moveByPositionFunction } from "../managers/MovementManager";

import { gameMain } from "../..";

export default {
    key: [Movement.Right],
    name: "MoveRight",
    description: "向右移動",
    cd: 100,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.setFace(Face.RIGHT);
        if (!character.isJumping()) {
            character.isRunning = true;
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: character.characterConfig.MovementSetting.MoveSpeed / 1000,
                    y: 0
                });
            } else {
                let base = character.characterConfig.MovementSetting.MoveSpeed / 10;
                moveByPositionFunction(character, base);
                
            }
            character.switchAnimation("Run");
        } else {
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: character.characterConfig.MovementSetting.MoveSpeedOnAir / 1000,
                    y: 0
                });
            } else {
                let base = character.characterConfig.MovementSetting.MoveSpeedOnAir / 10;
                moveByPositionFunction(character, base);
            }
        }
    }
} as MovementHandler;