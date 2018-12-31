import VisibilityFilters from '../maps/VisibilityFilters';

export function getFilteredTodoList(state) {
  const todos = state.data.todos;
  const visibilityFilter = state.ui.visibilityFilter;

  // We can also do this:
  // const {data: {todos}, ui: {visibilityFilter}} = state;

  return visibilityFilter === VisibilityFilters.ACTIVE
    ? todos.filter(todo => !todo.isCompleted)
    : visibilityFilter === VisibilityFilters.COMPLETED
    ? todos.filter(todo => todo.isCompleted)
    : todos;
}
