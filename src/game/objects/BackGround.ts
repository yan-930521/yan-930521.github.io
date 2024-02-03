import { AnimatedSprite, Graphics, Sprite } from "pixi.js";

import { Resource } from "../../utils/Resource";
import { BasicObject } from "./BasicObject";

import { gameMain } from "../..";
import { AnimationManager } from "../managers/AnimationManager";

export class BackGround extends BasicObject {
    public animationManager: AnimationManager;
    constructor() {
        super();
        this.animationManager = new AnimationManager()
    }
    init(): BackGround {
        const backgroundColor = new Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, gameMain.config.GameViewport.WIDTH, gameMain.config.GameViewport.HEIGHT)
            .endFill();
        
        this.container.addChild(backgroundColor);

        for(let i in gameMain.config.Object) {
            const objectConfig = gameMain.config.Object[i];

            if(objectConfig.frameCount == 1) {
                Resource.loadResource(Resource.getUrl(gameMain.config.AssetPath, objectConfig.path)).then((sprite: Sprite) => {
                    const scale = Math.min(gameMain.config.GameViewport.WIDTH / sprite.width, gameMain.config.GameViewport.HEIGHT / sprite.height);
        
                    sprite.x = objectConfig.position.x;
                    sprite.y = objectConfig.position.y;
        
                    sprite.scale.set(scale);
        
                    this.container.addChild(sprite);
                });
        
            } else {
                this.animationManager.loadObject(i, objectConfig).then((animation: AnimatedSprite) => {
                    animation.play();
                    this.container.addChild(animation);
                });
            }
        }

        // 不用管
        this.animationManager.onLoaded();

        return this;
    }
}