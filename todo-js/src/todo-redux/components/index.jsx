import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import TodoApp from './TodoApp';

const IndexComponent = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default IndexComponent;
