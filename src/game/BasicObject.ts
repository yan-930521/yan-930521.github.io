import { AnimatedSprite, Container, Graphics} from "pixi.js";

import { Face } from "./Face";
import { AnimationManager } from "./managers/AnimationManager";

export class BasicObject extends Container implements IBasicObject {
    debugBox: Graphics;
    followed: IBasicObject;
    face: Face;
    positionOffset: CONFIG.Vector;
    animationManager: any;
    characterConfig: CONFIG.CharacterConfig;

    constructor(characterConfig?: CONFIG.CharacterConfig) {
        super();

        this.characterConfig = characterConfig;

        this.animationManager = new AnimationManager(this);
    }

    setFace(face: Face): void {
        if (this.face == face) return;
        if (face == Face.RIGHT) {
            this.scale.x = 1;
        } else if (face == Face.LEFT) {
            this.scale.x = -1;
        }
        this.face = face;
    }
    getFace(): Face {
        return this.face;
    }

    onBeforeUpdate(deltaMS: number): void {

    }

    onUpdate(deltaMS: number): void {
        // 更新動畫
        this.animationManager.update(deltaMS);
    }

    update(deltaMS: number): void {
        this.onBeforeUpdate(deltaMS);
        this.onUpdate(deltaMS);
    }

    getPosition(): CONFIG.Vector {
        // 假設原本是 100，偏移為 25，真實為 75
        // set 50 -> 50 + 25 -> 真實為 50，原本為 75
        // get -> 75 - 25 -> 真實為 50，原本為 75
        return {
            x: this.x - this.positionOffset.x,
            y: (this.y - this.positionOffset.y) * -1,
        }
    }
    setPosition(vector: CONFIG.Vector) {
        this.x = vector.x + this.positionOffset.x;
        this.y = vector.y * -1 + this.positionOffset.y;
    }

    switchAnimation(name?: string) {
        this.animationManager.switchAnimation(name, (animation: AnimatedSprite) => {
            this.addChild(animation);
        });
    }

    waitMS(ms: number, cb: () => void): number {
        return window.setTimeout(cb, ms);
    }
}