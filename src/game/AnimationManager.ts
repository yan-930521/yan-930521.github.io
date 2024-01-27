import { AnimatedSprite } from "pixi.js";

import { BasicObject } from "./BasicObject";
import { Animations, Resource } from "./Resource";

import { gameMain } from "..";
import { Character } from "./Character";


export type AnimationCallBack = (animation: AnimatedSprite) => void;
export type AnimationsCallBack = (animations: AnimatedSprite[]) => void;

export class AnimationManager {
    public animations: Animations = {};
    public animationConfigs: CONFIG.AnimationConfigs = {};
    public loaded: boolean = false;
    public isIdle: boolean = true;
    public parent: BasicObject;

    // 用來控制現在正在播放的動畫
    public nowAnimation: string | null = null;

    // 允許多重動畫
    private staticAnimations: {
        [key: string]: boolean
    } = {};

    private haveToStopAnimations: {
        [key: string]: boolean
    } = {};

    private mustStopAnimations: {
        [key: string]: boolean
    } = {};

    constructor(parent: BasicObject) {
        this.parent = parent;
    }

    isReady(): boolean {
        return this.loaded;
    }

    async loadAnimation(animationConfig: CONFIG.AnimationConfig, loadAnimationCallBack?: AnimationCallBack): Promise<AnimatedSprite> {
        const animation = await Resource.loadAnimatedResource(
            Resource.getUrl(gameMain.config.AssetPath, animationConfig.path),
            animationConfig.frameCount,
            animationConfig.width,
            animationConfig.height
        );
        
        animation.x = animationConfig.offsetX;
        animation.y = animationConfig.offsetY;
        animation.animationSpeed = animationConfig.animationSpeed;
        animation.scale.set(animationConfig.animationScale);

        this.animations[animationConfig.name] = animation;
        this.animationConfigs[animationConfig.name] = animationConfig;

        if(animationConfig.name == this.parent.characterConfig.defaultAnimation) this.setHaveToStop(animationConfig.name, false);
        else this.setHaveToStop(animationConfig.name, true);

        if(loadAnimationCallBack) loadAnimationCallBack(animation);
        return animation;
    }
    async loadObject(name: string, objectConfig: CONFIG.ObjectConfig, loadObjectCallBack?: AnimationCallBack): Promise<AnimatedSprite> {
        const animation = await Resource.loadAnimatedResource(
            Resource.getUrl(gameMain.config.AssetPath, objectConfig.path),
            objectConfig.frameCount
        );
        
        animation.x = objectConfig.position.x;
        animation.y = objectConfig.position.y;
        animation.animationSpeed = objectConfig.animationSpeed;

        this.animations[name] = animation;
        this.staticAnimations[name] = true;

        if(loadObjectCallBack) loadObjectCallBack(animation);
        return animation;
    }

    onLoaded() {
        this.loaded = true;
    }

    switchAnimation(animation?: string, switchAnimationCallBack?: AnimationCallBack): void {
        if(!this.isReady()) return;

        for(let name in this.animations) {
            this.animations[name].stop();
            this.parent.removeChild(this.animations[name]);
        }

        if(animation) {
            if(this.nowAnimation == animation && !this.getMustStop(animation)) {
                // 如果跟上一個動畫一樣
                // 就不需要再次play
                this.setHaveToStop(animation, false);
            } else {
                this.nowAnimation = animation;
                this.setHaveToStop(animation, true);
            }
        } else {
            // 切換到預設動畫
            this.nowAnimation = this.parent.characterConfig.defaultAnimation;
        }

        this.animations[this.nowAnimation].play();

        if(switchAnimationCallBack) {
            switchAnimationCallBack(this.animations[this.nowAnimation]);
        }
    }

    setAnimationFrame(name: string, frame: number): void {
        this.animations[name].currentFrame = frame;
    }
    getAnimationFrame(name: string): number {
        return this.animations[name].currentFrame;
    }

    // 設定動畫可以持續不需要停
    setHaveToStop(name: string, bool: boolean) {
        this.haveToStopAnimations[name] = bool ? true : false;
    }
    getHaveToStop(name: string) {
        if(this.haveToStopAnimations[name]) {
            return true;
        } else {
            return false;
        }
    }

    setMustStop(name: string, bool: boolean) {
        this.mustStopAnimations[name] = bool ? true : false;
    }
    getMustStop(name: string) {
        // 預設為不一定要停下
        if(typeof this.mustStopAnimations[name] == "undefined") {
            this.setMustStop(name, false);
            return false;
        }
        return this.mustStopAnimations[name];
    }

    update(deltaMS: number) {
        if(!this.isReady()) return;

        if (this.nowAnimation && this.animations[this.nowAnimation]) this.animations[this.nowAnimation].update(deltaMS);
        for(let name in this.staticAnimations) {
            if(this.staticAnimations[name] && this.animations[name]) {
                this.animations[name].update(deltaMS);
            }
        }
    }
}