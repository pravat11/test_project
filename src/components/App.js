import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      isShowingTodoForm: false
    };
  }

  saveTodo = todoText => {
    this.setState({ todos: this.state.todos.concat(todoText) });
  };

  removeTodo = todoText => {
    this.setState({ todos: this.state.todos.filter(todo => todo !== todoText) });
  };

  toggleTodoForm = () => {
    this.setState({ isShowingTodoForm: !this.state.isShowingTodoForm });
  };

  render() {
    return (
      <div className="container">
        <h1>My todos</h1>
        <button className="add-button" onClick={this.toggleTodoForm}>
          Add
        </button>
        {this.state.isShowingTodoForm ? (
          <AddTodoForm saveTodo={this.saveTodo} toggleTodoForm={this.toggleTodoForm} />
        ) : (
          <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        )}
      </div>
    );
  }
}
export default App;
