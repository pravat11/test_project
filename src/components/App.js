import React from 'react';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';
import VisibilityFilters from '../maps/VisibilityFilters';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      isShowingTodoForm: false,
      visibilityFilter: VisibilityFilters.ALL
    };
  }

  setVisibilityFilter = visibilityFilter => {
    const filterExists = Object.keys(VisibilityFilters).find(filter => VisibilityFilters[filter] === visibilityFilter);

    if (!filterExists) {
      return;
    }

    this.setState({ visibilityFilter });
  };

  saveTodo = text => {
    const todoObject = {
      text,
      isCompleted: false
    };

    const todoExistsAlready = this.state.todos.find(todo => todo.text === text);

    if (todoExistsAlready) {
      alert('Todo already exists');
      return;
    }

    this.setState({ todos: this.state.todos.concat(todoObject) });
  };

  removeTodo = text => {
    this.setState({ todos: this.state.todos.filter(todo => todo.text !== text) });
  };

  toggleTodoForm = () => {
    this.setState({ isShowingTodoForm: !this.state.isShowingTodoForm });
  };

  toggleTodoCompletionStatus = text => {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.text !== text) {
        return todo;
      }

      return {
        ...todo,
        isCompleted: !todo.isCompleted
      };
    });

    this.setState({ todos: updatedTodos });
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
          <React.Fragment>
            <TodoTabs visibilityFilter={this.state.visibilityFilter} setVisibilityFilter={this.setVisibilityFilter} />
            <TodoList
              todos={this.state.todos}
              removeTodo={this.removeTodo}
              toggleTodoCompletionStatus={this.toggleTodoCompletionStatus}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default App;
