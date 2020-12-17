import { Request, Response } from "express";
import { oAuth2Client } from "../util/config";
import logger from "../util/logger";

export default class AuthController {
  public static async Oauth2Callback(req: Request, res: Response) {
    logger.debug(req.body);
    const code: string = req.body.code as string;
    if (!code) {
      res.sendStatus(404);
      return;
    }
    try {
      const r = await oAuth2Client.getToken(code);
      logger.debug(r);
      oAuth2Client.setCredentials(r.tokens);
      res.sendStatus(200);
    } catch (err) {
      logger.debug(err);
      res.sendStatus(400);
    }
  }

  public static Login(req: Request, res: Response) {
    res.sendStatus(200);
  }

  public static Logout(req: Request, res: Response) {
    res.sendStatus(200);
  }

  public static Signup(req: Request, res: Response) {
    res.sendStatus(200);
  }
}
