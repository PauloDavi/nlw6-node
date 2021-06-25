import { Router } from 'express';

import { AuthenticationUserController } from './controllers/auth/AuthenticationUserController';
import { ChangeUserPasswordController } from './controllers/auth/ChangeUserPasswordController';
import { CreateComplimentController } from './controllers/create/CreateComplimentController';
import { CreateTagController } from './controllers/create/CreateTagController';
import { CreateUserController } from './controllers/create/CreateUserController';
import { DeleteComplimentController } from './controllers/delete/DeleteComplimentController';
import { DeleteTagController } from './controllers/delete/DeleteTagController';
import { DeleteUserController } from './controllers/delete/DeleteUserController';
import { GetComplimentController } from './controllers/get/GetComplimentController';
import { GetTagController } from './controllers/get/GetTagController';
import { GetUserController } from './controllers/get/GetUserController';
import { ListTagsController } from './controllers/list/ListTagsController';
import { ListUserReceiveComplimentsController } from './controllers/list/ListUserReceiveComplimentsController';
import { ListUsersController } from './controllers/list/ListUsersController';
import { ListUserSendComplimentsController } from './controllers/list/ListUserSendComplimentsController';
import { UpdateComplimentController } from './controllers/update/UpdateComplimentController';
import { UpdateTagController } from './controllers/update/UpdateTagController';
import { UpdateUserController } from './controllers/update/UpdateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const updateComplimentController = new UpdateComplimentController();
const updateTagController = new UpdateTagController();
const updateUserController = new UpdateUserController();
const deleteComplimentController = new DeleteComplimentController();
const deleteTagController = new DeleteTagController();
const deleteUserController = new DeleteUserController();
const getTagController = new GetTagController();
const getComplimentController = new GetComplimentController();
const createComplimentController = new CreateComplimentController();
const changeUserPasswordController = new ChangeUserPasswordController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationUserController = new AuthenticationUserController();
const listTagsController = new ListTagsController();
const getUserController = new GetUserController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUsersController = new ListUsersController();

router.get('/users/:tag_id', getTagController.handle);
router.get('/users/:compliment_id', getComplimentController.handle);
router.get('/users/:user_id', getUserController.handle);

router.get(
  '/user/compliments/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle,
);
router.get(
  '/user/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle,
);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', listUsersController.handle);

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
);
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle,
);
router.post('/users', createUserController.handle);
router.post('/login', authenticationUserController.handle);

router.put('/change-password', changeUserPasswordController.handle);
router.put('/compliments', updateComplimentController.handle);
router.put('/tags', updateTagController.handle);
router.put('/users', updateUserController.handle);

router.delete('/compliments', deleteComplimentController.handle);
router.delete('/tags', deleteTagController.handle);
router.delete('/users', deleteUserController.handle);

export { router };
