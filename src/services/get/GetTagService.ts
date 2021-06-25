import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { TagsRepositories } from '../../repositories/TagsRepositories';

interface GetTagServiceProps {
  tag_id: string;
}

class GetTagService {
  async execute({ tag_id }: GetTagServiceProps) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tag = await tagsRepositories.findOne(tag_id);

    return classToPlain(tag);
  }
}

export { GetTagService };
