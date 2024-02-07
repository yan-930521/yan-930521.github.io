import { AnimatedSprite } from "pixi.js";

import { Character } from "../objects/Character";

import { gameMain } from "../..";

export class VoidKnight extends Character {
    constructor() {
        super(gameMain.config.Character.VoidKnight);
        this.on("update", (deltaMS: number) => {
            // 特別處理jump邏輯
            if (this.animationManager.animationConfigs["Jump"]) {
                if (this.animationManager.isReady() && this.animationManager.getAnimationFrame("Jump") == 6) {
                    if (this.body.velocity.y > 0 && (gameMain.config.GameViewport.GroundHeight - this.container.height / 2) - this.body.position.y < gameMain.config.GameSetting.HeightToShowFall) {
                        this.animationManager.animations["Jump"].play();
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
                                this.container.removeChild(animation);
                                if (name == "Jump") {
                                    this.movementManager.CDState[name].during = false;
                                }
                                this.setIdle(true);
                            }
                        }
                    }

                    if (name == "Jump") {
                        animation.onFrameChange = (currentFrame: number) => {
                            if (currentFrame == 6) animation.stop();
                        }
                    }
                }))
        );
        this.animationManager.onLoaded();
    }
}