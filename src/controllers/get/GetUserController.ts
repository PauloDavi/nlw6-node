import { Request, Response } from 'express';
import * as yup from 'yup';

import { GetUserService } from '../../services/get/GetUserService';

const getUserSchema = yup.object().shape({
  user_id: yup.string().uuid().required(),
});

class GetUserController {
  async handle(request: Request, response: Response) {
    await getUserSchema.validate(request.params, { abortEarly: false });

    const { user_id } = request.body;

    const getUserService = new GetUserService();

    const user = await getUserService.execute({ user_id });

    return response.json(user);
  }
}

export { GetUserController };
