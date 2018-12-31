import React from 'react';
import { connect } from 'react-redux';

import { getFilteredTodoList } from '../selectors/todo';
import VisibilityFilters from '../maps/VisibilityFilters';
import { removeTodo, toggleTodoCompletionStatus } from '../actions/todo';
import { setEditingMode, toggleTodoFormShownStatus } from '../actions/ui';

const TodoList = props => {
  const emptyStateText =
    props.visibilityFilter === VisibilityFilters.ACTIVE
      ? 'No active todos'
      : props.visibilityFilter === VisibilityFilters.COMPLETED
      ? 'No completed todos'
      : 'No todos available';

  return (
    <div className="list-wrapper">
      <ul>
        {!props.todos.length && <li>{emptyStateText}</li>}
        {props.todos.map((todo, index) => {
          const { id, text, isCompleted } = todo;

          // Alternative approach although above one is recommended.
          // const text = todo.text;

          return (
            <li key={id}>
              <span
                className={isCompleted ? 'todo-text strike' : 'todo-text'}
                onClick={() => {
                  props.setEditingMode(todo);
                  props.toggleTodoFormShownStatus();
                }}
              >
                {text}
              </span>
              <span className="action-buttons cross-button" onClick={() => props.removeTodo(id)}>
                &times;
              </span>
              <span className="action-buttons complete-button" onClick={() => props.toggleTodoCompletionStatus(id)}>
                {isCompleted ? <React.Fragment>&#8630;</React.Fragment> : <React.Fragment>&#10004;</React.Fragment>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: getFilteredTodoList(state),
  visibilityFilter: state.ui.visibilityFilter
});

const mapDispatchToProps = {
  removeTodo,
  setEditingMode,
  toggleTodoFormShownStatus,
  toggleTodoCompletionStatus
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(TodoList);
