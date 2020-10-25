import { Application, Router } from "express";
import { IndexController } from "./controllers";
import { PingController } from "./controllers/auth";

const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/auth", PingController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
