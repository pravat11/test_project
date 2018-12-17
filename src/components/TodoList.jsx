import React from 'react';

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
        {!todosToDisplay.length && <li>{emptyStateText}</li>}
        {todosToDisplay.map((todo, index) => {
          const { text, isCompleted } = todo;

          // Alternative approach although above one is recommended.
          // const text = todo.text;

          return (
            <li key={`todo-item-${index}`}>
              <span className={isCompleted ? 'strike' : ''}>{text}</span>
              <span className="action-buttons cross-button" onClick={() => props.removeTodo(text)}>
                &times;
              </span>
              <span className="action-buttons complete-button" onClick={() => props.toggleTodoCompletionStatus(text)}>
                {isCompleted ? <React.Fragment>&#8630;</React.Fragment> : <React.Fragment>&#10004;</React.Fragment>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
