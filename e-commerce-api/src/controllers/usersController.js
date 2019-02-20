import * as usersModel from '../models/usersModel';

export function addUser(req, res, next) {
  usersModel
    .addUser(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function login(req, res, next) {
  usersModel
    .login(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function getMyDetails(req, res, next) {
  res.json({ username: 'Hello', email: 'hello@123.com' });
}
