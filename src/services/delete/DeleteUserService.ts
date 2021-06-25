import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../../repositories/UsersRepositories';

interface DeleteUserRequest {
  user_id: string;
}

class DeleteUserService {
  async execute({ user_id }: DeleteUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    await usersRepositories.delete(user_id);
  }
}

export { DeleteUserService };
