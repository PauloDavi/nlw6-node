import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = getCustomRepository(CreateUserService);

    const user = createUserService.execute({
      name,
      email,
      admin,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
