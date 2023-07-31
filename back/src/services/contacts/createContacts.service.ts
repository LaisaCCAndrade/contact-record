import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactRequest } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/constacts.schema";

const createContactsService = async (
  data: TContactRequest,
  userId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactsService };
