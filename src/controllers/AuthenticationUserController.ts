import { Request, Response } from 'express';
import * as yup from 'yup';

import { AuthenticationUserService } from '../services/AuthenticationUserService';

const authenticationUserSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

class AuthenticationUserController {
  async handle(request: Request, response: Response) {
    await authenticationUserSchema.validate(request.body, {
      abortEarly: false,
    });

    const { email, password } = request.body;

    const authenticationUserService = new AuthenticationUserService();

    const user = await authenticationUserService.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

export { AuthenticationUserController };
