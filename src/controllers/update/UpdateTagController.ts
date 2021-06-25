import { Request, Response } from 'express';
import * as yup from 'yup';

import { UpdateTagService } from '../../services/update/UpdateTagService';

const updateTagSchema = yup.object().shape({
  tag_id: yup.string().uuid().required(),
  name: yup.string().notRequired(),
});

class UpdateTagController {
  async handle(request: Request, response: Response) {
    await updateTagSchema.validate(request.params, {
      abortEarly: false,
    });

    const updateTagService = new UpdateTagService();

    const { name, tag_id } = request.body;

    const tag = await updateTagService.execute({ name, tag_id });

    return response.json(tag);
  }
}

export { UpdateTagController };
