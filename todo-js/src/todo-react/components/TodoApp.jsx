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
      isShowingTodoForm: false,
      visibilityFilter: VisibilityFilters.ALL
    };
  }

  async componentDidMount() {
    this.fetchTodoList();
  }

  fetchTodoList = async () => {
    const todos = await todosService.getTodos();

    this.setState({ todos });
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
    await todosService.addTodo(text);
    this.fetchTodoList();
  };

  editTodo = async (id, text) => {
    await todosService.editTodo(id, { text });

    this.fetchTodoList();
  };

  removeTodo = async id => {
    await todosService.removeTodo(id);

    this.fetchTodoList();
  };

  toggleTodoForm = () => {
    this.setState({ isShowingTodoForm: !this.state.isShowingTodoForm });
  };

  toggleTodoCompletionStatus = async (id, isCompleted) => {
    await todosService.editTodo(id, { isCompleted });

    this.fetchTodoList();
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
