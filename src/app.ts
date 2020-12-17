import express from "express";
import logger from "./util/logger";
import AppRotuer from "./router";
import cookieParser from "cookie-parser";
import { PORT } from "./util/config";
import sequelize from "./util/database";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded());
app.use(cookieParser());

// Initialize connection to DB server
sequelize
  .authenticate()
  .then(() => {
    logger.info(`Successfully connected to DB server`);
  })
  .catch((err) => {
    logger.error(`Couldn't connect to MySQL server ${err}`);
  });

const expressRoutes = new AppRotuer(app);
expressRoutes.init();

app.listen(PORT, () => {
  logger.info(`Express server app listening on port ${PORT}!`);
});
