import * as PIXI from "pixi.js";

import { World } from "./World";
import { Config } from './Confjg';
import { Movement } from "./managers/MovementManager";
import { gameMain } from "..";

PIXI.settings.RENDER_OPTIONS.eventMode = "none";
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

export class GameMain implements IGameMain {
    constructor() {
    }

    debug: boolean = false;

    pixi: PIXI.Application<PIXI.ICanvas>;
    config: Config;
    world: World;

    laseUpdateTime: number = performance.now();
    keyInput: CONFIG.KeyInput = {
        w: false,
        a: false,
        s: false,
        d: false
    };

    async init(pixi: PIXI.Application, config: Config) {
        this.pixi = pixi;
        this.config = config;

        this.handleKeyInput();

        this.world = new World();
        this.world.init();
        
        console.log("World:", this.world);

        this.pixi.stage.addChild(this.world);

        this.pixi.ticker.add(() => {
            const movements = this.getMoveData();

            this.world.character.move(movements, this.getDeltaTime());

            // 更新動畫
            this.world.update(this.pixi.ticker.deltaMS);
        });
        this.pixi.ticker.start();
    }


    getDeltaTime(): number {
        const deltaTime = performance.now() - this.laseUpdateTime;
        this.laseUpdateTime = performance.now();
        return deltaTime;
    }

    handleKeyInput() {
        window.onkeydown = (event: KeyboardEvent) => {
            event.preventDefault();
            const key = event.key.toLowerCase();
            this.keyInput[key] = true;
        }

        window.onkeyup = (event: KeyboardEvent) => {
            event.preventDefault();
            const key = event.key.toLowerCase();
            this.keyInput[key] = false;
        }

        document.addEventListener('visibilitychange', () => {
            for (let i in this.keyInput) {
                this.keyInput[i] = false;
            }
        });
    }

    getMoveData(): Movement[] {
        let movements: Movement[] = [];
        
        const { KeyBoardController } = gameMain.config.GameSetting;

        for(let name in KeyBoardController) {
            const mov = Movement[name as keyof typeof Movement]
            if(typeof mov !== "undefined") {
                if (this.keyInput[KeyBoardController[name]]) movements.push(mov);
            }
        }
        return movements;
    }
}