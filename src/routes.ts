import { Router } from 'express';

import { AuthenticationUserController } from './controllers/AuthenticationUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createComplimentController = new CreateComplimentController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationUserController = new AuthenticationUserController();

router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticationUserController.handle);
router.post('/compliments', createComplimentController.handle);

export { router };
