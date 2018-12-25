import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SomeOtherApp from './todo-redux/SomeOtherApp';
import TodoReactApp from './todo-react/components/TodoApp';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/todo-react" component={TodoReactApp} />
      <Route path="/todo-redux" component={SomeOtherApp} />
      <Redirect to="/todo-redux" />
    </Switch>
  </BrowserRouter>
);

export default App;
