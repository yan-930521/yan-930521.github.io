import * as PIXI from "pixi.js";

import { World } from "./objects/World";
import { Config } from '../utils/Confjg';
import { Movement } from "./managers/MovementManager";

import { gameMain } from "..";

PIXI.settings.RENDER_OPTIONS.eventMode = "none";
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

export class GameMain implements IGameMain {
    constructor(debug: boolean = true) {
        this.debug = debug;
        this.laseUpdateTime = performance.now();
    }

    debug: boolean = false;

    pixi: PIXI.Application<PIXI.ICanvas>;
    config: Config;
    world: World;

    laseUpdateTime: number;
    
    keyInput: CONFIG.KeyInput = {};

    async init(pixi: PIXI.Application, config: Config) {
        this.pixi = pixi;
        this.config = config;

        this.handleKeyInput();

        this.world = new World();
        this.world.init();
        
        console.log("gameMain:", this);

        this.pixi.stage.addChild(this.world.container);

        let up = performance.now(), p = 0;
        console.log("Now time:", up)
        this.pixi.ticker.add(() => {
            const movements = this.getMoveData();
            
            this.world.character.move(movements, this.getDeltaTime());

            // 更新世界
            this.world.update(this.getDeltaTime());

            p++;
            if(p == 100) console.log("During:", performance.now() - up)
        });
        this.pixi.ticker.start();
    }


    getDeltaTime(): number {
        return this.pixi.ticker.deltaMS;
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
            const mov = Movement[name as keyof typeof Movement];
            if(typeof mov !== "undefined") {
                if (this.keyInput[KeyBoardController[name]]) movements.push(mov);
            }
        }
        return movements;
    }
}