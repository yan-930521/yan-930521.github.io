import { Container } from "pixi.js";
import { Body, Engine, Events, IEventCollision, Render, Mouse, Runner, Composite, MouseConstraint, World as MatterWorld } from "matter-js";

import { Ground } from "./Ground";
import { Character } from "./Character";
import { BackGround } from "./BackGround";

import { gameMain } from "..";

export class World extends Container implements IWorld  {
    public background: BackGround;

    public ground: Ground;
    public character: Character;
    public trainingDummy: Character;

    public ignoreGravityList: number[] = [];

    public laseUpdateTime: number = performance.now();
    public engine: Engine = Engine.create({
        gravity: {
            y: gameMain.config.GameSetting.Gravity//1.2 // 0.5
        }
    });
    public renderer: Render;

    constructor() {
        super();

        this.renderer = Render.create({
            canvas: document.getElementById("matter") as HTMLCanvasElement,
            engine: this.engine,
            options: {
                width: gameMain.config.GameViewport.WIDTH,
                height: gameMain.config.GameViewport.HEIGHT,
            }
        });

        this.renderer.mouse = Mouse.create(document.getElementById("matter"));

        Composite.add(this.engine.world, MouseConstraint.create(this.engine, {
            mouse: this.renderer.mouse
        }));


        Render.run(this.renderer);
        Runner.run(this.engine);
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
        const character = new Character(gameMain.config.Character.Samurai).init();

        this.addChild(character);
        this.addBody(character.body);

        this.character = character;
    }

    createTrainingDummy() {
        const trainingDummy = new Character(gameMain.config.Character.TrainingDummy).init(
            gameMain.config.GameViewport.WIDTH * 2 / 3
        );
        this.addChild(trainingDummy);
        this.addBody(trainingDummy.body);

        this.trainingDummy = trainingDummy;
    }


    createCollisionHandler() {
        Events.on(this.engine, "collisionStart", (event: IEventCollision<Engine>) => {
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
        Events.on(this.engine, "collisionEnd", (event: IEventCollision<Engine>) => {
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
        if (!deltaMS) deltaMS = gameMain.pixi.ticker.deltaMS;
        this.background.update(deltaMS);
        this.character.update(deltaMS);
        this.trainingDummy.update(deltaMS);

        Body.setAngle(this.character.body, 0);
        Body.setAngularSpeed(this.character.body, 0);
        Body.setAngularVelocity(this.character.body, 0);
    }

    addBody(body: Body): void {
        MatterWorld.add(this.engine.world, [body]);
    }
    removeBody(body: Body): void {
        MatterWorld.remove(this.engine.world, [body]);
    }

    setIgnoreGravity(body: Body): void {
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