import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import * as Particle from "@pixi/particle-emitter";

import { World } from "../World";
import { Effect } from "../Effect";
import { Config } from "../../Confjg";
import { Character } from "../Character";
import { continMover } from "../MovementManager";
import { Face } from "../BasicObject";
import { Resource } from "../Resource";

export default {
    name: "BlueGragon",
    create: (config: Config, world: World, character: Character): Effect => {
        const step = 0.5;

        let lastUpdateTime = performance.now();

        const effect = new Effect()
            .setEmitter(Particle.upgradeConfig(
                config.ParticleConfig.BlueFire as Particle.EmitterConfigV2
                , [
                    PIXI.Texture.from("./assets/particle.png")
                ]
            ))
            // 綁定鋼體
            .setBody(Matter.Bodies.circle(character.body.position.x + 50, character.body.position.y, 10, {
                friction: 0.5,
                restitution: 0.8
            }))
            // .setGraphics(new PIXI.Graphics()
            //     .beginFill(0xFF0000)
            //     .drawCircle(0, 0, 10)
            //     .endFill())
            .setFollow(character)
            .setFollowOffset({
                x: 50,
                y: 0
            })
            .setOffset({
                x: 0,
                y: 40
            });
        
        Resource.loadResource("./assets/GragonHead.png").then((sprite: PIXI.Sprite) => {

            sprite.scale.set(-0.4, 0.4);
            
            const colorMatrix = new PIXI.ColorMatrixFilter();
            colorMatrix.reset();
            colorMatrix.tint(0Xe4f9ff);
            sprite.filters = [colorMatrix];

            effect.setSprite(sprite);
        });

        effect.onStart = (): void => {
            effect.wait(1000, () => {
                effect
                    .clearFollow()
                    .setFollowOffset({
                        x: 0,
                        y: 0
                    });
                continMover(10, 10, () => {
                    effect.moveByForce((
                        character.getFace() == Face.RIGHT ? step : step * -1
                    ), 0.01);
                    effect.update(performance.now() - lastUpdateTime);
                    lastUpdateTime = performance.now();
                }, () => {
                    effect.onFinish();
                });
            });
        }

        effect.start();

        return effect;
    }
};