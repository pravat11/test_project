import React from 'react';
import { connect } from 'react-redux';

import { getFilteredTodoList } from '../selectors/todo';
import VisibilityFilters from '../maps/VisibilityFilters';
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
          const { text, isCompleted } = todo;

          // Alternative approach although above one is recommended.
          // const text = todo.text;

          return (
            <li key={`todo-item-${index}`}>
              <span
                className={isCompleted ? 'todo-text strike' : 'todo-text'}
                onClick={() => {
                  props.setEditingMode(todo);
                  props.toggleTodoFormShownStatus();
                }}
              >
                {text}
              </span>
              <span className="action-buttons cross-button">&times;</span>
              <span className="action-buttons complete-button">
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
  setEditingMode,
  toggleTodoFormShownStatus
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(TodoList);
