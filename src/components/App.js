import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  saveTodo = todoText => {
    this.setState({ todos: this.state.todos.concat(todoText) });
  };

  render() {
    return (
      <div className="container">
        <AddTodoForm saveTodo={this.saveTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
