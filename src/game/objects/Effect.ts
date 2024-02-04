import { Graphics, Sprite, Container, DisplayObject } from "pixi.js";
import { Sleeping } from "matter-js";
import { Emitter, EmitterConfigV3 } from "@pixi/particle-emitter";

import { Face } from "../../utils/Face";
import { BodyObject } from "./BodyObject";

import { gameMain } from "../..";

export class Effect extends BodyObject implements IEffect {
    emitter: Emitter;
    follow: BodyObject;
    graphics: Graphics;
    sprite: Sprite;
    offset: CONFIG.Vector;
    followOffset: CONFIG.Vector;
    particleContainer: Container;

    constructor() {
        super();

        gameMain.world.addObjectToWorld(this);
        this.container.width = gameMain.config.GameViewport.WIDTH;
        this.container.height = gameMain.config.GameViewport.HEIGHT;

        this.container.x = 0;
        this.container.y = 0;
    }

    onBeforeUpdate(deltaMS: number): void {
        let x: number = 0, y: number = 0;
        if (this.follow) {
            x = this.follow.body.position.x + this.followOffset.x * (this.follow.face == Face.RIGHT ? 1 : -1);
            y = this.follow.body.position.y + this.followOffset.y;

            this.setBodyPosition({x, y});

            if (this.emitter) this.emitter.updateOwnerPos(
                x + this.offset.x,
                y + this.offset.y
            );

            if (this.graphics) {
                this.graphics.x = this.follow.container.x + this.followOffset.x;
                this.graphics.y = this.follow.container.y + this.followOffset.y;
            }
            if (this.sprite) {
                this.sprite.x = this.follow.container.x + this.followOffset.x;
                this.sprite.y = this.follow.container.y + this.followOffset.y;
            }
        } else if (this.body) {
            if (this.emitter) this.emitter.updateOwnerPos(
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

        if (!this.emitter) return;
        // 更新動畫
        this.emitter.update(deltaMS * 0.001);
    }

    setEmitter(config: EmitterConfigV3): Effect {
        this.particleContainer = new Container();
        this.emitter = new Emitter(
            this.particleContainer,
            config
        );
        this.container.addChild(this.particleContainer);
        return this;
    }
    setBody(body: Matter.Body): Effect {
        this.body = body;
        Sleeping.set(body, true);
        gameMain.world.addBody(body);
        return this;
    }
    clearBody(): Effect {
        if (this.body) {
            gameMain.world.removeBody(this.body);
            this.body = null;
        }
        return this;
    }
    setGraphics(graphics: Graphics): Effect {
        this.graphics = graphics;
        this.container.addChild(this.graphics);
        return this;
    }
    clearGraphics(): Effect {
        this.container.removeChild(this.graphics);
        this.graphics = null;
        return this;
    }
    setSprite(sprite: Sprite): Effect {
        this.sprite = sprite;
        this.container.addChild(this.sprite);
        return this;
    }
    clearSprite(): Effect {
        this.container.removeChild(this.sprite);
        this.sprite = null;
        return this;
    }
    setFollowOffset(followOffset: CONFIG.Vector): Effect {
        this.followOffset = followOffset;
        return this;
    }
    clearFollowOffset(): Effect {
        this.followOffset = {
            x: 0,
            y: 0
        };
        return this;
    }
    setFollow(follow: BodyObject): Effect {
        this.follow = follow;
        this.follow.followed = this;
        return this;
    }
    clearFollow(): Effect {
        if (this.follow) {
            this.follow.followed = null;
            this.follow = null;
        }
        return this;
    }

    /**
     * 特效位置的校正
     */
    setOffset(offset: CONFIG.Vector): Effect {
        this.offset = offset;
        return this;
    }
    clearOffset(): Effect {
        this.offset = null;
        return this;
    }
    setEmit(bool: boolean): Effect {
        if (this.emitter) this.emitter.emit = bool;
        return this;
    }
    getEmit(): boolean {
        return this?.emitter?.emit;
    }
    
    start(): void {
        this.onStart();
        if (this.body) Sleeping.set(this.body, false);

        if (!this.getEmit()) this.setEmit(true);

        let lastUpdateTime = performance.now();

        // const loop = () => {
        //     this.update((performance.now() - lastUpdateTime) );
        //     // this.update(gameMain.getDeltaTime());
        //     lastUpdateTime = performance.now();

        //     if (!this.container.destroyed) requestAnimationFrame(loop);
        // }

        // loop();
    }

    onStart(): void {
    }

    onFinish(): void {
        this.clearBody();
        this.clearGraphics();
        this.clearFollow();
        this.container.destroy();
    }
}