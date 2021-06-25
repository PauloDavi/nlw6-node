import { Request, Response } from 'express';
import * as yup from 'yup';

import { UpdateUserService } from '../../services/update/UpdateUserService';

const updateUserSchema = yup.object().shape({
  user_id: yup.string().uuid().required(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
});

class UpdateUserController {
  async handle(request: Request, response: Response) {
    await updateUserSchema.validate(request.params, {
      abortEarly: false,
    });

    const updateUserService = new UpdateUserService();

    const { name, user_id, email } = request.body;

    const user = await updateUserService.execute({ name, user_id, email });

    return response.json(user);
  }
}

export { UpdateUserController };
