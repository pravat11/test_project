import mongo from '../mongo';
import logger from '../utils/logger';

const userSchema = new mongo.Schema({
  name: String
});

const Users = mongo.model('users', userSchema);

export async function addUser(name) {
  try {
    const user = new Users({ name });
    const result = await user.save();

    return result;
  } catch (err) {
    logger.error('Cannot add a new user');
  }
}
