import { Request, Response } from 'express';
import * as yup from 'yup';

import { CreateTagService } from '../services/CreateTagService';

const createTagSchema = yup.object().shape({
  name: yup.string().required(),
});

class CreateTagController {
  async handle(request: Request, response: Response) {
    await createTagSchema.validate(request.body, { abortEarly: false });

    const { name } = request.body;

    const createTagService = new CreateTagService();

    const tag = await createTagService.execute({ name });

    return response.status(201).json(tag);
  }
}

export { CreateTagController };
