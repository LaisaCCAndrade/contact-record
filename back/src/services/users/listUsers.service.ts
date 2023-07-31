import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { userSchemaResponse } from "../../schemas/users.schema";

const listUsersService = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersResponse = users.map((user) => userSchemaResponse.parse(user));

  return usersResponse;
};

export { listUsersService };
