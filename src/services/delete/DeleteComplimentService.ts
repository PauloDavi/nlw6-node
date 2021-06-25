import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { ComplimentsRepositories } from '../../repositories/ComplimentsRepositories';

interface DeleteComplimentRequest {
  compliment_id: string;
  user_sender: string;
}

class DeleteComplimentService {
  async execute({ compliment_id, user_sender }: DeleteComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const complimentExist = await complimentsRepositories.findOne(
      compliment_id,
    );

    if (!complimentExist) {
      throw new CustomException('Compliment not exist', 400);
    }

    if (complimentExist.user_sender !== user_sender) {
      throw new CustomException('This compliment is not yours', 400);
    }

    await complimentsRepositories.delete(compliment_id);
  }
}

export { DeleteComplimentService };
