import { getCustomRepository } from 'typeorm';

import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

interface ListUserReceiveComplimentsRequest {
  user_id: string;
}

class ListUserReceiveComplimentsService {
  async execute({ user_id }: ListUserReceiveComplimentsRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceive', 'tag'],
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
