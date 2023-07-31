import { Router } from "express";
import { createTokenController } from "../controllers/login.controller";

const registerRoutes = Router();

registerRoutes.post("/", createTokenController);

export { registerRoutes };
