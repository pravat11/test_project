import { createStore, compose } from 'redux';

import bikeReducer from './reducers/bike';

const enhancers = [];

if (window['__REDUX_DEVTOOLS_EXTENSION__']) {
  enhancers.push(window['__REDUX_DEVTOOLS_EXTENSION__']());
}

const store = createStore(bikeReducer, compose(...enhancers));

export default store;
