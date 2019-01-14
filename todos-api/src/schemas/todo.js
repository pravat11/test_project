import Joi from 'joi';

import validator from '../utils/validator';

const addTodoSchema = Joi.object().keys({
  text: Joi.string()
    .max(10)
    .required()
});

export const validateAddTodo = (req, res, next) => {
  validator(req.body, addTodoSchema)
    .then(() => next())
    .catch(err => next(err));
};
