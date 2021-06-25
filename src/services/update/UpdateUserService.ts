import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../../repositories/UsersRepositories';

interface UpdateUserServiceProps {
  user_id: string;
  name?: string;
  email?: string;
}

class UpdateUserService {
  async execute({ user_id, ...rest }: UpdateUserServiceProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne(user_id);

    const updatedUser = await usersRepositories.save({
      ...user,
      ...rest,
    });

    return classToPlain(updatedUser);
  }
}

export { UpdateUserService };
