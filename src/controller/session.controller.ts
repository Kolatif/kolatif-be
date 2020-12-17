import { Request, Response } from "express";
import logger from "../util/logger";

export default class SessionController {
  public static async GetAllSessions(req: Request, res: Response) {
    res.sendStatus(200);
  }

  public static async RescheduleSession(req: Request, res: Response) {
    res.sendStatus(200);
  }
}

