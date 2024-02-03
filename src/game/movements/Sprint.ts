import { GlowFilter } from '@pixi/filter-glow';

import { Face } from "../../utils/Face";
import { Character } from "../objects/Character";
import { Movement, MovementHandler, continMover } from "../managers/MovementManager";

export default {
    key: [Movement.Sprint],
    name: "Sprint",
    description: "朝目前方向衝刺",
    cd: 1500,
    priority: 1,
    execute: (character: Character, matchedMonementHandler: MovementHandler) => {
        character.container.alpha = 0.6;
        const step = 10 * (character.getFace() == Face.RIGHT ? 1 : -1);
        const glowFilter = new GlowFilter({
            distance: 10,
            outerStrength: 1,
            quality: 1,
        });
        let i = 0;
        continMover(6, 20, () => {
            if (i == 0) {
                glowFilter.color = 0xffff00; //0xF1F69D;
            } else if (i == 2) {
                glowFilter.color = 0x00ff00; //0xABE2C7;
            } else if (i == 4) {
                glowFilter.color = 0x66CFF1; //0x66CFF1;
            }

            character.container.filters = [glowFilter];
            character.moveByPosition({
                x: step,
                y: 0
            });
            i++;
        }, () => {
            character.container.alpha = 0.8;
            glowFilter.color = 0x2EA4FF;
            setTimeout(() => {
                character.container.alpha = 1;
                character.container.filters = null;
            }, 50);
        });
    }
} as MovementHandler;