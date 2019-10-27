import { Router } from 'express';
import multer from 'multer';

import userController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import AuthMiddleWare from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);

routes.put('/users', AuthMiddleWare, userController.update);

routes.post('/sessions', SessionController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AuthMiddleWare, AppointmentController.store);

routes.get('/appointments', AuthMiddleWare, AppointmentController.index);

export default routes;
