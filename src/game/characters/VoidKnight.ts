import { AnimatedSprite } from "pixi.js";

import { Movement } from "../managers/MovementManager";
import { Character } from "../objects/Character";

import { gameMain } from "../..";

export class VoidKnight extends Character {
    private readonly JumpFrameToStop: number = 4;
    private readonly CrouchFrameToStop: number = 4;
    constructor() {
        super(gameMain.config.Character.VoidKnight);

        this.animationManager.setMustStop("Jump", true);
        this.animationManager.setMustStop("Fall", true);
        this.animationManager.setMustStop("Idle", true);
        this.animationManager.setMustStop("Crouch", true);
        this.animationManager.setMustStop("Attack1", true);
        this.animationManager.setMustStop("Attack2", true);
        this.animationManager.setMustStop("JumpAttack1", true);
        this.animationManager.setMustStop("JumpAttack2", true);

        this.animationManager.setMustReStart("Jump", true);
        this.movementManager
            .setExclude([Movement.Right])
            .setExclude([Movement.Left])
            .setExclude([Movement.Jump])
            .setExclude([Movement.Crouch]);

        this.on("update", (deltaMS: number) => {
            // 特別處理jump邏輯
            if (this.animationManager.animationConfigs["Jump"]) {
                if (this.animationManager.isReady() && (this.animationManager.getAnimationFrame("Jump") == this.JumpFrameToStop || !this.finishFall)) {
                    if (this.body.velocity.y > 1 && (gameMain.config.GameViewport.GroundHeight - this.container.height / 2) - this.body.position.y < gameMain.config.GameSetting.HeightToShowFall) {
                        this.finishFall = true;
                        this.animationManager.animations["Jump"].play();
                    }
                }
            }
            // 特別處理crouch邏輯
            if (this.animationManager.animationConfigs["Crouch"]) {
                if (this.animationManager.isReady() && this.animationManager.getAnimationFrame("Crouch") == this.JumpFrameToStop) {
                    if (!this.movementManager.getLastMovement().includes("Crouch")) {
                        this.animationManager.animations["Crouch"].play();
                    }
                }
            }
            // 更新動畫
            this.animationManager.onUpdate(deltaMS);
        });
    }

    async loadAnimations(): Promise<void> {
        const animationConfigs = this.characterConfig.animation;
        await Promise.all(
            Object.keys(animationConfigs)
                .map((name: string) => this.animationManager.loadAnimation(animationConfigs[name], (animation: AnimatedSprite) => {
                    if (name != this.characterConfig.defaultAnimation) {
                        // 如果不是預設動畫，有終止條件，並且切換到預設動畫
                        animation.onLoop = () => {
                            if (this.animationManager.getHaveToStop(name)) {

                                animation.stop();
                                
                                if (name == "Jump") {
                                    this.movementManager.CDState[name].during = false;
                                }

                                if(name == "JumpAttack1" || name == "JumpAttack2") {
                                    this.waitMS(400, () => {
                                        this.container.removeChild(animation);
                                        this.setIdle(true);
                                    });
                                } else {
                                    this.container.removeChild(animation);
                                    this.setIdle(true);
                                }
                                
                            }
                        }
                    }

                    if (name == "Jump") {
                        animation.onFrameChange = (currentFrame: number) => {
                            if (currentFrame == this.JumpFrameToStop) animation.stop();
                        }
                    }
                    if (name == "Crouch") {
                        animation.onFrameChange = (currentFrame: number) => {
                            if (currentFrame == this.CrouchFrameToStop) animation.stop();
                        }
                    }
                }))
        );
        this.animationManager.onLoaded();
    }
}