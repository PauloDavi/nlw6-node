import { Request, Response } from 'express';
import * as yup from 'yup';

import { CreateUserService } from '../../services/create/CreateUserService';

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  admin: yup.boolean().notRequired(),
  password: yup.string().min(6).required(),
});

class CreateUserController {
  async handle(request: Request, response: Response) {
    await createUserSchema.validate(request.body, { abortEarly: false });

    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
