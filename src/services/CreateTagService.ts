import { getCustomRepository } from 'typeorm';

import { CustomException } from '../exceptions/CustomException';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface TagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: TagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagAlreadyExist = await tagsRepositories.findOne({ name });

    if (tagAlreadyExist) {
      throw new CustomException('Tag already exists.', 400);
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
