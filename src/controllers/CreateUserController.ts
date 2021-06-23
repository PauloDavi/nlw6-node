import { Request, Response } from 'express';
import * as yup from 'yup';

import { CreateUserService } from '../services/CreateUserService';

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  admin: yup.boolean().notRequired(),
});

class CreateUserController {
  async handle(request: Request, response: Response) {
    await createUserSchema.validate(request.body, { abortEarly: false });

    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
