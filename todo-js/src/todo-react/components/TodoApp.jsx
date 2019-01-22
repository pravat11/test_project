import React from 'react';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';
import * as todosService from '../services/todos';
import VisibilityFilters from '../maps/VisibilityFilters';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      editingTodo: null,
      isActionPending: {},
      isCreatingTodo: false,
      isFetchingTodos: false,
      isShowingTodoForm: false,
      visibilityFilter: VisibilityFilters.ALL
    };
  }

  async componentDidMount() {
    this.fetchTodoList();
  }

  fetchTodoList = async () => {
    this.setState({ isFetchingTodos: true });

    try {
      const todos = await todosService.getTodos();

      this.setState({ todos });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isFetchingTodos: false });
    }
  };

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

  saveTodo = async text => {
    this.setState({ isCreatingTodo: true });

    try {
      const todo = await todosService.addTodo(text);

      this.setState({ todos: [...this.state.todos, todo] });
    } finally {
      this.setState({ isCreatingTodo: false });
    }
  };

  editTodo = async (id, text) => {
    this.setState({ isCreatingTodo: true });

    try {
      const editedTodo = await todosService.editTodo(id, { text });
      const updatedList = this.state.todos.map(todo => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        }

        return todo;
      });

      this.setState({ todos: updatedList });
    } finally {
      this.setState({ isCreatingTodo: false });
    }
  };

  removeTodo = async id => {
    this.setState({
      isActionPending: {
        ...this.state.isActionPending,
        [id]: true
      }
    });

    try {
      await todosService.removeTodo(id);

      this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    } finally {
      this.setState({
        isActionPending: {
          ...this.state.isActionPending,
          [id]: false
        }
      });
    }
  };

  toggleTodoForm = () => {
    this.setState({ isShowingTodoForm: !this.state.isShowingTodoForm });
  };

  toggleTodoCompletionStatus = async (id, isCompleted) => {
    this.setState({
      isActionPending: {
        ...this.state.isActionPending,
        [id]: true
      }
    });

    try {
      const editedTodo = await todosService.editTodo(id, { isCompleted });
      const updatedList = this.state.todos.map(todo => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        }

        return todo;
      });

      this.setState({ todos: updatedList });
    } finally {
      this.setState({
        isActionPending: {
          ...this.state.isActionPending,
          [id]: false
        }
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>My todos</h1>
        {this.state.isShowingTodoForm ? (
          <AddTodoForm
            saveTodo={this.saveTodo}
            editTodo={this.editTodo}
            resetEditMode={this.resetEditMode}
            toggleTodoForm={this.toggleTodoForm}
            editingTodo={this.state.editingTodo}
            isCreatingTodo={this.state.isCreatingTodo}
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
              isActionPending={this.state.isActionPending}
              isFetchingTodos={this.state.isFetchingTodos}
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
