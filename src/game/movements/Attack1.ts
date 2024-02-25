import { Container, Graphics, Sprite, Texture } from "pixi.js";
import { Body, Sleeping } from "matter-js";

import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

import { gameMain } from "../..";

export const getDistanceByVector = (v1: CONFIG.Vector, v2: CONFIG.Vector): number => {
    return Math.sqrt(
        Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2)
    )
}
export const isInRange = (v1: [CONFIG.Vector, CONFIG.Vector], v2: CONFIG.Vector): boolean => {
    return (
        v2.x < Math.max(v1[0].x, v1[1].x) &&
        v2.x > Math.min(v1[0].x, v1[1].x) &&
        v2.y < Math.max(v1[0].y, v1[1].y) &&
        v2.y > Math.min(v1[0].y, v1[1].y)
    )
}

export default {
    key: [Movement.Attack1],
    name: "Attack1",
    description: "拔刀斬",
    cd: 500,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        if(character.movementManager.getLastMovement().includes(matchedMonementHandler.name)) return;

        if(character.body.position.y > gameMain.config.GameSetting.HeightToShowFall) character.switchAnimation("Attack2");
        else {
            character.switchAnimation("JumpAttack2");
        }
       

        const face = character.getFace() == Face.RIGHT ? 1 : -1;
        const anotherCharacters = gameMain.world.getCharacters().filter((ch: Character) => character != ch);
        const start: CONFIG.Vector = {
            x: 30 * face,
            y: -40
        }, end: CONFIG.Vector = {
            x: 100 * face,
            y: 60
        };

        for (let i in anotherCharacters) {
            const anotherCharacter = anotherCharacters[i];
            // console.log(anotherCharacter.body.position as CONFIG.Vector,
            //     character.body.position as CONFIG.Vector,
            //     character.body.position.x + start.x, character.body.position.y + start.y, character.body.position.x + end.x, character.body.position.y + end.y)
            
            // 檢查座標是否在長方形內
            if (isInRange([
                {
                    x: character.body.position.x + start.x,
                    y: character.body.position.y + start.y
                },
                {
                    x: character.body.position.x + end.x,
                    y: character.body.position.y + end.y
                }
            ], anotherCharacter.body.position as CONFIG.Vector)) {
                console.log("hit!", anotherCharacter);
                // 擊退效果
                anotherCharacter.moveByForce({x: face * 1, y: -1});
            }
        }
    }
} as MovementHandler;