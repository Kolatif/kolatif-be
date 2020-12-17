import dotenv from "dotenv";
import fs from "fs";
import logger from "./logger";
import { OAuth2Client } from "google-auth-library";

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
} else {
  logger.error("Missing .env, use .env.sample as template");
  process.exit(1);
}

export const PORT = process.env.PORT ? process.env.PORT : 8000;

if (!(process.env.CLIENT_ID && process.env.CLIENT_SECRET)) {
  logger.error("Missing OAUTH2 configuration (CLIENT_ID, CLIENT_SECRET)");
  process.exit(1);
}

export const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

if (!process.env.MYSQL_URI) {
  logger.error("Missing MySQL configuration (MYSQL_URI)");
  process.exit(1);
}

export const MYSQL_URI = process.env.MYSQL_URI;
