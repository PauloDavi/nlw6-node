import { Request, Response } from 'express';
import * as yup from 'yup';

import { CreateComplimentService } from '../../services/create/CreateComplimentService';

const createComplimentSchema = yup.object().shape({
  message: yup.string().required(),
  tag_id: yup.string().uuid().required(),
  user_receiver: yup.string().uuid().required(),
});

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    await createComplimentSchema.validate(request.body, { abortEarly: false });

    const { user_id } = request;
    const { message, tag_id, user_receiver } = request.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_receiver,
      user_sender: user_id,
    });

    return response.status(201).json(compliment);
  }
}

export { CreateComplimentController };
