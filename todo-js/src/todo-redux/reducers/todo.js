const INITIAL_STATE = {
  todos: []
};

export default function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().toString(),
            text: action.payload,
            isCompleted: false
          }
        ]
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text
            };
          }

          return todo;
        })
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case 'TOGGLE_COMPLETION_STATUS':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted
            };
          }

          return todo;
        })
      };

    default:
      return state;
  }
}
