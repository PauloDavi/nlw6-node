import { Request, Response } from 'express';
import * as yup from 'yup';

import { GetTagService } from '../../services/get/GetTagService';

const getTagSchema = yup.object().shape({
  tag_id: yup.string().uuid().required(),
});

class GetTagController {
  async handle(request: Request, response: Response) {
    await getTagSchema.validate(request.params, { abortEarly: false });

    const { tag_id } = request.body;

    const getTagService = new GetTagService();

    const tag = await getTagService.execute({ tag_id });

    return response.json(tag);
  }
}

export { GetTagController };
