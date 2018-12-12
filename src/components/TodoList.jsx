import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todoText => {
        return <li>{todoText}</li>;
      })}
    </ul>
  );
};

export default TodoList;
