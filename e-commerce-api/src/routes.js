import { Router } from 'express';

import authenticate from './middlewares/authenticate';
import { validateLogin, validateNewUser } from './schemas/user';
import * as usersController from './controllers/usersController';

const routes = Router();

routes.get('/', (req, res, next) => {
  res.send({
    name: 'Todo API',
    version: '1.0'
  });
});

routes.post('/user/create', validateNewUser, usersController.addUser);

routes.post('/user/login', validateLogin, usersController.login);

routes.get('/me', authenticate, usersController.getMyDetails);

export default routes;
