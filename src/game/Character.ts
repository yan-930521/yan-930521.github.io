import { AnimatedSprite, Graphics } from "pixi.js";
import { Bodies } from "matter-js";

import { Movement, MovementManager, MovementHandlers, MovementHandler } from "./managers/MovementManager";
import { BodyObject } from "./BodyObject";

import { gameMain } from "..";

export class Character extends BodyObject implements ICharacter {
    public onGround: boolean = true;
    public keyInput: CONFIG.KeyInput;
    public jumpCount: number = 0;
    public isRunning: boolean = false;

    public movementManager: MovementManager;

    constructor(characterConfig: CONFIG.CharacterConfig) {
        super(characterConfig);

        this.width = this.characterConfig.width;
        this.height = this.characterConfig.height;

        if (gameMain.debug) {
            this.debugBox = new Graphics()
                .lineStyle(2, 0xFF0000)
                .drawRect(0, 0, this.characterConfig.width, this.characterConfig.height);

            this.debugBox.x = (this.characterConfig.width / 2) * -1;
            this.debugBox.y = (this.characterConfig.height / 2) * -1;

            this.addChild(this.debugBox);
        }

        this.positionOffset = {
            x: gameMain.config.GameViewport.WIDTH / 2,
            y: gameMain.config.GameViewport.GroundHeight // gameMain.config.GameViewport.HEIGHT - this.characterConfig.height
        }

        this.setPosition({x: 0, y: 0});

        this.animationManager.setMustStop("Jump", true);

        this.movementManager = new MovementManager()
            .setExclude([Movement.Right])
            .setExclude([Movement.Left])
            .setExclude([Movement.Jump]);
    }

    init(initX?: number, initY?: number): Character {
        if(!initX) {
            initX = this.positionOffset.x;
        } 
        if(!initY) {
            initY = this.positionOffset.y - this.characterConfig.height / 2;
        }
        this.body = Bodies.rectangle(initX, initY, this.characterConfig.width * 0.8, this.characterConfig.height * 0.8, {
            inertia: 0,
            inverseInertia: Infinity,
            density: 0.015625, // 面積0.8平方倍
            frictionAir: 0.02
        });

        this.loadAnimations().then(() => {
            this.setIdle(true);
        });

        return this;
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
                                this.removeChild(animation);
                                if(name == "Jump") {
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

    move(movements: Movement[], deltaTime: number): void {
        const matchedMonementHandlers: MovementHandler[] = this.movementManager.handleMovement(movements);

        let lastIsRunning = this.isRunning;
        this.isRunning = false;

        for(let i in matchedMonementHandlers) {
            matchedMonementHandlers[i].execute(this, matchedMonementHandlers[i]);
        }

        // 跳躍 -> 就算下一個按鍵為空，還是要等待動畫結束，才可以idle
        // 跑步 -> 如果下一個按鍵不是Running

        let stopRunning = (lastIsRunning && !this.isRunning);
        if(
            (stopRunning && matchedMonementHandlers.length == 0 ) ||
            (this.canIdle() && matchedMonementHandlers.length == 0 )
        ) {
            // 如果沒有跳躍或者其他動畫，切入動畫
            // this意外指向setTimeout，因此改寫法
            this.setIdle(true);
        } else {
            this.setIdle(false);
        }
    }

    canIdle(): boolean {
        return !this.isJumping() && this.animationManager.isIdle;
    }
    setIdle(bool: boolean): void {
        this.animationManager.isIdle = bool;
        if(bool) this.switchAnimation();
    }
   

    isJumping(): boolean {
        return this.movementManager.CDState?.Jump?.during;
    }

    canJump(): boolean {
        // console.log("CAN JUMP", this.jumpCount, this.onGround, this.movementManager.CDState.Jump.allow)
        // 第一段必須地上
        if (this.jumpCount < 1 && this.onGround) {
            return this.movementManager.CDState.Jump.allow;
        } else if (this.jumpCount < 2) {
            return this.movementManager.CDState.Jump.allow;
        }
        return false;
    }

    onBeforeUpdate(): void {
        if(this.animationManager.animationConfigs["Jump"]) {
            if (this.animationManager.isReady() && this.animationManager.getAnimationFrame("Jump") == 6) {
                if (this.body.velocity.y > 0 && (gameMain.config.GameViewport.GroundHeight - this.height / 2) - this.body.position.y < 70) {
                    this.animationManager.animations["Jump"].play();
                }
            }
        }
        
        this.x = this.body.position.x;
        this.y = this.body.position.y + this.height * 0.8 / 2;
    }
}