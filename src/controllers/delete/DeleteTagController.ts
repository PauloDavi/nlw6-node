import { Request, Response } from 'express';
import * as yup from 'yup';

import { DeleteTagService } from '../../services/delete/DeleteTagService';

const deleteTagSchema = yup.object().shape({
  tag_id: yup.string().uuid().required(),
});

class DeleteTagController {
  async handle(request: Request, response: Response) {
    await deleteTagSchema.validate(request.params, { abortEarly: false });

    const { tag_id } = request.body;

    const deleteTagService = new DeleteTagService();

    await deleteTagService.execute({ tag_id });

    return response.status(204).send();
  }
}

export { DeleteTagController };
