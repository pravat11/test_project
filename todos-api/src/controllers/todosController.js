import * as todosModel from '../models/todosModel';

export function addTodo(req, res, next) {
  todosModel
    .addTodo(req.body.text)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function getTodos(req, res, next) {
  todosModel
    .getTodos()
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function getTodo(req, res, next) {
  todosModel
    .getTodoById(req.params.todoId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function updateTodo(req, res, next) {
  const { todoId } = req.params;

  todosModel
    .updateTodo(todoId, req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function deleteTodo(req, res, next) {
  todosModel
    .deleteTodo(req.params.todoId)
    .then(data => res.json(data))
    .catch(err => next(err));
}
