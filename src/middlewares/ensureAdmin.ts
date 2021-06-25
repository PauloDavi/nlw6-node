import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { CustomException } from '../exceptions/CustomException';
import { UsersRepositories } from '../repositories/UsersRepositories';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  if (!admin) {
    throw new CustomException('User is unauthorized', 401);
  }

  return next();
}

export { ensureAdmin };
