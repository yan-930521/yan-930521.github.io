import { Body } from 'matter-js';

import { Character } from "../objects/Character";
import { Movement, MovementHandler } from "../managers/MovementManager";

import { gameMain } from '../..';

export default {
    key: [Movement.SquatDown],
    name: "SquatDown",
    description: "朝目前方向衝刺",
    cd: 200,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        // const newBody = character.cloneBody(character.body, character.characterConfig.width, character.characterConfig.height / 2);

        // gameMain.world.removeBody(character.body);
        // gameMain.world.addBody(newBody);
        // character.body = newBody;
        // console.log(character.body.parts);
        //Body.setVertices(character.body, character.createBody(0, 0, character.characterConfig.width, character.characterConfig.height / 2).vertices);
        // character.positionOffset
        character.switchAnimation("Crouch");

        // setTimeout(() => {
        //     const newBody2 = character.cloneBody(character.body, character.characterConfig.width, character.characterConfig.height);

        //     gameMain.world.removeBody(character.body);
        //     gameMain.world.addBody(newBody2);
        //     character.body = newBody2;
        // }, 3000);

    }
} as MovementHandler;