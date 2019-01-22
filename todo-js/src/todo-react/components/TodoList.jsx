import React from 'react';
import classnames from 'classnames';

import VisibilityFilters from '../maps/VisibilityFilters';

const TodoList = props => {
  const todosToDisplay =
    props.visibilityFilter === VisibilityFilters.ACTIVE
      ? props.todos.filter(todo => !todo.isCompleted)
      : props.visibilityFilter === VisibilityFilters.COMPLETED
      ? props.todos.filter(todo => todo.isCompleted)
      : props.todos;

  const emptyStateText =
    props.visibilityFilter === VisibilityFilters.ACTIVE
      ? 'No active todos'
      : props.visibilityFilter === VisibilityFilters.COMPLETED
      ? 'No completed todos'
      : 'No todos available';

  return (
    <div className="list-wrapper">
      <ul>
        {props.isFetchingTodos ? (
          <li>
            <div className="spinner center" />
          </li>
        ) : (
          <React.Fragment>
            {!todosToDisplay.length && <li>{emptyStateText}</li>}
            {todosToDisplay.map((todo, index) => {
              const { id, text, isCompleted } = todo;

              const todoTextClass = classnames('todo-text', {
                strike: isCompleted,
                disabled: props.isActionPending[id]
              });

              // Alternative approach although above one is recommended.
              // const text = todo.text;

              return (
                <li key={`todo-item-${index}`}>
                  <span
                    className={todoTextClass}
                    disabled={props.isActionPending[id]}
                    onClick={() => {
                      props.setEditTodo(todo);
                    }}
                  >
                    {text}
                  </span>
                  {props.isActionPending[id] ? (
                    <div className="spinner inline-right" />
                  ) : (
                    <React.Fragment>
                      <span className="action-buttons cross-button" onClick={() => props.removeTodo(id)}>
                        &times;
                      </span>
                      <span
                        className="action-buttons complete-button"
                        onClick={() => props.toggleTodoCompletionStatus(id, !isCompleted)}
                      >
                        {isCompleted ? (
                          <React.Fragment>&#8630;</React.Fragment>
                        ) : (
                          <React.Fragment>&#10004;</React.Fragment>
                        )}
                      </span>
                    </React.Fragment>
                  )}
                </li>
              );
            })}
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
