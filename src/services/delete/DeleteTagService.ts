import { getCustomRepository } from 'typeorm';

import { CustomException } from '../../exceptions/CustomException';
import { TagsRepositories } from '../../repositories/TagsRepositories';

interface DeleteTagRequest {
  tag_id: string;
}

class DeleteTagService {
  async execute({ tag_id }: DeleteTagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagExist = tagsRepositories.findOne(tag_id);

    if (!tagExist) {
      throw new CustomException('Tag not exist', 400);
    }

    await tagsRepositories.delete(tag_id);
  }
}

export { DeleteTagService };
