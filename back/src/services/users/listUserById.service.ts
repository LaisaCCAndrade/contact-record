import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

const listUserByIdService = async (
  userId: string
): Promise<TUserResponse | null> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return null;
  }

  const userResponse = userSchemaResponse.parse(user);
  return userResponse;
};

export { listUserByIdService };
