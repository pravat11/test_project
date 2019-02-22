import bcrypt from 'bcrypt';

import mongo from '../mongo';
import logger from '../utils/logger';
import NotFoundError from '../utils/NotFoundError';
import BadRequestError from '../utils/BadRequestError';
import { generateAccessToken, generateRefreshToken, decodeToken } from '../utils/jwt';

const sessionSchema = new mongo.Schema({
  refreshToken: String,
  sessionId: mongo.Schema.Types.ObjectId,
  isActive: { type: Boolean, default: true },
  sessionCreatedAt: { type: Date, default: Date.now }
});

const userSchema = new mongo.Schema({
  username: String,
  password: String,
  email: String,
  sessions: [sessionSchema]
});

const Users = mongo.model('users', userSchema);

export async function addUser(payload) {
  const { username, email, password } = payload;
  const user = await Users.findOne({ username });

  if (user) {
    throw new BadRequestError(`Username '${username}' is already taken.`);
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, process.env.PASSWORD_SALT);
    const user = new Users({ username, email, password: hashedPassword, sessions: [] });
    await user.save();

    return {
      message: `User created for username ${username} with email ${email}`
    };
  } catch (err) {
    logger.debug('Cannot add a new user:', err);
  }
}

export async function login(payload) {
  const { username, password } = payload;

  const user = await Users.findOne({ username });

  if (!user) {
    throw new NotFoundError(`Username '${username} doesn't exist`);
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    throw new BadRequestError('Incorrect password');
  }

  const refreshToken = generateRefreshToken({ username, email: user.email });

  await Users.updateOne({ username }, { sessions: [{ refreshToken }] });

  const updatedUser = await Users.findOne({ username });

  const sessionId = updatedUser.sessions[0] ? updatedUser.sessions[0]._id : null;

  const accessToken = generateAccessToken({ username, email: user.email }, sessionId);

  return {
    data: {
      accessToken,
      refreshToken,
      email: user.email,
      username: user.username
    },
    message: 'Login successful'
  };
}

export async function refreshAccessToken(payload) {
  const { username, refreshToken } = payload;

  const user = await Users.findOne({ username });

  const userSessions = user.sessions;

  const isRefreshTokenValid =
    Array.isArray(userSessions) && userSessions[0] && userSessions[0].refreshToken === refreshToken ? true : false;

  if (!isRefreshTokenValid) {
    throw new BadRequestError(`Invalid refresh token`);
  }

  const newAccessToken = generateAccessToken({ username, email: user.email }, userSessions[0]._id);

  return {
    data: {
      accessToken: newAccessToken
    },
    message: 'Token refreshed successfully'
  };
}
