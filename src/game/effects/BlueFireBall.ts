import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import * as Particle from "@pixi/particle-emitter";

import { World } from "../World";
import { Effect } from "../Effect";
import { Config } from "../../Confjg";
import { Character } from "../Character";
import { continMover } from "../MovementManager";
import { Face } from "../BasicObject";
import { gameMain } from "../..";

export default {
    name: "BlueFireBall",
    create: (character: Character): Effect => {
        const step = 0.5;
        const startX = character.body.position.x + 50 * (character.getFace() == Face.RIGHT ? 1 : -1);
        const startY = character.body.position.y;

        let preparing = true;
        let lastUpdateTime = performance.now();

        const effect = new Effect()
            .setEmitter(Particle.upgradeConfig(
                gameMain.config.ParticleConfig.BlueFire as Particle.EmitterConfigV2
                , [
                    PIXI.Texture.from("./assets/particle.png")
                ]
            ))
            // 綁定鋼體
            .setBody(Matter.Bodies.circle(startX, startY, 10, {
                friction: 0.5,
                density: 0.1,
                restitution: 0.8
            }))
            .setFollow(character)
            .setFollowOffset({
                x: 50 * (character.getFace() == Face.RIGHT ? 1 : -1),
                y: 0
            })
            .setOffset({
                x: 0,
                y: 40
            });
        
        gameMain.world.setIgnoreGravity(effect.body);

        effect.onStart = (): void => {
            effect.wait(1000, () => {
                preparing = false;
                effect
                    .clearFollow()
                    .setFollowOffset({
                        x: 0,
                        y: 0
                    });
                continMover(10, 10, () => {
                    effect.moveByForce((
                        character.getFace() == Face.RIGHT ? step : step * -1
                    ), 0);
                    effect.update(performance.now() - lastUpdateTime);
                    lastUpdateTime = performance.now();
                }, () => {
                    effect.onFinish();
                });
            });
        }

        effect.onUpdate = () => {
            if(effect.body) {
                if(preparing) {
                    effect.setBodyPosition(character.body.position.x + 50 * (character.getFace() == Face.RIGHT ? 1 : -1), character.body.position.y);
                }
                Matter.Body.setVelocity(effect.body, {
                    x: effect.body.velocity.x,
                    y: 0
                })
            }
        }

        effect.start();

        return effect;
    }
}