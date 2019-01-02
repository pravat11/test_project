import { createAction } from 'redux-actions';

import EditTodoActionPayload from 'types/EditTodoActionPayload';

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export const EDIT_TODO = 'EDIT_TODO';
export type EDIT_TODO = typeof EDIT_TODO;

export const DELETE_TODO = 'DELETE_TODO';
export type DELETE_TODO = typeof DELETE_TODO;

export const TOGGLE_TODO_COMPLETION_STATUS = 'TOGGLE_TODO_COMPLETION_STATUS';
export type TOGGLE_TODO_COMPLETION_STATUS = typeof TOGGLE_TODO_COMPLETION_STATUS;

export interface AddTodoAction {
  type: ADD_TODO;
  payload: string;
}

export interface EditTodoAction {
  type: EDIT_TODO;
  payload: EditTodoActionPayload;
}

export interface DeleteTodoAction {
  type: DELETE_TODO;
  payload: string;
}

export interface ToggleTodoCompletionStatusAction {
  type: TOGGLE_TODO_COMPLETION_STATUS;
  payload: string;
}

export type TodoActions = AddTodoAction | EditTodoAction | DeleteTodoAction | ToggleTodoCompletionStatusAction;

export const addTodo = createAction(ADD_TODO);
export const editTodo = createAction(EDIT_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const toggleTodoCompletionStatus = createAction(TOGGLE_TODO_COMPLETION_STATUS);
