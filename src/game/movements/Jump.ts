import { Character } from "../objects/Character";
import { Movement, MovementHandler, MovementHandlers } from "../managers/MovementManager";
import { gameMain } from "../..";

export default {
    key: [Movement.Jump],
    name: "Jump",
    description: "跳躍",
    cd: 200,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        if (!character.canJump()) return;
        character.jumpCount++;

        character.movementManager.CDState.Jump.allow = false;
        character.movementManager.CDState.Jump.during = true;

        character.animationManager.setAnimationFrame("Jump", 2);
        character.switchAnimation("Jump");

        // 2段跳導致CD變長
        if (character.jumpCount == 2) {
            if(character.movementManager.CDState.Jump.timer) window.clearTimeout(character.movementManager.CDState.Jump.timer);
            // 抵銷太晚跳躍的下墜
            character.moveByVelocity({x: 0, y: -3});
            character.moveByForce({
                x: 0,
                y: -1
            });
            character.waitMS(MovementHandlers.find((mv) => mv.name == "Jump").cd, (() => {
                character.movementManager.CDState.Jump.timer = null;
                character.movementManager.CDState.Jump.allow = true;
            }));
        } else {
            character.moveByForce({
                x:0,
                y: -1.3
            });
            // 避免連跳，會彈很高
            character.movementManager.CDState.Jump.timer = character.waitMS(gameMain.config.GameSetting.DoubleJumpDelayMs, (() => {
                character.movementManager.CDState.Jump.timer = null;
                character.movementManager.CDState.Jump.allow = true;
            }));
        }
    }
} as MovementHandler;