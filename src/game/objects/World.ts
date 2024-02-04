import { Container } from "pixi.js";
import { Body, Engine, Events, IEventCollision, Render, Mouse, Runner, Composite, MouseConstraint, World as MatterWorld } from "matter-js";

import { Ground } from "./Ground";
import { Character } from "./Character";
import { BackGround } from "./BackGround";
import { BasicObject } from "./BasicObject";
import { EventEmitter } from "../../utils/EventEmitter";

import { gameMain } from "../..";
import { BodyObject } from "./BodyObject";

export class World extends EventEmitter implements IWorld {
    public ground: Ground;
    public character: Character;
    public trainingDummy: Character;
    public background: BackGround;
    public engine: Engine = Engine.create({
        gravity: {
            // 1.2 // 0.5
            y: gameMain.config.GameSetting.Gravity
        }
    });
    public renderer: Render;

    public objects: { index: number, object: (BasicObject | BodyObject) }[] = [];

    public container: Container;

    constructor() {
        super();
        this.container = new Container();
        if (gameMain.debug) {
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
        }

        // Runner.run(this.engine);
    }

    createBackGround() {
        const background = new BackGround().init();

        this.addObjectToWorld(background);
        this.background = background;
    }

    createGround() {
        const ground = new Ground().init();

        this.addObjectToWorld(ground);
        this.ground = ground;
    }

    createCharacter() {
        const character = new Character(gameMain.config.Character.Samurai).init();

        this.addObjectToWorld(character);

        this.character = character;
    }

    createTrainingDummy() {
        const trainingDummy = new Character(gameMain.config.Character.TrainingDummy).init(
            gameMain.config.GameViewport.WIDTH * 2 / 3
        );
        this.addObjectToWorld(trainingDummy);

        this.trainingDummy = trainingDummy;
    }


    createCollisionHandler() {
        Events.on(this.engine, "collisionStart", (event: IEventCollision<Engine>) => {
            const pairs = event.pairs;
            for (let i in pairs) {
                // 只要有施力點
                if (this.character.body.id == pairs[i].bodyA.id || this.character.body.id == pairs[i].bodyB.id) {
                    setTimeout(() => {
                        this.character.onGround = true;
                        this.character.jumpCount = 0;
                    }, gameMain.config.GameSetting.DelayAllowJump);
                }
            }

        });
        Events.on(this.engine, "collisionEnd", (event: IEventCollision<Engine>) => {
            const pairs = event.pairs;
            for (let i in pairs) {
                if (this.character.body.id == pairs[i].bodyA.id || this.character.body.id == pairs[i].bodyB.id) {
                    this.character.onGround = false;
                }
            }
        });

    }

    update(deltaMS: number) {
        // if(gameMain.debug) console.log("on update: ", deltaMS, "(ms)");
        for(let i in this.objects) {
            const obj = this.objects[i];
            obj.object.emit("beforeUpdate", deltaMS);
            obj.object.emit("update", deltaMS);
        }
    }

    addBody(body: Body): void {
        MatterWorld.add(this.engine.world, [body]);
    }
    removeBody(body: Body): void {
        MatterWorld.remove(this.engine.world, [body]);
    }

    init(): World {
        this.createBackGround();
        this.createGround();
        this.createCharacter();
        this.createTrainingDummy();

        this.createCollisionHandler();
        return this;
    }

    getCharacters(): Character[] {
        return this.objects.map((obj) => {
            if(obj.object instanceof Character) {
                return obj.object as Character;
            }
        }).filter((ch) => typeof ch !== "undefined");
    }

    addObjectToWorld(object: BasicObject | BodyObject): void {
        this.objects.push({
            index: this.objects.length,
            object
        })
        this.container.addChild(object.container);
        if (object instanceof BodyObject && object.body) {
            this.addBody(object.body);
        }
    }

    removeObjectToWorld(object: BasicObject | BodyObject): void {
        this.objects = this.objects.filter((obj: { index: number, object: BasicObject | BodyObject }) => object != obj.object);

        this.container.removeChild(object.container);

        if (object instanceof BodyObject) {
            this.removeBody(object.body);
        }
    }
}