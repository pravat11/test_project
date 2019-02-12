import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {
  res.send({
    name: 'Todo API',
    version: '1.0'
  });
});

export default routes;
