import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import TodoTabs from './TodoTabs';
import AddTodoForm from './AddTodoForm';
import { toggleTodoFormShownStatus } from '../actions/ui';

const App = props => (
  <div className="container">
    <h1>My todos</h1>
    {props.isShowingTodoForm ? (
      <AddTodoForm />
    ) : (
      <React.Fragment>
        <button className="add-button" onClick={props.toggleTodoFormShownStatus}>
          +
        </button>
        <TodoTabs />
        <TodoList />
      </React.Fragment>
    )}
  </div>
);

const mapStateToProps = state => ({
  isShowingTodoForm: state.ui.isShowingTodoForm
});

const mapDispatchToProps = {
  toggleTodoFormShownStatus
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(App);
