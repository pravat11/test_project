import { combineReducers } from 'redux';

import ui from './ui';
import todo from './todo';

const rootReducer = combineReducers({
  ui,
  data: todo
});

export default rootReducer;
