import { createAction } from 'redux-actions';

export const SET_TODO_FORM_SHOWN_STATUS = 'SET_TODO_FORM_SHOWN_STATUS';
export type SET_TODO_FORM_SHOWN_STATUS = typeof SET_TODO_FORM_SHOWN_STATUS;

export interface ToggleTodoFormShownStatusAction {
  type: SET_TODO_FORM_SHOWN_STATUS;
  payload: boolean;
}

export type UiActions = ToggleTodoFormShownStatusAction;

export const toggleTodoFormShownStatus = createAction(SET_TODO_FORM_SHOWN_STATUS);
