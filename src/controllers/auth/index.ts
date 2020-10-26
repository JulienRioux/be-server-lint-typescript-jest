import { NextFunction, Request, Response, Router } from "express";
export const AuthController: Router = Router();

AuthController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send({ data: "Authenticating" });
    } catch (e) {
      next(e);
    }
  }
);
