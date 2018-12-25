import React from 'react';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';
import VisibilityFilters from '../maps/VisibilityFilters';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h1>My todos</h1>
        <button className="navigate-button">Goto some other app</button>

        <AddTodoForm />

        <React.Fragment>
          <button className="add-button">+</button>
          <TodoTabs />
          <TodoList />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
