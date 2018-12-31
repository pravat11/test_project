import React from 'react';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';
import VisibilityFilters from '../maps/VisibilityFilters';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      editingTodo: null,
      isShowingTodoForm: false,
      visibilityFilter: VisibilityFilters.ALL
    };
  }

  setEditTodo = todo => {
    this.setState({ editingTodo: todo, isShowingTodoForm: true });
  };

  resetEditMode = () => {
    this.setState({ editingTodo: null });
  };

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

  editTodo = text => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.text === this.state.editingTodo.text) {
        return {
          ...todo,
          text
        };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
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

  gotoSomething = () => {
    this.props.history.push('/something');
  };

  render() {
    return (
      <div className="container">
        <h1>My todos</h1>
        <button className="navigate-button" onClick={this.gotoSomething}>
          Goto some other app
        </button>
        {this.state.isShowingTodoForm ? (
          <AddTodoForm
            saveTodo={this.saveTodo}
            editTodo={this.editTodo}
            resetEditMode={this.resetEditMode}
            toggleTodoForm={this.toggleTodoForm}
            editingTodo={this.state.editingTodo}
          />
        ) : (
          <React.Fragment>
            <button className="add-button" onClick={this.toggleTodoForm}>
              +
            </button>
            <TodoTabs visibilityFilter={this.state.visibilityFilter} setVisibilityFilter={this.setVisibilityFilter} />
            <TodoList
              todos={this.state.todos}
              removeTodo={this.removeTodo}
              setEditTodo={this.setEditTodo}
              visibilityFilter={this.state.visibilityFilter}
              toggleTodoCompletionStatus={this.toggleTodoCompletionStatus}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(App);
