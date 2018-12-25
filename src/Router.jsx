import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TodoReduxApp from './todo-redux/components/TodoApp';
import TodoReactApp from './todo-react/components/TodoApp';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/todo-react" component={TodoReactApp} />
      <Route path="/todo-redux" component={TodoReduxApp} />
      <Redirect to="/todo-redux" />
    </Switch>
  </BrowserRouter>
);

export default App;
