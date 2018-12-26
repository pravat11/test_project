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
