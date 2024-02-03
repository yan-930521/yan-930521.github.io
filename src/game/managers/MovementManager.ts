import { Character } from "../objects/Character";
import MovementHandlers from "../movements";

export { MovementHandlers };

export enum Movement {
    Left,
    Right,
    Jump,
    Sprint,
    LaunchBlueFireBall,
    Attack1
}
export type MoveFunction = (character: Character, matchedMonementHandler: MovementHandler) => void;
export interface MovementHandler {
    key: Movement[],
    name: string,
    description: string,
    cd: number,
    cdName?: string,
    priority: number;
    execute: MoveFunction
}

export const continMover = (count: number, ms: number, cb: () => void, end?: () => void) => {
    cb();
    if (count != 1) {
        setTimeout(() => {
            cb();
            continMover(count-1, ms, cb, end);
        }, ms);
    } else if(end) {
        end();
    }
}

export class MovementManager {
    public CDState: {
        [key: string]: {
            timer: number,
            allow: boolean,
            during: boolean
        }
    } = {};

    public excludeCDList: Movement[][] = [];

    constructor() {
        for (let i in MovementHandlers) {
            this.CDState[MovementHandlers[i].name] = {
                timer: null,
                allow: true,
                during: false
            }
        }
    }

    handleMovement(movements: Movement[]): MovementHandler[] {
        let tempAry: MovementHandler[] = [];
        let tempAry2: MovementHandler[] = [];
        for (let i in MovementHandlers) {
            if (this.isContainMovement(MovementHandlers[i].key, movements)) {
                if(tempAry.length == 0) tempAry.push(MovementHandlers[i]);
                else if(MovementHandlers[i].priority > tempAry[0].priority) {
                    // 歸零
                    tempAry = [ MovementHandlers[i] ];
                } else if(MovementHandlers[i].priority == tempAry[0].priority) {
                    // 歸零
                    tempAry.push(MovementHandlers[i]);
                }
            }
        }
        for(let i in tempAry) {
            let temp = tempAry[i];
            if (!this.isExcludeCD(temp.key)) {
                let cdName: string = temp.cdName || temp.name;
                if (this.CDState[cdName].allow) {
                    this.setCD(cdName, temp.cd)
                    tempAry2.push(temp);
                }
            } else {
                tempAry2.push(temp);
            }
        }
        
        return tempAry2;
    }

    setCD(cdName: string, ms: number) {
        this.CDState[cdName].allow = false;
        this.CDState[cdName].during = true;
        this.CDState[cdName].timer = window.setTimeout(() => {
            this.CDState[cdName].allow = true;
            this.CDState[cdName].during = false;
            this.CDState[cdName].timer = null;
        }, ms);
    }

    isEqualMovement(ma1: Movement[], ma2: Movement[]) {
        let ms1 = new Set<Movement>(ma1), ms2 = new Set<Movement>(ma2);
        return ms1.size === ms2.size && ma1.every((x) => ms2.has(x));
    }

    isContainMovement(ma1: Movement[], ma2: Movement[]) {
        let ms2 = new Set<Movement>(ma2);
        return ma1.every((x) => ms2.has(x));
    }

    isExcludeCD(movements: Movement[]): boolean {
        for (let i in this.excludeCDList) {
            if (this.isEqualMovement(this.excludeCDList[i], movements)) {
                return true;
            }
        }
        return false;
    }

    setExclude(movements: Movement[]): MovementManager {
        this.excludeCDList.push(movements);
        return this;
    }
}