import AppActions from 'types/AppActions';
import TodosState from 'types/states/TodosState';
import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETION_STATUS } from 'actions/todo';

const INITIAL_STATE: TodosState = {
  todos: []
};

export default function todo(state: TodosState = INITIAL_STATE, action: AppActions): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: new Date().toString(),
          text: action.payload,
          isCompleted: false
        })
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todoObj => {
          if (todoObj.id === action.payload.id) {
            return {
              ...todoObj,
              text: action.payload.text
            };
          }

          return todoObj;
        })
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todoObj => todoObj.id !== action.payload)
      };

    case TOGGLE_TODO_COMPLETION_STATUS:
      return {
        ...state,
        todos: state.todos.map(todoObj => {
          if (todoObj.id === action.payload) {
            return {
              ...todoObj,
              isCompleted: !todoObj.isCompleted
            };
          }

          return todoObj;
        })
      };

    default:
      return state;
  }
}
