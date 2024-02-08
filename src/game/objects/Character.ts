import { AnimatedSprite, Graphics } from "pixi.js";
import { Bodies, Body } from "matter-js";

import { BodyObject } from "./BodyObject";
import { AnimationManager } from "../managers/AnimationManager";
import { Movement, MovementManager, MovementHandler } from "../managers/MovementManager";

import { gameMain } from "../..";

export class Character extends BodyObject implements ICharacter {

    public onGround: boolean = true;
    public jumpCount: number = 0;
    public isRunning: boolean = false;

    public keyInput: CONFIG.KeyInput;
    public characterConfig: CONFIG.CharacterConfig;
    public movementManager: MovementManager;
    public animationManager: AnimationManager;

    constructor(characterConfig: CONFIG.CharacterConfig) {
        super();

        this.characterConfig = characterConfig;
        
        this.container.width = this.characterConfig.width + this.characterConfig.offsetX;
        this.container.height = this.characterConfig.height - this.characterConfig.offsetY;

        this.positionOffset = {
            x: characterConfig.offsetX,
            y: characterConfig.offsetY, // gameMain.config.GameViewport.HEIGHT - this.characterConfig.height
        }

        this.animationManager = new AnimationManager(this);
        this.animationManager.setMustStop("Jump", true);

        this.movementManager = new MovementManager()
            .setExclude([Movement.Right])
            .setExclude([Movement.Left])
            .setExclude([Movement.Jump]);

        if (gameMain.debug) {
            let w = this.characterConfig.width;
            let h = this.characterConfig.height;
            this.debugBox = new Graphics()
                .lineStyle(2, 0xFF0000)
                .drawRect(0, 0, w, h);

            this.debugBox.x = (w / 2) * -1;
            this.debugBox.y = (h / 2) * -1;

            this.container.addChild(this.debugBox);
        }

        this.setPosition({ x: 0, y: 0 });
    }

    init(initX?: number, initY?: number): Character {
        if (!initX) {
            initX = gameMain.config.GameViewport.WIDTH / 2;
        }
        if (!initY) {
            initY = gameMain.config.GameViewport.GroundHeight - this.characterConfig.height / 2 - 100;
        }

        let ellipseWidth = this.characterConfig.bodyScale * this.characterConfig.width / 2;
        let ellipseHeight = this.characterConfig.bodyScale * this.characterConfig.height / 2;
        let vertices: CONFIG.Vector[] = [];
        for (let i = 0; i < 2 * Math.PI; i += 0.1) {
            let x = ellipseWidth * Math.cos(i);
            let y = ellipseHeight * Math.sin(i);
            vertices.push({x, y});
        }

        // 遷移到橢圓鋼體
        this.body = Bodies.fromVertices(initX, initY, [vertices], {
            inertia: 0,
            inverseInertia: Infinity,
            density: 0.01 * 4 / (Math.PI * this.characterConfig.bodyScale * this.characterConfig.bodyScale), // 從長方形遷移到橢圓，維持重量不變
            frictionAir: 0.02
        });

        // 舊版鋼體
        // this.body = Bodies.rectangle(initX, initY, this.characterConfig.width, this.characterConfig.height, {
        //     inertia: 0,
        //     inverseInertia: Infinity,
        //     density: 0.01,
        //     frictionAir: 0.02
        // });

        this.container.width =  this.characterConfig.width;
        this.container.height = this.characterConfig.height;

        this.loadAnimations().then(() => {
            this.setIdle(true);
        });

        return this;
    }

    async loadAnimations(): Promise<void> {
        console.error("Method not implement!");
    }

    move(movements: Movement[], deltaTime: number): void {
        const matchedMonementHandlers: MovementHandler[] = this.movementManager.handleMovement(movements);

        let lastIsRunning = this.isRunning;
        this.isRunning = false;

        for (let i in matchedMonementHandlers) {
            matchedMonementHandlers[i].execute(this, matchedMonementHandlers[i]);
        }

        // 跳躍 -> 就算下一個按鍵為空，還是要等待動畫結束，才可以idle
        // 跑步 -> 如果下一個按鍵不是Running

        let stopRunning = (lastIsRunning && !this.isRunning);
        if (
            (stopRunning && matchedMonementHandlers.length == 0) ||
            (this.canIdle() && matchedMonementHandlers.length == 0)
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
        if (bool) this.switchAnimation();
    }


    isJumping(): boolean {
        return this.movementManager.CDState?.Jump?.during;
    }

    canJump(): boolean {
        // 第一段必須地上
        if (this.jumpCount < 1 && this.onGround) {
            return this.movementManager.CDState.Jump.allow;
        } else if (this.jumpCount < 2) {
            return this.movementManager.CDState.Jump.allow;
        }
        return false;
    }

    onBeforeUpdate(): void {
        Body.setAngle(this.body, 0);
        Body.setAngularSpeed(this.body, 0);
        Body.setAngularVelocity(this.body, 0);
    }

    onUpdate(deltaMS: number): void {
        // 更新顯示位置
        this.setPosition({ x: this.body.position.x, y: this.body.position.y + this.container.height / 2 });
    }

    switchAnimation(name?: string): void {
        this.animationManager.switchAnimation(name, (animation: AnimatedSprite) => {
            this.container.addChild(animation);
        });
    }
}