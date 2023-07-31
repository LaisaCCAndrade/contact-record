import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { listUserByIdService } from "../services/users/listUserById.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

const listUserByIdController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await listUserByIdService(userId);

  return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const response = await updateUserService(req.params.id, req.body);

  return res.status(200).json(response);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);

  return res.status(204).json({});
};

export {
  createUserController,
  listUserController,
  listUserByIdController,
  updateUserController,
  deleteUserController,
};
