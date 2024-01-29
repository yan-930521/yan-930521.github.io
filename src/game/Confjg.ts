export class Config implements IConfig {
    GameViewport: { WIDTH: number; HEIGHT: number; GroundHeight: number; };
    AssetPath: string;
    Character: CONFIG.CharacterConfigs;
    Object: CONFIG.ObjectConfigs;
    Particle: { [name: string]: any; };
    GameSetting: CONFIG.GameSetting;

    async fetch(): Promise<IConfig> {
        const response: Response = await fetch('./config.json');
        const config: Config = await response.json() as IConfig;

        Object.assign(this, config);
        
        return this;
    }
}