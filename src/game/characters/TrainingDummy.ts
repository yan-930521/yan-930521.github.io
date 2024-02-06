import { AnimatedSprite } from "pixi.js";

import { Character } from "../objects/Character";

import { gameMain } from "../..";

export class TrainingDummy extends Character {
    constructor() {
        super(gameMain.config.Character.TrainingDummy);
        this.on("update", (deltaMS: number) => {
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
                                this.setIdle(true);
                            }
                        }
                    }
                }))
        );
        this.animationManager.onLoaded();
    }
}