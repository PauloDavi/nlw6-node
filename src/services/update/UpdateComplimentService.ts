import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { ComplimentsRepositories } from '../../repositories/ComplimentsRepositories';

interface UpdateComplimentServiceProps {
  compliment_id: string;
  user_receiver?: string;
  user_sender?: string;
  tag_id?: string;
  message?: string;
}

class UpdateComplimentService {
  async execute({
    compliment_id,
    user_sender,
    ...rest
  }: UpdateComplimentServiceProps) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const compliment = await complimentsRepositories.findOne(compliment_id);

    if (!compliment) {
      throw new CustomException('Compliment not exist', 400);
    }

    if (compliment.user_sender !== user_sender) {
      throw new CustomException('This compliment is not yours', 400);
    }

    const updatedCompliment = await complimentsRepositories.save({
      ...compliment,
      ...rest,
    });

    return updatedCompliment;
  }
}

export { UpdateComplimentService };
