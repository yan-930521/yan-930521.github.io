declare namespace CONFIG {
    interface CharacterConfig {
        width: number,
        height: number,
        offsetX: number,
        offsetY: number,
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
        MoveSpeed: number
        MoveSpeedOnAir: number
        Gravity: number
        KeyBoardController: KeyBoardController
        DoubleJumpDelayMs: number
    }

    interface KeyInput {
        [key: string]: boolean
    }

    interface Vector {
        x: number
        y: number
    }

    type KeyBoardController = {
        [name in keyof typeof import("./game/managers/MovementManager").Movement]: string
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

    /**
     * 初始化遊戲邏輯
     * @async
     * @param pixi 
     * @param config 
     */
    init(pixi: import("pixi.js").Application, config: IConfig): void

    /**
     * 取得上次更新到現在經過的時間
     */
    getDeltaTime(): number

    /**
     * 處理鍵盤輸入的事件
     */
    handleKeyInput(): void

    /**
     * 讀取現有的鍵盤輸入中，並且透過CONFIG.GameSetting.KeyBoardController轉換成合法的操作
     */
    getMoveData(): import("./game/managers/MovementManager").Movement[]
}

/**
 * 整個物理世界，可以管理所有物件
 */
declare interface IWorld {
    /**
     * Matter的引擎
     */
    engine: Matter.Engine

    /**
     * Matter的渲染器，用來顯示鋼體
     */
    renderer: Matter.Render

    objects: { index: number, object: IBasicObject }[]

    container: import("pixi.js").Container

    createBackGround(): void
    createGround(): void
    createCharacter(): void
    createTrainingDummy(): void

    /**
     * 將物體加入世界
     * @param object 
     */
    addObjectToWorld(object: IBasicObject | IBodyObject): void

    /**
     * 將物體移出世界
     * @param object 
     */
    removeObjectToWorld(object: IBasicObject | IBodyObject): void

    /**
     * 處理碰撞邏輯
     */
    createCollisionHandler(): void

    /**
     * 更新所有內部組件
     */
    update(deltaMS: number): void

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
     * 世界初始化邏輯
     */
    init(): IWorld

    /**
     * 取得所有可動對象
     */
    getCharacters(): ICharacter[]

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
     * @async
     */
    fetch(): Promise<IConfig>

    /**
     * 檢查資料格式是否正確
     */
    checkConfig(subConfig: any, data: any): void
}

/**
 * 每個顯示出來的物件都要具備的屬性
 */
declare interface IBasicObject extends IEventEmitter {
    /**
     * 紅色外框，用來除錯
     */
    debugBox: import("pixi.js").Graphics

    /**
     * 角色跟隨的物體
     */
    followed: IBasicObject | null

    /**
     * 角色面對的方向
     * @default Face.RIGHT
     */
    face: import("./utils/Face").Face;

    /**
     * 顯示容器和鋼體的位置偏差
     * @default {x:0,y:0}
     */
    positionOffset: CONFIG.Vector

    container: import("pixi.js").Container

    /**
     * 改變面向
     */
    setFace(face: import("./utils/Face").Face): void

    /**
     * 取的當前的面向
     */
    getFace(): import("./utils/Face").Face

    /**
     * 在更新前呼叫
     * 為預設的更新函式
     */
    onBeforeUpdate(deltaMS: number): void

    /**
     * 在更新時呼叫
     * 為預設的更新函式
     */
    onUpdate(deltaMS: number): void

    /**
     * 手動呼叫更新
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

    /**
     * 鋼體
     */
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

/**
 * 玩家操控的角色
 */
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

    /**
    * 角色的設定
    */
    characterConfig: CONFIG.CharacterConfig


    /**
    * 動畫系統
    */
    animationManager: import("./game/managers/AnimationManager").AnimationManager

    /**
     * 操作系統
     */
    movementManager: import("./game/managers/MovementManager").MovementManager

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

    
    /**
     * 切換動畫
     * @param name
     */
    switchAnimation(name?: string): void
}

/**
 * 特效
 */
declare interface IEffect extends IBodyObject {
    /**
     * 粒子特效的發射器
     */
    emitter: import("@pixi/particle-emitter").Emitter;

    /**
     *  角色跟隨的物體
     */
    follow: IBodyObject;

    /**
     * 可以設定的圖像
     */
    graphics: import("pixi.js").Graphics;
    /**
     * 可以設定的圖像
     */
    sprite: import("pixi.js").Sprite;

    /**
     * 可以設定的圖像
     */
    offset: CONFIG.Vector;

    /**
     * 和要跟隨的對象保持的距離
     */
    followOffset: CONFIG.Vector;

    /**
     * 裝粒子特效的容器
     */
    particleContainer: import("pixi.js").Container;

    /**
     * 設定發射器
     * @param config
     */
    setEmitter(config: import("@pixi/particle-emitter").EmitterConfigV3): IEffect

    /**
     * 設置鋼體
     * @param body
     */
    setBody(body: Matter.Body): IEffect

    /**
     * 刪除剛體
     */
    clearBody(): IEffect

    /**
     * 設置圖像
     * @param graphics
     */
    setGraphics(graphics: import("pixi.js").Graphics): IEffect

    /**
     * 清除圖像
     */
    clearGraphics(): IEffect

    /**
     * 設置圖像
     * @param sprite 
     */
    setSprite(sprite: import("pixi.js").Sprite): IEffect

    /**
     * 清除圖像
     */
    clearSprite(): IEffect

    /**
     * 設置和要跟隨的對象保持的距離
     * @param followOffset 
     */
    setFollowOffset(followOffset: CONFIG.Vector): IEffect

    /**
     * 清除和要跟隨的對象保持的距離
     * @param followOffset 
     */
    clearFollowOffset(): IEffect

    /**
     * 設置要跟隨的對象
     * @param follow 
     */
    setFollow(follow: IBodyObject): IEffect

    /**
     * 清除要刪除的對象
     */
    clearFollow(): IEffect

    /**
     * 特效位置的校正
     */
    setOffset(offset: CONFIG.Vector): IEffect

    /**
     * 清除特效位置的校正
     */
    clearOffset(): IEffect

    /**
     * 設置是否開始發射器
     * @param bool
     */
    setEmit(bool: boolean): IEffect

    /**
     * 獲取發射器是否開始
     */
    getEmit(): boolean

    /**
     * 開始整個特效
     */
    start(): void

    /**
     * 當特效開始的時候呼叫
     */
    onStart(): void

    /**
     * 當特效結束的時候呼叫
     */
    onFinish(): void
}


/**
 * 資源載入器
 */
declare abstract class IResource {
    /**
     * 將輸出的arg輸出成完整的連結
     * @param args 
     */
    static getUrl(...args: string[]): string

    /**
     * 創造漸變texture
     * @param width 
     * @param height 
     */
    static createGradTexture(width: number, height: number): import("pixi.js").Texture

    /**
     * 載入圖片資源
     * @param path 
     */
    static loadResource(path: string): Promise<import("pixi.js").Sprite>

    /**
     * 從單一來源載入動畫資源
     * @param path 
     * @param frameCount 
     * @param width 
     * @param height 
     */
    static loadAnimatedResource(path: string, frameCount: number, width?: number, height?: number): Promise<import("pixi.js").AnimatedSprite>

    /**
     * 從單一來源載入多個動畫資源
     * @param path 
     * @param frameCount 
     * @param width 
     * @param height 
     */
    static loadMutiAnimatedResource(path: string, frameCountX: number, frameCountY: number, width?: number, height?: number): Promise<import("pixi.js").AnimatedSprite[]>
}

declare type IEvent = string

declare type IEventListener = (...args: any[]) => void

declare interface IEventEmitter {
    listeners: { [event: string]: IEventListener[] };
    maxListener: number;

    /**
     * 為指定事件註冊一個監聽器，接受一個事件名和一個回調函數。
     * @param event 事件名
     * @param listener 回調函數
     */
    on(event: IEvent, listener: IEventListener): void;

    /**
     * 按照監聽器的順序執行每個監聽器。
     * @param event 事件名
     * @param args 附帶的參數
     */
    emit(event: IEvent, ...args: any[]): void;

    /**
     * `on` 的同名別名函數。
     * @param event 事件名
     * @param listener 回調函數
     */
    addListener(event: IEvent, listener: IEventListener): void;

    /**
     * 和 `on` 類似，但只觸發一次，隨後便解除事件監聽。
     * @param event 事件名
     * @param listener 回調函數
     */
    once(event: IEvent, listener: IEventListener): void;

    /**
     * 移除指定事件的某個監聽回調。
     * @param event 事件名
     * @param listener 要移除的回調函數
     */
    removeListener(event: IEvent, listener: IEventListener): void;

    /**
     * 移除指定事件的所有監聽回調。
     * @param event 要移除監聽器的事件名，如果不提供則移除所有事件的監聽器。
     */
    removeAllListeners(event?: IEvent): void;

    /**
     * 用於提高監聽器的默認限制數量。（默認 10 個監聽回調會產生警告）
     * @param n 監聽器的最大限制數量
     */
    setMaxListeners(n: number): void;

    /**
     * 返回指定事件的監聽器陣列。
     * @param event 事件名
     * @returns 監聽器陣列
     */
    getListeners(event: IEvent): IEventListener[];
}