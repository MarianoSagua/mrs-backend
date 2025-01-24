import "dotenv/config";
import { get } from "env-var";

export const envs = {
  port: get("PORT").required().asPortNumber(),
  app_url: get("APP_URL").required().asString(),
  jwt_secret_key: get("JWT_SECRET_KEY").required().asString(),
};
