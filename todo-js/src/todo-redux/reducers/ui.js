import VisibilityFilters from '../maps/VisibilityFilters';

const INITIAL_STATE = {
  editingTodo: null,
  isShowingTodoForm: false,
  visibilityFilter: VisibilityFilters.ALL
};

export default function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_TODO_FORM_SHOWN_STATUS':
      return {
        ...state,
        isShowingTodoForm: !state.isShowingTodoForm
      };

    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.payload
      };

    case 'SET_EDITING_MODE':
      return {
        ...state,
        editingTodo: action.payload
      };

    case 'RESET_EDITING_MODE':
      return {
        ...state,
        editingTodo: INITIAL_STATE.editingTodo
      };

    default:
      return state;
  }
}
