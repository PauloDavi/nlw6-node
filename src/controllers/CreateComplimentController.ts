import { Request, Response } from 'express';
import * as yup from 'yup';

import { CreateComplimentService } from '../services/CreateComplimentService';

const createComplimentSchema = yup.object().shape({
  message: yup.string().required(),
  tag_id: yup.string().required(),
  user_receive: yup.string().required(),
  user_sender: yup.string().required(),
});

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    await createComplimentSchema.validate(request.body, { abortEarly: false });

    const { message, tag_id, user_receive, user_sender } = request.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_receive,
      user_sender,
    });

    return response.status(201).json(compliment);
  }
}

export { CreateComplimentController };
