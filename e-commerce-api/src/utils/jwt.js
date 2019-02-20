import jwt from 'jsonwebtoken';

export function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_DURATION });
}

export function decodeToken(token) {
  return jwt.decode(token);
}
