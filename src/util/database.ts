import { MYSQL_URI } from "./config";
import { Sequelize } from "sequelize";

export default new Sequelize(MYSQL_URI);