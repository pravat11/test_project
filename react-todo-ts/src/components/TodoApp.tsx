import * as React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';
import { setTodoFormShownStatus } from '../actions/ui';

interface MappedProps {
  setTodoFormShownStatus: (value: boolean) => void;
}

const App = (props: MappedProps) => (
  <div className="container">
    <h1>My todos</h1>
    <AddTodoForm />
    <React.Fragment>
      <button className="add-todo-button" onClick={() => props.setTodoFormShownStatus(true)}>
        Add
      </button>
      <TodoTabs />
      <TodoList />
    </React.Fragment>
  </div>
);

const mapDispatchToProps = {
  setTodoFormShownStatus
};

const enhance = connect(
  null,
  mapDispatchToProps
);

export default enhance(App);
