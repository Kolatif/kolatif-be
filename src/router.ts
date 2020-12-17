import { Express, NextFunction, Request, Response, Router } from "express";
import AuthController from "./controller/auth.controller";
import HomeController from "./controller/home.controller";
import UserController from "./controller/user.controller";

export default class AppRouter {
  public router: Router;
  public authRouter: Router;
  public userRouter: Router;
  private app: Express;

  constructor(app: Express) {
    // is this even good. lmao
    this.router = Router();
    this.authRouter = Router();
    this.userRouter = Router();
    // this.sessionRouter = Router();
    this.app = app;
  }

  public init(): void {
    // General
    this.router.get("/", HomeController.getDefault);
    this.app.use("/api", this.router);

    // Auth
    this.authRouter.post("/oauth2callback", AuthController.Oauth2Callback);
    this.authRouter.post("/login", AuthController.Login);
    this.authRouter.post("/signup", AuthController.Signup);
    this.authRouter.get("/logout", AuthController.Logout);
    this.app.use("/api/auth", this.authRouter);

    // User Public
    this.userRouter.get("/", UserController.GetAllUsers);
    this.userRouter.get("/:id", UserController.GetUserByID);
    this.userRouter.get("/:id/education", UserController.GetUserEducations);
    this.userRouter.get("/:id/experience", UserController.GetUserExperiences);

    // Current User session
    this.userRouter.post("/education", UserController.AddUserEducation);
    this.userRouter.patch("/education/:id", UserController.UpdateUserEducation);
    this.userRouter.delete(
      "/education/:id",
      UserController.DeleteUserEducation
    );
    this.userRouter.post("/experience", UserController.AddUserExperience);
    this.userRouter.patch(
      "/experience/:id",
      UserController.UpdateUserExperience
    );
    this.userRouter.delete(
      "/experience/:id",
      UserController.DeleteUserExperience
    );

    this.app.use("/api/user", this.userRouter);

    // Meet Session
    // TODO: !!!
  }
}
