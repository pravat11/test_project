import React from 'react';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';

class App extends React.Component {
  render() {
    return (
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
  }
}

export default App;
