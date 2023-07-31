import { NextFunction, Request, Response } from "express";
import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import { User } from "../entities/user.entitie";

const userRepository = AppDataSource.getRepository(User);

const verifyLoginCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const user = await userRepository.findOne({
    where: { email },
  });

  if (!user || !(await compare(password, user.password))) {
    throw new AppError("Invalid credentials", 403);
  }

  res.locals.user = user;

  return next();
};

export { verifyLoginCredentials };
