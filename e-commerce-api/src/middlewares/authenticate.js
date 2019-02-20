import dotenv from 'dotenv';
import expressJwt from 'express-jwt';

dotenv.config();

const authenticate = expressJwt({
  secret: process.env.ACCESS_TOKEN_SECRET,
  getToken: getTokenFromHeader,
  isRevoked: isRevokedCallback
});

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

function isRevokedCallback(req, payload, done) {
  done(null, true);
}

export default authenticate;
