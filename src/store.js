import { compose, createStore } from 'redux';

import appReducer from './reducers';

const enhancers = [];

if (window['__REDUX_DEVTOOLS_EXTENSION__']) {
  enhancers.push(window['__REDUX_DEVTOOLS_EXTENSION__']());
}

const store = createStore(appReducer, compose(...enhancers));

export default store;
