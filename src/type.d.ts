declare module "matter-attractors";
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
        path: string,
        frameCount: number,
        animationSpeed: number
        position: {
            x: number,
            y: number
        }
    }
    interface ObjectConfigs {
        [key: string]: ObjectConfig
    }
    interface GameSetting {
        moveSpeed: number,
        moveSpeedOnAir: number
    }
    interface IConfig {
        GameViewport: {
            WIDTH: number,
            HEIGHT: number,
            GroundHeight: number,
        },
        GameSetting: GameSetting
        AssetPath: string,
        Character: CharacterConfigs,
        Object: ObjectConfigs,
        Particle: {
            [name: string]: any
        }
    }
}