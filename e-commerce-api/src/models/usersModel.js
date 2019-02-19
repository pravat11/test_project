import bcrypt from 'bcrypt';

import mongo from '../mongo';
import logger from '../utils/logger';
import BadRequestError from '../utils/BadRequestError';
import { PASSWORD_SALT_ROUNDS } from '../constants/secrets';
import NotFoundError from '../utils/NotFoundError';

const userSchema = new mongo.Schema({
  username: String,
  password: String,
  email: String
});

const Users = mongo.model('users', userSchema);

export async function addUser(payload) {
  const { username, email, password } = payload;
  const user = await Users.findOne({ username });

  if (user) {
    throw new BadRequestError(`Username '${username}' is already taken.`);
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, PASSWORD_SALT_ROUNDS);
    const user = new Users({ username, email, password: hashedPassword });
    await user.save();

    return {
      message: `User created for username ${username} with email ${email}`
    };
  } catch (err) {
    logger.error('Cannot add a new user');
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

  return {
    data: {
      username: user.username,
      email: user.email
    },
    message: 'Login successful'
  };
}
