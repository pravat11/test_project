import * as React from 'react';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';

const App = () => (
  <div className="container">
    <h1>My todos</h1>
    <AddTodoForm />
    <React.Fragment>
      <button className="add-button">+</button>
      <TodoTabs />
      <TodoList />
    </React.Fragment>
  </div>
);

export default App;
