import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

import { Ground } from "./Ground";
import { Character } from "./Character";
import { BackGround } from "./BackGround";
import { gameMain } from "..";

export class World extends PIXI.Container {
    public background: BackGround;

    public ground: Ground;
    public character: Character;
    public trainingDummy: Character;

    public ignoreGravityList: number[] = [];

    public laseUpdateTime: number = performance.now();

    public engine: Matter.Engine = Matter.Engine.create({
        gravity: {
            y: 1.2 // 0.5
        }
    });
    public renderer: Matter.Render;

    constructor() {
        super();

        this.renderer = Matter.Render.create({
            canvas: document.getElementById("matter") as HTMLCanvasElement,
            engine: this.engine,
            options: {
                width: gameMain.config.GameViewport.WIDTH,
                height: gameMain.config.GameViewport.HEIGHT,
            }
        });

        this.renderer.mouse = Matter.Mouse.create(document.getElementById('matter'));

        Matter.Composite.add(this.engine.world, Matter.MouseConstraint.create(this.engine, {
            mouse: this.renderer.mouse
        }));


        Matter.Render.run(this.renderer);
        Matter.Runner.run(this.engine);
    }

    createBackGround() {
        const background = new BackGround().init();

        this.addChild(background);
        this.background = background;
    }

    createGround() {
        const ground = new Ground().init();

        this.addChild(ground);
        this.addBody(ground.body);
        this.ground = ground;
    }

    createCharacter() {
        const character = new Character(gameMain.config.Character.Samurai, false).init();

        this.addChild(character);
        this.addBody(character.body);

        this.character = character;
    }

    createTrainingDummy() {
        const trainingDummy = new Character(gameMain.config.Character.TrainingDummy, false).init(
            gameMain.config.GameViewport.WIDTH * 2 / 3
        );
        this.addChild(trainingDummy);
        this.addBody(trainingDummy.body);

        this.trainingDummy = trainingDummy;
    }


    createCollisionHandler() {
        Matter.Events.on(this.engine, "collisionStart", (event: Matter.IEventCollision<Matter.Engine>) => {
            const pairs = event.pairs;
            for (let i in pairs) {
                // if ([
                //     pairs[i].bodyA.id,
                //     pairs[i].bodyB.id
                // ].includes(this.ground.body.id)) {
                //     let anotherId = pairs[i].bodyA.id == this.ground.body.id ? pairs[i].bodyB.id : pairs[i].bodyA.id;
                //     if(this.character.body.id == anotherId) {
                //         this.character.onGround = true;
                //         // 著地才歸0
                //         this.character.jumpCount = 0;
                //     }
                // }

                // 改成只要有施力點
                if (this.character.body.id == pairs[i].bodyA.id || this.character.body.id == pairs[i].bodyB.id) {
                    this.character.onGround = true;
                    this.character.jumpCount = 0;
                }
            }

        });
        Matter.Events.on(this.engine, "collisionEnd", (event: Matter.IEventCollision<Matter.Engine>) => {
            const pairs = event.pairs;
            for (let i in pairs) {
                // if ([
                //     pairs[i].bodyA.id,
                //     pairs[i].bodyB.id
                // ].includes(this.ground.body.id)) {
                //     let anotherId = pairs[i].bodyA.id == this.ground.body.id ? pairs[i].bodyB.id : pairs[i].bodyA.id;
                //     if (this.character.body.id == anotherId) {
                //         this.character.onGround = false;
                //     }
                // }

                if (this.character.body.id == pairs[i].bodyA.id || this.character.body.id == pairs[i].bodyB.id) {
                    this.character.onGround = false;
                }
            }
        });

    }

    update(deltaMS?: number) {
        if (!deltaMS) deltaMS = gameMain.app.ticker.deltaMS;
        this.background.update(deltaMS);
        this.character.update(deltaMS);
        this.trainingDummy.update(deltaMS);

        Matter.Body.setAngle(this.character.body, 0);
        Matter.Body.setAngularSpeed(this.character.body, 0);
        Matter.Body.setAngularVelocity(this.character.body, 0);
        // Matter.Engine.update(this.engine, (performance.now() - this.laseUpdateTime) * (1000 / 60));

        // this.laseUpdateTime = performance.now();
    }

    addBody(body: Matter.Body): void {
        Matter.World.add(this.engine.world, [body]);
    }
    removeBody(body: Matter.Body): void {
        Matter.World.remove(this.engine.world, [body]);
    }

    setIgnoreGravity(body: Matter.Body): void {
        this.ignoreGravityList.push(body.id);
    }

    init(): World {
        this.createBackGround();
        this.createGround();
        this.createCharacter();
        this.createTrainingDummy();

        this.createCollisionHandler();
        return this;
    }
}