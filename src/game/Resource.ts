import { AnimatedSprite, BaseTexture, Rectangle, Sprite, Texture } from "pixi.js";

export interface Animations {
    [key: string]: AnimatedSprite
}
export class Resource implements IResource {
    static getUrl(...args: string[]): string {
        return args.map((part, i) => {
            if (i === 0) {
                return part.trim().replace(/[\/]*$/g, '');
            } else {
                return part.trim().replace(/(^[\/]*|[\/]*$)/g, '');
            }
        }).filter(x => x.length).join('/');
    }

    static createGradTexture(width: number, height: number): Texture {
        const canvas = document.createElement('canvas');
    
        canvas.width = width;
        canvas.height = height;
    
        const ctx = canvas.getContext('2d');
    
        const grd = ctx.createLinearGradient(0, 0, width, 0);
    
        
        grd.addColorStop(0, 'white');
        grd.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);
    
        return Texture.from(canvas);
    }

    static async loadResource(path: string): Promise<Sprite> {
        const texture = Texture.from(path);
        await texture.baseTexture.resource.load();

        const sprite = new Sprite(texture);
        sprite.anchor.set(0.5);

        return sprite;
    }

    static async loadAnimatedResource(path: string, frameCount: number, width?: number, height?: number): Promise<AnimatedSprite> {
        return new Promise(async (res, rej)=> {
            const ans = await this.loadMutiAnimatedResource(path, frameCount, 1, width, height);
            res(ans[0]);
        })
    }

    static async loadMutiAnimatedResource(path: string, frameCountX: number, frameCountY: number, width?: number, height?: number): Promise<AnimatedSprite[]> {
        const texture = BaseTexture.from(path);
        await texture.resource.load();
        const frames: Texture[] = [];
        const animatedSprites: AnimatedSprite[] = [];

        const frameWidth = texture.width / frameCountX;
        const frameHeight = texture.height / frameCountY;

        for (let j = 0; j < frameCountY; j++) {
            for (let i = 0; i < frameCountX; i++) {
                let startX, startY;
                if (!width) {
                    startX = 0;
                    width = frameWidth;
                } else {
                    startX = i * frameWidth + (frameWidth - width) / 2;
                }
                if (!height) {
                    startY = 0;
                    height = frameHeight;
                } else {
                    startY = frameHeight - height;
                }
    
                const frame = new Rectangle(startX, startY, width, height);
                frames.push(new Texture(texture, frame));
            }
            const animatedSprite = new AnimatedSprite(frames);
            animatedSprite.anchor.set(0.5);
            animatedSprites.push(animatedSprite);
        }
        return animatedSprites;
    }
}