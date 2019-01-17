import Joi from 'joi';

import validator from '../utils/validator';

const addTodoSchema = Joi.object().keys({
  text: Joi.string()
    .max(100)
    .required()
});

const updateTodoSchema = Joi.object()
  .keys({
    text: Joi.string().max(100),
    isCompleted: Joi.boolean()
  })
  .or('text', 'isCompleted');

export const validateAddTodo = (req, res, next) => {
  validator(req.body, addTodoSchema)
    .then(() => next())
    .catch(err => next(err));
};

export const validateUpdateTodo = (req, res, next) => {
  validator(req.body, updateTodoSchema)
    .then(() => next())
    .catch(err => next(err));
};
