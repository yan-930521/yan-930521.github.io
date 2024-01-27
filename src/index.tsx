import * as React from "react";
import * as ReactDOM from "react-dom";

import { Config } from "./Confjg";
import { GameView } from "./components/GameView";
import { GameMain } from "./game/GameMain";

export const gameMain = new GameMain();

(async () => {
    const config = await new Config().fetch();

    ReactDOM.render(
        <GameView id="main" config={config} />,
        document.getElementById("root")
    );
})();