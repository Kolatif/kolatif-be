import sql from "../util/database";
// import logger from "../util/logger";
import { DataTypes, Model } from "sequelize";
import User from "./user.model";

export default class Education extends Model {}

Education.init(
  {
    school: DataTypes.STRING,
    degree: DataTypes.STRING,
    fieldOfStudy: DataTypes.SMALLINT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  },
  {
    sequelize: sql,
    modelName: "education",
  }
);

Education.belongsTo(User);
