import Joi from 'joi';

import validator from '../utils/validator';

const newUserSchema = Joi.object().keys({
  username: Joi.string()
    .max(50)
    .required(),
  password: Joi.string()
    .max(50)
    .required(),
  email: Joi.string()
    .max(50)
    .required()
});

const loginSchema = Joi.object().keys({
  username: Joi.string()
    .max(50)
    .required(),
  password: Joi.string()
    .max(50)
    .required()
});

const refreshTokenRequestSchema = Joi.object().keys({
  username: Joi.string()
    .max(50)
    .required(),
  refreshToken: Joi.string().required()
});

export const validateNewUser = (req, res, next) => {
  validator(req.body, newUserSchema)
    .then(() => next())
    .catch(err => next(err));
};

export const validateLogin = (req, res, next) => {
  validator(req.body, loginSchema)
    .then(() => next())
    .catch(err => next(err));
};

export const validateRefreshTokenRequest = (req, res, next) => {
  validator(req.body, refreshTokenRequestSchema)
    .then(() => next())
    .catch(err => next(err));
};
