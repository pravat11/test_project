import * as usersModel from '../models/usersModel';

export function addUser(req, res, next) {
  usersModel
    .addUser(req.query.name)
    .then(data => res.json(data))
    .catch(err => next(err));
}
