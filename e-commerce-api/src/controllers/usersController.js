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

export function getProducts(req, res, next) {
  const products = [
    {
      id: 1,
      name: 'Shaving gel',
      brand: 'Nivea',
      price: '185'
    },
    {
      id: 2,
      name: 'Dell Laptop',
      brand: 'Dell',
      price: '60000'
    },
    {
      id: 3,
      name: 'VGA to HDMI converter',
      brand: 'XingXang',
      price: '600'
    }
  ];
  res.json({
    data: { products }
  });
}

export function refreshAccessToken(req, res, next) {
  usersModel
    .refreshAccessToken(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}
