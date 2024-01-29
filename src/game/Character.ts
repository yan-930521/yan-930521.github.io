import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

import { Movement, MovementManager, MovementHandlers, MovementHandler } from "./managers/MovementManager";
import { BodyObject } from "./BodyObject";

import { gameMain } from "..";

export class Character extends BodyObject {
    public onGround: boolean = true;

    public keyInput: CONFIG.KeyInput;

    public jumpCount: number = 0;
    public isRunning: boolean = false;

    public movementManager: MovementManager;

    constructor(characterConfig: CONFIG.CharacterConfig, debug?: boolean) {
        super(characterConfig);

        this.width = this.characterConfig.width;
        this.height = this.characterConfig.height;

        if (debug) {
            this.debugBox = new PIXI.Graphics()
                .lineStyle(2, 0xFF0000)
                .drawRect(0, 0, this.characterConfig.width, this.characterConfig.height);

            this.debugBox.x = (this.characterConfig.width / 2) * -1;
            this.debugBox.y = (this.characterConfig.height / 2) * -1;
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
        this.body = Matter.Bodies.rectangle(initX, initY, this.characterConfig.width, this.characterConfig.height, {
            inertia: 0,
            inverseInertia: Infinity,
            density: 0.01,
            frictionAir: 0.02
        });

        this.loadAnimations().then(() => {
            this.setIdle();
            if (gameMain.debug) this.addChild(this.debugBox);
        });

        return this;
    }

    async loadAnimations(): Promise<void> {
        const animationConfigs = this.characterConfig.animation;
        await Promise.all(
            Object.keys(animationConfigs)
                .map((name: string) => this.animationManager.loadAnimation(animationConfigs[name], (animation: PIXI.AnimatedSprite) => {
                    if (name != this.characterConfig.defaultAnimation) {
                        // 如果不是預設動畫，有終止條件，並且切換到預設動畫
                        animation.onLoop = () => {
                            if (this.animationManager.getHaveToStop(name)) {
                                animation.stop();
                                this.removeChild(animation);
                                if(name == "Jump") {
                                    this.movementManager.CDState[name].during = false;
                                }
                                this.setIdle();
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
            this.setIdle();
        } else {
            this.unSetIdle();
        }
    }

    canIdle(): boolean {
        return !this.isJumping() && this.animationManager.isIdle;
    }

    unSetIdle(): void {
        this.animationManager.isIdle = false;
    }

    setIdle(): void {
        this.animationManager.isIdle = true;
        this.switchAnimation();
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

    jump(): void {
        this.jumpCount++;

        this.movementManager.CDState.Jump.allow = false;
        this.movementManager.CDState.Jump.during = true;

        this.animationManager.setAnimationFrame("Jump", 2);
        this.switchAnimation("Jump");

        // 2段跳導致CD變長
        if (this.jumpCount == 2) {
            window.clearTimeout(this.movementManager.CDState.Jump.timer);
            this.moveByForce({
                x: 0,
                y: -1
            });
        } else {
            this.moveByForce({
                x:0,
                y: -1.3
            });
            // 避免連跳，會彈很高
            this.waitMS(250, (() => {
                this.movementManager.CDState.Jump.allow = true;
            }));
        }

        this.movementManager.CDState.Jump.timer = this.waitMS(MovementHandlers.find(m => m.name == "Jump").cd * this.jumpCount, (() => {
            this.movementManager.CDState.Jump.timer = null;
            this.movementManager.CDState.Jump.allow = true;
        }));

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
        this.y = this.body.position.y + this.height / 2;
    }
}