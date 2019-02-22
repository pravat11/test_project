import jwt from 'jsonwebtoken';

export function generateAccessToken(user, sessionId) {
  const payload = Object.assign({}, user, { sessionId });

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_DURATION
  });
}

export function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_DURATION
  });
}

export function decodeToken(token) {
  return jwt.decode(token);
}
