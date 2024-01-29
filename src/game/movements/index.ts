import { MovementHandler } from "../managers/MovementManager";

const MovementHandlers: MovementHandler[] = [];

import("./Jump").then((module) => {
    MovementHandlers.push(module.default);
});
import("./MoveLeft").then((module) => {
    MovementHandlers.push(module.default);
});
import("./MoveRight").then((module) => {
    MovementHandlers.push(module.default);
});
import("./Sprint").then((module) => {
    MovementHandlers.push(module.default);
});
import("./LaunchBlueFireBall").then((module) => {
    MovementHandlers.push(module.default);
});
import("./Attack1").then((module) => {
    MovementHandlers.push(module.default);
});

export default MovementHandlers;