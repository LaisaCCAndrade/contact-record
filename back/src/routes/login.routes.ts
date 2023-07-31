import { Router } from "express";
import { createTokenController } from "../controllers/login.controller";
import { verifyLoginCredentials } from "../middlewares/verifyLoginCredentials.middleware";

const loginRoutes = Router();

loginRoutes.post("/", verifyLoginCredentials, createTokenController);

export { loginRoutes };
