import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";

export const updateUserService = async (id: any, payload: any) => {
  const userRepository = AppDataSource.getRepository(User);
  const update = await userRepository.update(id, { ...payload });
  const userUpdated = await userRepository.findOneBy({ id });
  return userUpdated;
};
