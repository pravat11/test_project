export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: text
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    payload: {
      id,
      text
    }
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: id
  };
}

export function toggleTodoCompletionStatus(id) {
  return {
    type: 'TOGGLE_COMPLETION_STATUS',
    payload: id
  };
}
