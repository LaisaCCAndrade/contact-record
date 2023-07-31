import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import {
  createUserController,
  deleteUserController,
  listUserByIdController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";
import { userSchemaRequest } from "../schemas/users.schema";

export const userRoutes = Router();
userRoutes.post(
  "/",
  ensureDataIsValid(userSchemaRequest),
  createUserController
);

userRoutes.get("/", listUserController);
userRoutes.get("/profile/:id", listUserByIdController);

userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);
