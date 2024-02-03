import { Container, Graphics} from "pixi.js";

import { Face } from "../../utils/Face";
import { EventEmitter } from "../../utils/EventEmitter";

export class BasicObject extends EventEmitter implements IBasicObject {
    public face: Face;
    public followed: IBasicObject | null;
    public positionOffset: CONFIG.Vector;
    public container: Container;
    public debugBox: Graphics;

    constructor() {
        super();

        this.container = new Container();

        this.face = Face.RIGHT;

        this.positionOffset = {
            x: 0,
            y: 0
        }

        this.on("beforeUpdate", (deltaMS: number) => {
            this.onBeforeUpdate(deltaMS);
        });
        this.on("update", (deltaMS: number) => {
            this.onUpdate(deltaMS);
        });
    }

    setFace(face: Face): void {
        if (this.face == face) return;
        if (face == Face.RIGHT) {
            this.container.scale.x = 1;
        } else if (face == Face.LEFT) {
            this.container.scale.x = -1;
        }
        this.face = face;
    }
    getFace(): Face {
        return this.face;
    }

    onBeforeUpdate(deltaMS: number): void {
    }
    onUpdate(deltaMS: number): void {
    }

    update(deltaMS: number): void {
        this.onBeforeUpdate(deltaMS);
        this.onUpdate(deltaMS);
    }

    /**
     * @deprecated
     * @returns 
     */
    getPosition(): CONFIG.Vector {
        // 假設原本是 100，偏移為 25，真實為 75
        // set 50 -> 50 + 25 -> 真實為 50，原本為 75
        // get -> 75 - 25 -> 真實為 50，原本為 75
        return {
            x: this.container.x - this.positionOffset.x,
            y: (this.container.y - this.positionOffset.y) * -1,
        }
    }
    
    setPosition(vector: CONFIG.Vector) {
        this.container.x = vector.x + this.positionOffset.x;
        this.container.y = vector.y + this.positionOffset.y;
    }

    waitMS(ms: number, cb: () => void): number {
        return window.setTimeout(cb, ms);
    }
}