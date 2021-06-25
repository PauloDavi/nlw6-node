import { hash } from 'bcryptjs';
import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ email, name, admin = false, password }: UserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new CustomException('User already exists.', 400);
    }

    const passwordHash = await hash(password, 10);

    const user = usersRepositories.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepositories.save(user);

    return classToPlain(user);
  }
}

export { CreateUserService };
