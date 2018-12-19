import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TodoApp from './TodoApp';
import SomeOtherApp from './SomeOtherApp';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/todo" render={() => <TodoApp />} />
      <Route path="/something" component={SomeOtherApp} />
      <Redirect to="/todo" />
    </Switch>
  </BrowserRouter>
);

export default App;
