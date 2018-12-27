export function toggleTodoFormShownStatus() {
  return {
    type: 'TOGGLE_TODO_FORM_SHOWN_STATUS'
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: filter
  };
}

export function setEditingMode(todo) {
  return {
    type: 'SET_EDITING_MODE',
    payload: todo
  };
}

export function resetEditingMode() {
  return {
    type: 'RESET_EDITING_MODE'
  };
}
