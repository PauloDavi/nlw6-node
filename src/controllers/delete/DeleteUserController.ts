import { Request, Response } from 'express';

import { DeleteUserService } from '../../services/delete/DeleteUserService';

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.execute({ user_id });

    return response.status(204).send();
  }
}

export { DeleteUserController };
