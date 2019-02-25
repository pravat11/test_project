import http from '../utils/http';
import config from '../config';

export async function login(username, password) {
  const loginPayload = {
    username,
    password
  };
  const { data } = await http.post(config.apis.LOGIN, loginPayload);

  return data.data;
}
