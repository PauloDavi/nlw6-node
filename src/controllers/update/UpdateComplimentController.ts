import { Request, Response } from 'express';
import * as yup from 'yup';

import { UpdateComplimentService } from '../../services/update/UpdateComplimentService';

const updateComplimentSchema = yup.object().shape({
  compliment_id: yup.string().uuid().required(),
  message: yup.string().notRequired(),
  tag_id: yup.string().uuid().notRequired(),
  user_receiver: yup.string().uuid().notRequired(),
});

class UpdateComplimentController {
  async handle(request: Request, response: Response) {
    await updateComplimentSchema.validate(request.params, {
      abortEarly: false,
    });

    const updateComplimentService = new UpdateComplimentService();

    const { user_id } = request;
    const { compliment_id, message, tag_id, user_receiver } = request.body;

    const compliment = await updateComplimentService.execute({
      compliment_id,
      message,
      tag_id,
      user_receiver,
      user_sender: user_id,
    });

    return response.json(compliment);
  }
}

export { UpdateComplimentController };
