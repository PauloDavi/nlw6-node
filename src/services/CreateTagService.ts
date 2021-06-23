import { getCustomRepository } from 'typeorm';

import { CustomExceptions } from '../exceptions/CustomExceptions';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface TagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: TagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagAlreadyExist = await tagsRepositories.findOne({ name });

    if (tagAlreadyExist) {
      throw new CustomExceptions('Tag already exists.', 400);
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
