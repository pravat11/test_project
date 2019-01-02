import { combineReducers } from 'redux';

import ui from './ui';
import todo from './todo';
import AppState from 'types/states/AppState';

const rootReducer = combineReducers<AppState>({
  ui,
  data: todo
});

export default rootReducer;
