import { Application, Router } from "express";
import { IndexController } from "./controllers";
import { AuthController } from "./controllers/auth";

const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/auth", AuthController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
