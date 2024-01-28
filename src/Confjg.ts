export class Config implements CONFIG.IConfig {
    public GameViewport: CONFIG.IConfig["GameViewport"];
    public JumpCD: CONFIG.IConfig["JumpCD"];
    public AssetPath: CONFIG.IConfig["AssetPath"];
    public Character: CONFIG.IConfig["Character"] = {};
    public Object: CONFIG.IConfig["Object"] = {};
    public Particle: CONFIG.IConfig["Particle"] = {};

    constructor() {
    }

    async fetch(): Promise<Config> {
        const response = await fetch('./config.json');
        const config = await response.json() as CONFIG.IConfig;

        Object.assign(this, config);

        console.log('Config:', this);

        return this;
    }
}