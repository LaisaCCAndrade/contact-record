import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities/contacts.entities";
import { AppError } from "../errors/AppError";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contactId = req.params.id;
  const userId = res.locals.userId;

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Contato não encontrado", 404);
  }

  if (!contact?.user.id === userId) {
    throw new AppError(
      "Usuario não possui permissão para deletar este contato",
      403
    );
  }

  return next;
};

export { ensureIsOwnerMiddleware };
