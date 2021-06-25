import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../../repositories/UsersRepositories';

interface GetUserServiceProps {
  user_id: string;
}

class GetUserService {
  async execute({ user_id }: GetUserServiceProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne(user_id);

    return classToPlain(user);
  }
}

export { GetUserService };
