import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
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
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: gameMain.config.GameSetting.MoveSpeed / 1000,
                    y: 0
                });
            } else {
                character.moveByPosition({
                    x: gameMain.config.GameSetting.MoveSpeed / 10,
                    y: 0
                });
            }
            character.switchAnimation("Run");
        } else {
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: gameMain.config.GameSetting.MoveSpeedOnAir / 1000,
                    y: 0
                });
            } else {
                character.moveByPosition({
                    x: gameMain.config.GameSetting.MoveSpeedOnAir / 10,
                    y: 0
                });
            }
        }

        character.moveByForce({
            x: 0.01,
            y: 0
        });
    }
} as MovementHandler;