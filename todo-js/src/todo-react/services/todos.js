import http from '../utils/http';

import * as config from '../../config';

export async function getTodos() {
  const { data } = await http.get(config.endpoints.getTodos);

  return data.data;
}

export async function addTodo(text) {
  const { data } = await http.post(config.endpoints.addTodo, { text });

  return data.data;
}

export async function editTodo(id, payload) {
  const url = `${config.BASE_URL}/todo/${id}`;
  const { data } = await http.put(url, payload);

  return data.data;
}

export async function removeTodo(id) {
  const url = `${config.BASE_URL}/todos/${id}`;
  const { data } = await http.delete(url);

  return data.data;
}
