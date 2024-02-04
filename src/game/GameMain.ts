import * as PIXI from "pixi.js";

import { World } from "./objects/World";
import { Config } from '../utils/Confjg';
import { Movement } from "./managers/MovementManager";

import { gameMain } from "..";
import { Engine } from "matter-js";

PIXI.settings.RENDER_OPTIONS.eventMode = "none";
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

export class GameMain implements IGameMain {
    constructor(debug: boolean = true) {
        this.debug = debug;
        
        this.nowUpdateTime = performance.now();
        this.laseUpdateTime = performance.now();
    }

    debug: boolean = false;

    pixi: PIXI.Application<PIXI.ICanvas>;
    config: Config;
    world: World;

    nowUpdateTime: number;
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

        const FPS = 60;
        let count = 0;

        console.log("FPS:", FPS);

        this.laseUpdateTime = 0;
        const interval = 1e3 / FPS | 0; // Fix occasional drop-off frames

        const animate  = () => {
            requestAnimationFrame(animate);
            this.nowUpdateTime = performance.now() | 0;
            let elapsed = this.getDeltaTime();

            if (elapsed < interval) return;

            const movements = this.getMoveData();

            this.world.character.move(movements, elapsed);

            // 更新世界
            this.world.update(elapsed);

            Engine.update(this.world.engine, interval, 1);

            count++;
            if (count%100 == 0) console.log("During:", elapsed);

            // Excellent
            this.laseUpdateTime = this.nowUpdateTime - (elapsed % interval)
        }

        animate();
    }


    getDeltaTime(): number {
        let elapsed = this.nowUpdateTime - this.laseUpdateTime;
        return elapsed;
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

        for (let name in KeyBoardController) {
            const mov = Movement[name as keyof typeof Movement];
            if (typeof mov !== "undefined") {
                if (this.keyInput[KeyBoardController[name]]) movements.push(mov);
            }
        }
        return movements;
    }
}