import { Router } from 'express';

import * as usersController from './controllers/usersController';
import authenticate, { validateRefreshToken } from './middlewares/authenticate';
import { validateLogin, validateNewUser, validateRefreshTokenRequest } from './schemas/user';

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

routes.post('/token/refresh', validateRefreshTokenRequest, validateRefreshToken, usersController.refreshAccessToken);

export default routes;
