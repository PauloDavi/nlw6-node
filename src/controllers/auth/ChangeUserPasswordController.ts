import { Request, Response } from 'express';
import * as yup from 'yup';

import { ChangeUserPasswordService } from '../../services/auth/ChangeUserPasswordService';

const changeUserPasswordSchema = yup.object().shape({
  user_id: yup.string().uuid().required(),
  password: yup.string().required(),
  newPassword: yup.string().min(6).required(),
});

class ChangeUserPasswordController {
  async handle(request: Request, response: Response) {
    await changeUserPasswordSchema.validate(request.body, {
      abortEarly: false,
    });

    const { user_id, password, newPassword } = request.body;

    const changeUserPasswordService = new ChangeUserPasswordService();

    const user = await changeUserPasswordService.execute({
      user_id,
      password,
      newPassword,
    });

    return response.json(user);
  }
}

export { ChangeUserPasswordController };
