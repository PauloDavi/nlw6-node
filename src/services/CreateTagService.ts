import { getCustomRepository } from 'typeorm';

import { TagsRepositories } from '../repositories/TagsRepositories';

interface TagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: TagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagAlreadyExist = await tagsRepositories.findOne({ name });

    if (tagAlreadyExist) {
      throw new Error('Tag already exists.');
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
