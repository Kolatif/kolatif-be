import sql from "../util/database";
// import logger from "../util/logger";
import { DataTypes, Model } from "sequelize";
import User from "./user.model";

export enum EmploymentType {
  PartTime,
  FullTime,
}

export default class Experience extends Model {}

Experience.init(
  {
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    employment_type: DataTypes.SMALLINT,
    desc: DataTypes.STRING,
    start_date: DataTypes.DATE,
    employment_time: DataTypes.SMALLINT,
  },
  {
    sequelize: sql,
    modelName: "experience",
  }
);

Experience.belongsTo(User);
