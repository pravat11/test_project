import React from 'react';

const TodoList = props => {
  return (
    <div className="list-wrapper">
      <ul>
        {!props.todos.length && <li>No todos available</li>}
        {props.todos.map(todoText => {
          return (
            <li>
              <span>{todoText}</span>
              <span className="cross-button" onClick={() => props.removeTodo(todoText)}>
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
