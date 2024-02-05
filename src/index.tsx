import * as React from "react";
import * as ReactDOM from "react-dom";

import { Config } from "./utils/Confjg";
import { GameView } from "./components/GameView";
import { GameMain } from "./game/GameMain";

export let gameMain: GameMain = new GameMain(false);

(async () => {
    const config = await new Config().fetch();
    gameMain = new GameMain(config.GameSetting.Debug);
    
    ReactDOM.render(
        <GameView id="main" config={config} />,
        document.getElementById("root")
    );
})();