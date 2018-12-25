const INITIAL_STATE = {
  isLoading: false,
  todos: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_STARTED':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_FINISHED':
      return {
        ...state,
        isLoading: false
      };

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
  }
}
