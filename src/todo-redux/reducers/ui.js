import VisibilityFilters from '../maps/VisibilityFilters';

const INITIAL_STATE = {
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

    default:
      return state;
  }
}
