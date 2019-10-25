import { Router } from 'express';

import userController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleWare from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', userController.store);
routes.put('/users', AuthMiddleWare, userController.update);

routes.post('/sessions', SessionController.store);

export default routes;
