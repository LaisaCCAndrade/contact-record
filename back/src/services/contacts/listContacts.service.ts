import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContact } from "../../interfaces/contacts.interface";

export const listContactsService = async (
  userId: string
): Promise<TContact[]> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  return await contactRepository.find({
    where: {
      user,
    },
  });
};
