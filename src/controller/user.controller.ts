import { Request, Response } from "express";
import logger from "../util/logger";
import User from "../model/user.model";
import Experience from "../model/experience.model";
import Education from "../model/education.model";

export default class UserController {
  public static async GetAllUsers(req: Request, res: Response) {
    const users = await User.findAll();
    logger.debug(users);
    res.sendStatus(200);
  }

  public static async GetUserByID(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    if (!id) {
      res.sendStatus(405);
      return;
    }

    try {
      const user = await User.findOne({ where: { id: id } });
      if (!user) {
        res.sendStatus(404);
        return;
      }
      logger.debug(user);
      res.sendStatus(200);
    } catch (err) {
      logger.error(err);
      res.sendStatus(503);
    }
  }

  public static async GetUserExperiences(req: Request, res: Response) {
    const id: number = req.body.id as number;
    if (!id) {
      res.sendStatus(405);
      return;
    }

    try {
      const experiences = await Experience.findAll({ where: { userId: id } });
      logger.debug(experiences);
      res.sendStatus(200);
    } catch (error) {
      logger.error(error);
      res.sendStatus(503);
    }
  }

  public static async GetUserEducations(req: Request, res: Response) {
    const id: number = req.body.id as number;
    if (!id) {
      res.sendStatus(405);
      return;
    }

    try {
      const educations = await Education.findAll({ where: { userId: id } });
      logger.debug(educations);
      res.sendStatus(200);
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }

  public static async AddUserExperience(req: Request, res: Response) {
    // TODO: convert token to userId, use ID from req Body for now
    // const token: string = req.body.token;
    // const { userId } = Auth.userInfo(token);
    const userId: number = parseInt(req.body.userId);
    const id: number = req.body.id;

    try {
      const experience = await Experience.create({
        userId: userId,
        title: req.body.title,
        employment_type: req.body.employment_type,
        desc: req.body.desc,
        start_date: req.body.start_date,
        employment_time: req.body.employment_time,
      });
      if (!experience) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }

  public static async UpdateUserExperience(req: Request, res: Response) {
    // TODO: convert token to userId, use ID from req Body for now
    // const token: string = req.body.token;
    // const { userId } = Auth.userInfo(token);
    const userId: number = parseInt(req.body.userId);
    const id: number = parseInt(req.params.id);

    try {
      const experience = await Experience.create({
        userId: id,
        title: req.body.title,
        employment_type: req.body.employment_type,
        desc: req.body.desc,
        start_date: req.body.start_date,
        employment_time: req.body.employment_time,
      });
      if (!experience) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }

  public static async DeleteUserExperience(req: Request, res: Response) {
    // TODO: convert token to userId, use ID from req Body for now
    // const token: string = req.body.token;
    // const { userId } = Auth.userInfo(token);
    const userId: number = parseInt(req.body.userId);
    const id: number = parseInt(req.params.id);
    if (!id) {
      res.sendStatus(405);
      return;
    }

    try {
      const experience = await Experience.findOne({
        where: {
          id: id,
          userId: userId,
        },
      });
      if (!experience) {
        res.sendStatus(404);
        return;
      }
      experience.destroy();
      logger.debug(experience);
      res.sendStatus(200);
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }

  public static async AddUserEducation(req: Request, res: Response) {
    // TODO: convert token to userId, use ID from req Body for now
    // const token: string = req.body.token;
    // const { userId } = Auth.userInfo(token);
    const userId: number = parseInt(req.body.userId);
    const id: number = req.body.id;

    try {
      const education = await Education.create({
        userId: id,
        school: req.body.string,
        fieldOfStudy: req.body.fieldOfStudy,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      });
      if (!education) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }

  public static async UpdateUserEducation(req: Request, res: Response) {
    // TODO: convert token to userId, use ID from req Body for now
    // const token: string = req.body.token;
    // const { userId } = Auth.userInfo(token);
    const userId: number = parseInt(req.body.userId);
    const id: number = parseInt(req.params.id);

    try {
      const education = await Education.create({
        userId: userId,
        school: req.body.string,
        fieldOfStudy: req.body.fieldOfStudy,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      });
      if (!education) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }

  public static async DeleteUserEducation(req: Request, res: Response) {
    // TODO: convert token to userId, use ID from req Body for now
    // const token: string = req.body.token;
    // const { userId } = Auth.userInfo(token);
    const userId: number = parseInt(req.body.userId);
    const id: number = parseInt(req.params.id);
    if (!id) {
      res.sendStatus(400);
      return;
    }

    try {
      const education = await Education.findOne({
        where: {
          id: id,
          userId: userId,
        },
      });
      if (!education) {
        res.sendStatus(404);
        return;
      }
      education.destroy();
      logger.debug(education);
      res.sendStatus(200);
    } catch (error) {
      logger.error(error);
      res.sendStatus(400);
    }
  }
}
