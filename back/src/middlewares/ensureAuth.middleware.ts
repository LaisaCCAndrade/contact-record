import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/AppError";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const splitedToken = token.split(" ")[1];

  jwt.verify(
    splitedToken,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error) {
        return next(new AppError("Invalid token", 403));
      }

      res.locals.userId = decoded.sub;
      return next();
    }
  );
};

export { ensureAuthMiddleware };
