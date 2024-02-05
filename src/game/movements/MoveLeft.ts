import { Body } from "matter-js";

import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
import { Movement, MovementHandler, continMover } from "../managers/MovementManager";

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
                    x: -1 * character.characterConfig.MoveSpeed / 1000,
                    y: 0
                });
            } else {
                let base = -1 * character.characterConfig.MoveSpeed / 10;
                character.moveByForce({
                    x: -0.1,
                    y: 0
                });
                continMover(10, 10, () => {
                    base /= character.characterConfig.MoveDiminishing;
                    character.moveByPosition({
                        x: base,
                        y: 0
                    });
                }, () => {
                    character.waitMS(20, () => {
                        Body.setVelocity(
                            character.body, {
                            x: character.body.velocity.x * 0.2,
                            y: character.body.velocity.y
                        });
                        character.moveByForce({
                            x: -0.05,
                            y: 0
                        });
                    });
                });
            }
            character.switchAnimation("Run");
        } else {
            if (gameMain.config.GameSetting.MoveByForce) {
                character.moveByForce({
                    x: -1 * character.characterConfig.MoveSpeedOnAir / 1000,
                    y: 0
                });
            } else {
                let base = -1 * character.characterConfig.MoveSpeedOnAir / 10;
                continMover(10, 10, () => {
                    base /= character.characterConfig.MoveDiminishing;
                    character.moveByPosition({
                        x: base,
                        y: 0
                    });
                }, () => {
                    character.waitMS(20, () => {
                        Body.setVelocity(
                            character.body, {
                            x: character.body.velocity.x * 0.2,
                            y: character.body.velocity.y
                        });
                        character.moveByForce({
                            x: -0.05,
                            y: 0
                        });
                    });
                });
            }
        }
    }
} as MovementHandler;