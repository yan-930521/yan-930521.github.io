import { Texture } from "pixi.js";
import { Bodies } from "matter-js";
import { upgradeConfig, EmitterConfigV2 } from "@pixi/particle-emitter";

import { Face } from "../../utils/Face";
import { Effect } from "../objects/Effect";
import { Character } from "../objects/Character";
import { continMover } from "../managers/MovementManager";

import { gameMain } from "../..";

export default {
    name: "BlueFireBall",
    create: (character: Character): Effect => {
        const step = 0.5;
        const startX = character.body.position.x + 50 * (character.getFace() == Face.RIGHT ? 1 : -1);
        const startY = character.body.position.y;

        let preparing = true;

        const effect = new Effect()
            .setEmitter(upgradeConfig(
                gameMain.config.Particle.BlueFire as EmitterConfigV2
                , [
                    Texture.from("./assets/particle.png")
                ]
            ))
            // 綁定鋼體
            .setBody(Bodies.circle(startX, startY, 10, {
                friction: 0.5,
                density: 0.1,
                restitution: 0.8
            }))
            .setFollow(character)
            .setFollowOffset({
                x: 50,
                y: 0
            })
            .setOffset({
                x: 0,
                y: 40
            });

        effect.onStart = (): void => {
            effect.waitMS(1000, () => {
                preparing = false;
                effect
                    .clearFollow()
                    .setFollowOffset({
                        x: 0,
                        y: 0
                    })
                    // 讓火球先向前移動一小段距離
                    .moveByPosition({
                        x: 10 * (character.getFace() == Face.RIGHT ? step : step * -1),
                        y: 0
                    });
                continMover(10, 10, () => {
                    effect.moveByForce({
                        x: (character.getFace() == Face.RIGHT ? step : step * -1),
                        y: 0
                    });
                    effect.update(10);
                }, () => {
                    effect.onFinish();
                });
            });
        }
        let x = 1;
        effect.onUpdate = () => {
            if (effect.body) {
                if (preparing) {
                    effect.setBodyPosition({
                        x: (character.body.position.x + 50 * (character.getFace() == Face.RIGHT ? 1 : -1)),
                        y: character.body.position.y
                    });
                }
                effect.moveByVelocity({
                    x: effect.body.velocity.x,
                    y: 0
                });
                // effect.emitter.rotate((x+=10));
            }
        }

        effect.start();

        return effect;
    }
}