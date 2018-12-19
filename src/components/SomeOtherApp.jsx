import React from 'react';
import { Route, Switch } from 'react-router-dom';

const SomeOtherApp = () => (
  <div>
    <div>Some other App</div>
    <Switch>
      <Route exact path="/something/app1" component={App1} />
      <Route exact path="/something/app2" component={App2} />
    </Switch>
  </div>
);

const App1 = () => <div>App1</div>;
const App2 = () => <div>App2</div>;

export default SomeOtherApp;
