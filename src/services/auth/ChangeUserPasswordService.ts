import { compare, hash } from 'bcryptjs';
import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface ChangeUserPasswordServiceRequest {
  user_id: string;
  password: string;
  newPassword: string;
}

class ChangeUserPasswordService {
  async execute({
    user_id,
    password,
    newPassword,
  }: ChangeUserPasswordServiceRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne(user_id);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new CustomException('Password incorrect', 400);
    }

    const passwordHash = await hash(newPassword, 10);

    await usersRepositories.save({
      ...user,
      password: passwordHash,
    });

    return classToPlain(user);
  }
}

export { ChangeUserPasswordService };
