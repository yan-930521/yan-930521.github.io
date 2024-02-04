import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

import { gameMain } from "../..";

export default  {
    key: [Movement.Left],
    name: "MoveLeft",
    description: "向左移動",
    cd: 500,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.setFace(Face.LEFT);

        if (!character.isJumping()) {
            character.isRunning = true;
            // character.moveByPosition({
            //     x: -1 * gameMain.config.GameSetting.MoveSpeed,
            //     y: 0
            // });
            character.moveByForce({
                x: -1 * gameMain.config.GameSetting.MoveSpeed / 1000,
                y: 0
            });
            character.switchAnimation("Run");
        } else character.moveByForce({
            x: -1 * gameMain.config.GameSetting.MoveSpeedOnAir/ 1000,
            y: 0
        });
    }
} as MovementHandler;