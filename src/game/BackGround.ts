import { AnimatedSprite, Graphics, Sprite } from "pixi.js";

import { Resource } from "./Resource";
import { BasicObject } from "./BasicObject";

import { gameMain } from "..";

export class BackGround extends BasicObject {
    constructor() {
        super();
    }

    init(): BackGround {
        const backgroundColor = new Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, gameMain.config.GameViewport.WIDTH, gameMain.config.GameViewport.HEIGHT)
            .endFill();
        
        this.addChild(backgroundColor);

        for(let i in gameMain.config.Object) {
            const objectConfig = gameMain.config.Object[i];

            if(objectConfig.frameCount == 1) {
                Resource.loadResource(Resource.getUrl(gameMain.config.AssetPath, "background.png")).then((sprite: Sprite) => {
                    const scale = Math.min(gameMain.config.GameViewport.WIDTH / sprite.width, gameMain.config.GameViewport.HEIGHT / sprite.height);
        
                    sprite.x = gameMain.config.GameViewport.WIDTH / 2;
                    sprite.y = gameMain.config.GameViewport.HEIGHT / 2;
        
                    sprite.scale.set(scale);
        
                    this.addChild(sprite);
                });
        
            } else {
                this.animationManager.loadObject(i, objectConfig).then((animation: AnimatedSprite) => {
                    animation.play();
                    this.addChild(animation);
                });
            }
        }

        // 不用管
        this.animationManager.onLoaded();

        return this;
    }
}