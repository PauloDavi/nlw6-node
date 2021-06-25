import { getCustomRepository } from 'typeorm';

import { ComplimentsRepositories } from '../../repositories/ComplimentsRepositories';

interface GetComplimentServiceProps {
  compliment_id: string;
}

class GetComplimentService {
  async execute({ compliment_id }: GetComplimentServiceProps) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const compliment = await complimentsRepositories.findOne(compliment_id);

    return compliment;
  }
}

export { GetComplimentService };
