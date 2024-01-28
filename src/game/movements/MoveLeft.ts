import { gameMain } from "../..";
import { Face } from "../BasicObject";
import { Character } from "../Character";
import { Movement, MovementHandler } from "../MovementManager";

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
            character.moveByPos(-1 * gameMain.config.GameSetting.moveSpeed, 0);
            character.switchAnimation("Run");
        } else character.moveByPos(-gameMain.config.GameSetting.moveSpeedOnAir, 0);
    }
} as MovementHandler;