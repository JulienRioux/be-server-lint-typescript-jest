"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var controllers_1 = require("./controllers");
var auth_1 = require("./controllers/auth");
var _routes = [
    ["/", controllers_1.IndexController],
    ["/auth", auth_1.PingController],
];
exports.routes = function (app) {
    _routes.forEach(function (route) {
        var url = route[0], controller = route[1];
        app.use(url, controller);
    });
};
//# sourceMappingURL=routes.js.map