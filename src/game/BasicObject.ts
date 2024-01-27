import * as PIXI from "pixi.js";

import { AnimationManager } from "./AnimationManager";

export interface BasicObjectPosition {
    x: number,
    y: number
};

export enum Face {
    LEFT,
    RIGHT
}

export class BasicObject extends PIXI.Container {
    public debug: boolean = false;
    public debugBox: PIXI.Graphics;

    public followed: BasicObject;
    
    public characterConfig: CONFIG.CharacterConfig;

    public animationManager: AnimationManager;

    public face: Face = Face.RIGHT;

    public positionOffset: BasicObjectPosition = {
        x: 0,
        y: 0
    };

    constructor(characterConfig?: CONFIG.CharacterConfig, debug?: boolean) {
        super();

        this.characterConfig = characterConfig;

        if(debug) this.debug = true;

        this.animationManager = new AnimationManager(this);
    }

    /**
     * 改變轉向
     */
    setFace = (face: Face): void => {
        if (this.face == face) return;
        if (face == Face.RIGHT) {
            this.scale.x = 1;
        } else if (face == Face.LEFT) {
            this.scale.x = -1;
        }
        this.face = face;
    }
    getFace = (): Face | null => {
        return this.face;
    }

    /**
     * 需要實作
     */
    onBeforeUpdate(deltaMS: number): void {

    }

    /**
     * 需要實作
     */
    onUpdate(deltaMS: number): void {
        // 更新動畫
        this.animationManager.update(deltaMS);
    }

    update(deltaMS: number): void {
        this.onBeforeUpdate(deltaMS);
        this.onUpdate(deltaMS);
    }

    /**
     *  假設原本是 100，偏移為 25，真實為 75
     *  set 50 -> 50 + 25 -> 真實為 50，原本為 75
     *  get -> 75 - 25 -> 真實為 50，原本為 75
     */
    getPos(): BasicObjectPosition {

        return {
            x: this.x - this.positionOffset.x,
            y: (this.y - this.positionOffset.y) * -1,
        }
    }
    setPos(x: number, y: number) {
        this.x = x + this.positionOffset.x;
        this.y = y * -1 + this.positionOffset.y;
    }

    switchAnimation(name?: string) {
        this.animationManager.switchAnimation(name, (animation: PIXI.AnimatedSprite) => {
            this.addChild(animation);
        });
    }

    wait(ms: number, cb: () => void): number {
        return window.setTimeout(cb, ms);
    }
}