import UiState from 'types/states/UiState';
import AppActions from 'types/AppActions';
import { SET_TODO_FORM_SHOWN_STATUS } from 'actions/ui';

const INITIAL_STATE = {
  isShowingTodoForm: false
};

export default function ui(state: UiState = INITIAL_STATE, action: AppActions): UiState {
  switch (action.type) {
    case SET_TODO_FORM_SHOWN_STATUS:
      return {
        ...state,
        isShowingTodoForm: action.payload
      };

    default:
      return state;
  }
}
