import dotenv from 'dotenv';
import expressJwt from 'express-jwt';

dotenv.config();

const authenticate = expressJwt({
  secret: process.env.ACCESS_TOKEN_SECRET,
  getToken: getTokenFromHeader
});

export const validateRefreshToken = expressJwt({
  secret: process.env.REFRESH_TOKEN_SECRET,
  getToken: getRefreshTokenFromBody
});

function getRefreshTokenFromBody(req) {
  return req.body.refreshToken || null;
}

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

export default authenticate;
