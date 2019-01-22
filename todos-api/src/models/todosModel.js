import camelize from 'camelize';

import connection from '../connection';
import logger from '../utils/logger';
import NotFoundError from '../utils/NotFoundError';

export async function addTodo(text) {
  const insertData = {
    text,
    is_completed: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const [insertedId] = await connection('todos').insert(insertData);

  const [insertedData] = await connection('todos')
    .select('*')
    .where({ id: insertedId });

  return {
    message: 'Todo created successfully',
    data: camelize(insertedData)
  };
}

export async function getTodos() {
  logger.info('Fetching the list of todos...');
  const todos = await connection.select('*').from('todos');
  logger.debug('Todos fetched:', todos);

  return {
    message: 'List of todos',
    data: camelize(todos)
  };
}

export async function getTodoById(id) {
  const [todo] = await connection
    .select('*')
    .from('todos')
    .where({ id });

  if (!todo) {
    logger.error(`Couldn't find the requested todo with id ${id}`);
    throw new NotFoundError(`Couldn't find the requested todo`);
  }

  return {
    message: 'Todo details',
    data: todo
  };
}

export async function updateTodo(id, payload) {
  await connection('todos')
    .where({ id })
    .update({
      text: payload.text,
      is_completed: payload.isCompleted
    });

  const [updatedData] = await connection('todos')
    .select('*')
    .where({ id });

  return {
    message: 'Updated todo',
    data: camelize(updatedData)
  };
}

export async function deleteTodo(id) {
  try {
    await connection('todos')
      .where({ id })
      .del();

    return {
      message: 'Todo deleted successfully',
      data: {
        removedTodoId: id
      }
    };
  } catch (err) {
    throw err;
  }
}
