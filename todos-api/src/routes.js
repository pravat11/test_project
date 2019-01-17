import { Router } from 'express';

import { validateAddTodo, validateUpdateTodo } from './schemas/todo';
import * as todosController from './controllers/todosController';
const routes = Router();

routes.get('/', (req, res, next) => {
  res.send({
    name: 'Todo API',
    version: '1.0'
  });
});

routes.get('/todos', todosController.getTodos);

routes.get('/todos/:todoId', todosController.getTodo);

routes.delete('/todos/:todoId', todosController.deleteTodo);

routes.post('/todo', validateAddTodo, todosController.addTodo);

routes.put('/todo/:todoId', validateUpdateTodo, todosController.updateTodo);

export default routes;
