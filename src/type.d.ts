declare namespace CONFIG {
    interface CharacterConfig {
        width: number,
        height: number,
        defaultAnimation: string,
        animation: {
            [key: string]: AnimationConfig
        }
    }
    interface CharacterConfigs {
        [key: string]: CharacterConfig
    }

    interface AnimationConfig {
        name: string,
        path: string,
        frameCount: number,
        width: number,
        height: number,
        offsetX: number,
        offsetY: number,
        animationSpeed: number,
        animationScale: number,
    }
    interface AnimationConfigs {
        [key: string]: AnimationConfig
    }

    interface ObjectConfig {
        path: string
        frameCount: number
        animationSpeed: number
        position: {
            x: number
            y: number
        }
    }
    interface ObjectConfigs {
        [key: string]: ObjectConfig
    }
    interface GameViewport {
        WIDTH: number
        HEIGHT: number
        GroundHeight: number
    }

    interface GameSetting {
        moveSpeed: number
        moveSpeedOnAir: number
    }

    interface KeyInput {
        [key: string]: boolean
    }

    interface Vector {
        x: number
        y: number
    }
}

/**
 * 主要的遊戲邏輯
 */
declare interface IGameMain {
    /**
     * 是否為測試模式(顯示外框、log輸出)
     * @default false
     */
    debug: boolean

    pixi: import("pixi.js").Application
    config: IConfig
    world: IWorld

    /**
     * 上次更新的時間
     */
    laseUpdateTime: number

    /**
     * 事件監聽所接受到的鍵盤輸入
     */
    keyInput: CONFIG.KeyInput

}

/**
 * 整個物理世界，可以管理所有物件
 */
declare interface IWorld {
    background: IBasicObject
    ground: IBodyObject
    character: ICharacter
    trainingDummy: ICharacter

    /**
     * 需要忽略重力的鋼體ID
     */
    ignoreGravityList: number[]

    /**
     * 上次更新的時間
     */
    laseUpdateTime: number

    /**
     * Matter的引擎
     */
    engine: Matter.Engine

    /**
     * Matter的渲染器，用來顯示鋼體
     */
    renderer: Matter.Render

    createBackGround(): void
    createGround(): void
    createCharacter(): void
    createTrainingDummy(): void

    /**
     * 處理碰撞邏輯
     */
    createCollisionHandler(): void

    /**
     * 更新所有內部組件
     * @param deltaMS
     */
    update(deltaMS?: number): void

    /**
     * 增加鋼體到物理引擎之中
     * @param body 
     */
    addBody(body: Matter.Body): void

    /**
     * 將鋼體從物理引擎中去除
     * @param body 
     */
    removeBody(body: Matter.Body): void

    /**
     * 將鋼體設置成忽略重力
     * @param body 
     */
    setIgnoreGravity(body: Matter.Body): void

    /**
     * 世界初始化邏輯
     */
    init(): IWorld
}

/**
 * 為設定檔規範格式
 */
declare interface IConfig {
    /**
     * 跟顯示有關的設定
     */
    GameViewport: CONFIG.GameViewport

    /**
     * 遊戲內部設定
     */
    GameSetting: CONFIG.GameSetting

    /**
     * 資源的靜態路徑
     */
    AssetPath: string

    /**
     * 玩家控制角色的設定，包含動畫設定
     */
    Character: CONFIG.CharacterConfigs

    /**
     * 靜態物體的設定
     */
    Object: CONFIG.ObjectConfigs

    /**
     * 粒子特效設定
     */
    Particle: {
        [name: string]: any
    }

    /**
     * 取得config.json的內容
     */
    fetch(): Promise<IConfig>
}

/**
 * 每個顯示出來的物件都要具備的屬性
 */
declare interface IBasicObject {
    /**
     * 紅色外框，用來除錯
     */
    debugBox: import("pixi.js").Graphics

    /**
     * 角色跟隨的物體()
     */
    followed: IBasicObject | null

    /**
     * 角色面對的方向
     * @default Face.RIGHT
     */
    face: import("./game/Face").Face;

    /**
     * 顯示容器和鋼體的位置偏差
     * @default {x:0,y:0}
     */
    positionOffset: CONFIG.Vector

    animationManager: any //AnimationManager

    /**
     * 角色的設定
     */
    characterConfig: CONFIG.CharacterConfig;

    /**
     * 改變面向
     */
    setFace(face: import("./game/Face").Face): void

    /**
     * 取的當前的面向
     */
    getFace(): import("./game/Face").Face

    /**
     * 在更新前呼叫
     * 需要實作
     */
    onBeforeUpdate(deltaMS: number): void

    /**
     * 在更新時呼叫
     * 需要實作
     */
    onUpdate(deltaMS: number): void

    /**
     * 更新物體
     * @param deltaMS
     */
    update(deltaMS: number): void

    /**
     * 取得實際位置
     */
    getPosition(): CONFIG.Vector

    /**
     * 設定實際位置
     * @param vector
     */
    setPosition(vector: CONFIG.Vector): void

    /**
     * 切換動畫
     * @param name
     */
    switchAnimation(name?: string): void

    /**
     * 等待若干毫秒後執行
     * @param ms 
     * @param cb 
     */
    waitMS(ms: number, cb: () => void): number
}

/**
 * 添加鋼體的物件要具備的屬性
 */
declare interface IBodyObject extends IBasicObject {
    body: Matter.Body

    stop(): void

    /**
     * 設置鋼體位置
     * @param vector 
     */
    setBodyPosition(vector: CONFIG.Vector): void

    /**
     * 透過力移動
     * @param vector 
     */
    moveByForce(vector: CONFIG.Vector): void

    /**
     * 透過向量座標移動
     * @param vector 
     */
    moveByPosition(vector: CONFIG.Vector): void

    /**
     * 透過指定速度移動
     * @param vector
     */
    moveByVelocity(vector: CONFIG.Vector): void
}

declare interface ICharacter extends IBodyObject {
    /**
     * 是否踩在地上
     * @default true
     */
    onGround: boolean

    /**
     * 接收GameMain傳來的鍵盤輸入
     */
    keyInput: CONFIG.KeyInput

    /**
     * 連跳次數
     * @default 0
     */
    jumpCount: number

    /**
     * 正在奔跑
     * @default false
     */
    isRunning: boolean

    movementManager: any

    /**
     * 角色的初始化邏輯
     * @param initX 
     * @param initY 
     */
    init(initX?: number, initY?: number): ICharacter

    /**
     * 從config讀取所有動畫，並且載入，存起來
     */
    loadAnimations(): Promise<void>

    /**
     * 每一帧更新時，玩家對角色的操作輸入
     * @param movements 
     * @param deltaTime 
     */
    move(movements: import("./game/managers/MovementManager").Movement[], deltaTime: number): void

    /**
     * 角色可以進入閒置狀態(default animaion)
     */
    canIdle(): boolean

    /**
     * 設置是否閒置
     */
    setIdle(bool: boolean): void

    /**
     * 是否正在跳躍中
     */
    isJumping(): boolean

    /**
     * 是否可以跳躍
     */
    canJump(): boolean
}