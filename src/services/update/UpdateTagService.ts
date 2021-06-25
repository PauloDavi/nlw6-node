import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { TagsRepositories } from '../../repositories/TagsRepositories';

interface UpdateTagServiceProps {
  tag_id: string;
  name?: string;
}

class UpdateTagService {
  async execute({ tag_id, ...rest }: UpdateTagServiceProps) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tag = await tagsRepositories.findOne(tag_id);

    if (!tag) {
      throw new CustomException('Tag not exist', 400);
    }

    const updatedTag = await tagsRepositories.save({
      ...tag,
      ...rest,
    });

    return classToPlain(updatedTag);
  }
}

export { UpdateTagService };
