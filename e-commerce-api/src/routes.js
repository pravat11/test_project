import { Router } from 'express';

import * as usersController from './controllers/usersController';

const routes = Router();

routes.get('/', (req, res, next) => {
  res.send({
    name: 'Todo API',
    version: '1.0'
  });
});

routes.get('/user', usersController.addUser);

export default routes;
