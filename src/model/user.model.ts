import sql from "../util/database";
import logger from "../util/logger";
import { DataTypes, Model } from "sequelize";

export enum UserType {
  Mentee = 0,
  Mentor = 1,
}

export default class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    desc: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pwd_hash: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: sql,
    modelName: "user",
  }
);

User.hasMany(Education);
User.hasMany(Experience);
