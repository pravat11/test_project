const bike = {
  id: '',
  model: '',
  manufacturer: '',
  horsepower: ''
};

export function addBike(payload) {
  return {
    payload,
    type: 'ADD_BIKE'
  };
}

export function editBike(id, updatedValues) {
  return {
    payload: {
      id,
      updatedValues
    },
    type: 'EDIT_BIKE'
  };
}

export function removeBike(id) {
  return {
    type: 'REMOVE_BIKE',
    payload: id
  };
}
