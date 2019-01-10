import * as todosModel from '../models/todosModel';

export function addTodo(req, res, next) {
  todosModel
    .addTodo(req.body.text)
    .then(data => res.json(data))
    .catch(err => {
      throw err;
    });
}

export function getTodos(req, res, next) {
  todosModel
    .getTodos()
    .then(data => res.json(data))
    .catch(err => {
      throw err;
    });
}

export function getTodo(req, res, next) {
  todosModel
    .getTodoById(req.params.todoId)
    .then(data => res.json(data))
    .catch(err => {
      throw err;
    });
}

export function updateTodo(req, res, next) {
  const { todoId } = req.params;
  const { text } = req.body;

  todosModel
    .updateTodo(todoId, text)
    .then(data => res.json(data))
    .catch(err => {
      throw err;
    });
}

export function deleteTodo(req, res, next) {
  todosModel
    .deleteTodo(req.params.todoId)
    .then(data => res.json(data))
    .catch(err => {
      throw err;
    });
}