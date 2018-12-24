import VisibilityFilters from '../maps/VisibilityFilters';

const INITIAL_STATE = {
  todos: [],
  visibilityFilter: VisibilityFilters.ALL
};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INITIALIZE_TODO': {
      return {
        ...state,
        todos: action.payload
      };
    }

    default:
      return state;
  }
}

export default appReducer;
