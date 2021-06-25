import { getCustomRepository } from 'typeorm';

import { CustomException } from '../exceptions/CustomException';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface ComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    message,
    tag_id,
    user_receiver,
    user_sender,
  }: ComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_receiver === user_sender) {
      throw new CustomException('User not send to self.', 400);
    }

    const userReceiveExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiveExists) {
      throw new CustomException('User receiver not exists.', 400);
    }

    const compliment = complimentsRepositories.create({
      message,
      tag_id,
      user_receiver,
      user_sender,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
