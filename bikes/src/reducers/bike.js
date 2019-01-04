const INITIAL_STATE = {
  data: [],
  latestIndex: 0
};

export default function bike(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_BIKE':
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: state.latestIndex + 1,
            ...action.payload
          }
        ],
        latestIndex: state.latestIndex + 1
      };

    case 'EDIT_BIKE':
      return {
        ...state,
        data: state.data.map(bike => {
          if (bike.id === action.payload.id) {
            return {
              ...bike,
              ...action.payload.updatedValues
            };
          }

          return bike;
        })
      };

    case 'REMOVE_BIKE':
      return {
        ...state,
        data: state.data.filter(bike => bike.id !== action.payload)
      };

    default:
      return state;
  }
}
