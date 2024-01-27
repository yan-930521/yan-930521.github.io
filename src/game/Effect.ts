import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import * as Particle from "@pixi/particle-emitter";

import { World } from "./World";
import { BasicBodyObject } from "./BasicBodyObject";

import { gameMain } from "..";

export interface Offset {
    x: number,
    y: number
}
export class Effect extends BasicBodyObject {
    public emitter: Particle.Emitter;
    public body: Matter.Body;

    public follow: BasicBodyObject;
    public graphics: PIXI.Graphics;
    public sprite: PIXI.Sprite;
    public offset: Offset;
    public followOffset: Offset;

    public particleContainer: PIXI.Container;

    constructor() {
        super(null, false);

        gameMain.world.addChild(this);
        this.width = gameMain.config.GameViewport.WIDTH;
        this.height = gameMain.config.GameViewport.HEIGHT;

        this.x = 0;
        this.y = 0;

        // @ts-ignore
        this.eventMode = "none";
    }

    onBeforeUpdate(deltaMS: number): void {
        let x: number = 0, y: number = 0;
        if (this.follow) {
            x = this.follow.body.position.x + this.followOffset.x;
            y = this.follow.body.position.y + this.followOffset.y;

            this.setBodyPosition(
                x,
                y
            );
                
            if(this.emitter) this.emitter.updateOwnerPos(
                x + this.offset.x,
                y + this.offset.y
            );

            if (this.graphics) {
                this.graphics.x = this.follow.x + this.followOffset.x;
                this.graphics.y = this.follow.y + this.followOffset.y;
            }
            if (this.sprite) {
                this.sprite.x = this.follow.x + this.followOffset.x;
                this.sprite.y = this.follow.y + this.followOffset.y;
            }
        } else if (this.body) {
            if(this.emitter) this.emitter.updateOwnerPos(
                this.body.position.x + this.offset.x,
                this.body.position.y + this.offset.y
            );
            if (this.graphics) {
                this.graphics.x = this.body.position.x + this.offset.x;
                this.graphics.y = this.body.position.y + this.offset.y;
            }
            if (this.sprite) {
                this.sprite.x = this.body.position.x + this.offset.x;
                this.sprite.y = this.body.position.y + this.offset.y;
            }
        }

        if(!this.emitter) return;
        // 更新動畫
        this.emitter.update(deltaMS * 0.001);
    }

    onUpdate(deltaMS: number): void {
    }

    setEmitter(config: Particle.EmitterConfigV3): Effect {
        this.particleContainer = new PIXI.Container();
        this.emitter = new Particle.Emitter(
            this.particleContainer,
            config
        );
        this.addChild(this.particleContainer);
        return this;
    }
    setBody(body: Matter.Body): Effect {
        this.body = body;
        Matter.Sleeping.set(body, true);
        gameMain.world.addBody(body);
        return this;
    }
    clearBody(): Effect {
        if(this.body) {
            gameMain.world.removeBody(this.body);
            this.body = null;
        }
        return this;
    }
    setGraphics(graphics: PIXI.Graphics): Effect {
        this.graphics = graphics;
        this.addChild(this.graphics);
        return this;
    }
    clearGraphics(): Effect {
        this.removeChild(this.graphics);
        this.graphics = null;
        return this;
    }
    setSprite(sprite: PIXI.Sprite): Effect {
        this.sprite = sprite;
        this.addChild(this.sprite);
        return this;
    }
    clearSprite(): Effect {
        this.removeChild(this.sprite);
        this.sprite = null;
        return this;
    }
    setFollowOffset(followOffset: Offset): Effect {
        this.followOffset = followOffset;
        return this;
    }
    // clearFollowOffset(followOffset: Offset): Effect {
    //     this.followOffset = followOffset;
    //     return this;
    // }
    setFollow(follow: BasicBodyObject): Effect {
        this.follow = follow;
        this.follow.followed = this;
        return this;
    }
    clearFollow(): Effect {
        if(this.follow) {
            this.follow.followed = null;
            this.follow = null;
        }
        return this;
    }

    /**
     * 特效位置的校正
     */
    setOffset(offset: Offset): Effect {
        this.offset = offset;
        return this;
    }
    clearOffset(): Effect {
        this.offset = null;
        return this;
    }
    setEmit(bool: boolean): Effect {
        if(this.emitter) this.emitter.emit = bool;
        return this;
    }
    getEmit(): boolean {
        return this?.emitter?.emit;
    }
    start(): void {
        this.onStart();
        if (this.body) Matter.Sleeping.set(this.body, false);
  
        if(!this.getEmit()) this.setEmit(true);

        let lastUpdateTime = performance.now();

        const loop = () => {
            this.update(performance.now() - lastUpdateTime);
            lastUpdateTime = performance.now();

            if(!this.destroyed) requestAnimationFrame(loop);
        }

        loop();
    }

    onStart(): void {
    }
    onFinish(): void {
        this.clearBody();
        this.clearGraphics();
        this.clearFollow();
        this.destroy();
    }
}