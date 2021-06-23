import { getCustomRepository } from 'typeorm';

import { CustomExceptions } from '../exceptions/CustomExceptions';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ email, name, admin }: UserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new CustomExceptions('User already exists.', 400);
    }

    const user = usersRepositories.create({
      name,
      email,
      admin,
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
