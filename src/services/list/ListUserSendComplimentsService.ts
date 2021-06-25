import { getCustomRepository } from 'typeorm';

import { ComplimentsRepositories } from '../../repositories/ComplimentsRepositories';

interface ListUserSendComplimentsRequest {
  user_id: string;
}

class ListUserSendComplimentsService {
  async execute({ user_id }: ListUserSendComplimentsRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };
