import * as React from "react";
import * as PIXI from 'pixi.js';
import { Config } from "../game/Confjg";
import { gameMain } from "..";

interface GameViewProps extends React.HTMLAttributes<HTMLCanvasElement> {
    // 這裡可以添加其他需要的屬性
    config: Config;
}

/**
 * 主要的渲染畫布
 */
export class GameView extends React.Component<GameViewProps, {}> {
    public pixi: PIXI.Application<HTMLCanvasElement>;

    constructor(props: GameViewProps) {
        super(props);
        
        this.pixi = new PIXI.Application<HTMLCanvasElement>({ 
            width: props.config.GameViewport.WIDTH, 
            height: props.config.GameViewport.HEIGHT,
            antialias: true,      
            resolution: 1,
            view: document.getElementById("canvas") as HTMLCanvasElement
        });

        this.state = { timeStamp: new Date() };
    }

    componentDidMount() {
        document.body.appendChild(this.pixi.view);

        gameMain.init(this.pixi, this.props.config);
    }

    render(): null {
        return (null);
    }

    resize() {
        
    }
}