import React from 'react';

const TodoList = props => {
  return (
    <div className="list-wrapper">
      <ul>
        {!props.todos.length && <li>No todos available</li>}
        {props.todos.map((todo, index) => {
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
                &#10004;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
