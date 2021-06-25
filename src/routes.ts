import { Router } from 'express';

import { AuthenticationUserController } from './controllers/AuthenticationUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createComplimentController = new CreateComplimentController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationUserController = new AuthenticationUserController();
const listTagsController = new ListTagsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUsersController = new ListUsersController();

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
);
router.post('/users', createUserController.handle);
router.post('/login', authenticationUserController.handle);
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle,
);

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

export { router };
