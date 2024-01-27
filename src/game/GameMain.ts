import * as PIXI from "pixi.js";

import { World } from "./World";
import { Config } from '../Confjg';
import { Movement } from "./MovementManager";

PIXI.settings.RENDER_OPTIONS.eventMode = "none";
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

export interface KeyInput { [key: string]: boolean }

export class GameMain {
    public app: PIXI.Application;
    public config: Config;
    public world: World;
    public laseUpdateTime: number = performance.now();

    public keyInput: KeyInput = {
        w: false,
        a: false,
        s: false,
        d: false
    }

    constructor() {
    }

    async init(app: PIXI.Application, config: Config) {
        this.app = app;
        this.config = config;

        this.handleKeyInput();

        this.world = new World();
        this.world.init();
        
        console.log("World:", this.world);

        this.app.stage.addChild(this.world);

        this.app.ticker.add(() => {
            const movements = this.getMoveData();

            this.world.character.move(movements, this.getDeltaTime());

            // 更新動畫
            this.world.update(this.app.ticker.deltaMS);
        });
        this.app.ticker.start();
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
            console.log("visibilitychange")
            for (let i in this.keyInput) {
                this.keyInput[i] = false;
            }
        });
    }

    getMoveData(): Movement[] {
        let movements: Movement[] = [];
        if (this.keyInput["w"]) movements.push(Movement.Jump);
        if (this.keyInput["a"]) movements.push(Movement.Left);
        if (this.keyInput["d"]) movements.push(Movement.Right);
        if (this.keyInput["shift"]) movements.push(Movement.Sprint);
        if (this.keyInput["f"]) movements.push(Movement.LaunchBlueFireBall);
        if (this.keyInput["r"]) movements.push(Movement.Attack1);
        return movements;
    }
}