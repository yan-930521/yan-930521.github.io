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

        // this.checkConfig(this, config);
           
        Object.assign(this, config);
        
        return this;
    }

    /**
     * @deprecated
     */
    checkConfig(subConfig: any, data: any): void {
        Object.keys(subConfig).forEach((key: string) => {
            const obj = data[key];
            if(typeof obj  === "object") {
                this.checkConfig(subConfig[key], obj);
            } else if(typeof obj  === "undefined"){
                throw new Error(`Config Not Found!\nReading ${key} in\n${JSON.stringify(subConfig, null, 4)}`);
            }
        });
    }
}