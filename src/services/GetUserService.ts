import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../repositories/UsersRepositories';

interface GetUserServiceProps {
  user_id: string;
}

class GetUserService {
  async execute({ user_id }: GetUserServiceProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.findOne(user_id);

    return classToPlain(users);
  }
}

export { GetUserService };
