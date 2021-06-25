import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface AuthenticationUserRequest {
  email: string;
  password: string;
}

class AuthenticationUserService {
  async execute({ email, password }: AuthenticationUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new CustomException('Email/Password incorrect', 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new CustomException('Email/Password incorrect', 400);
    }

    const token = sign({ email: user.email }, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  }
}

export { AuthenticationUserService };
