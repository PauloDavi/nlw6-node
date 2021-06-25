import { Request, Response } from 'express';
import * as yup from 'yup';

import { GetComplimentService } from '../../services/get/GetComplimentService';

const getComplimentSchema = yup.object().shape({
  compliment_id: yup.string().uuid().required(),
});

class GetComplimentController {
  async handle(request: Request, response: Response) {
    await getComplimentSchema.validate(request.params, { abortEarly: false });

    const { compliment_id } = request.body;

    const getComplimentService = new GetComplimentService();

    const compliment = await getComplimentService.execute({ compliment_id });

    return response.json(compliment);
  }
}

export { GetComplimentController };
