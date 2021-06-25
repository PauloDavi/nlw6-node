import { Request, Response } from 'express';
import * as yup from 'yup';

import { DeleteComplimentService } from '../../services/delete/DeleteComplimentService';

const deleteComplimentSchema = yup.object().shape({
  compliment_id: yup.string().uuid().required(),
});

class DeleteComplimentController {
  async handle(request: Request, response: Response) {
    await deleteComplimentSchema.validate(request.params, {
      abortEarly: false,
    });

    const { user_id } = request;
    const { compliment_id } = request.body;

    const deleteComplimentService = new DeleteComplimentService();

    await deleteComplimentService.execute({
      compliment_id,
      user_sender: user_id,
    });

    return response.status(204).send();
  }
}

export { DeleteComplimentController };
