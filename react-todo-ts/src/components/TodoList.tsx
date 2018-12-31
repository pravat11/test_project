import * as React from 'react';

const TodoList = () => (
  <div className="list-wrapper">
    <ul>
      <li>
        <span className="todo-text">Todo text 1</span>
        <span className="action-buttons cross-button">&times;</span>
        <span className="action-buttons complete-button">
          {/* {isCompleted ? <React.Fragment>&#8630;</React.Fragment> : <React.Fragment>&#10004;</React.Fragment>} */}
        </span>
      </li>
      <li>
        <span className="todo-text">Todo text 2</span>
        <span className="action-buttons cross-button">&times;</span>
        <span className="action-buttons complete-button">
          {/* {isCompleted ? <React.Fragment>&#8630;</React.Fragment> : <React.Fragment>&#10004;</React.Fragment>} */}
        </span>
      </li>
      <li>
        <span className="todo-text">Todo text 3</span>
        <span className="action-buttons cross-button">&times;</span>
        <span className="action-buttons complete-button">
          {/* {isCompleted ? <React.Fragment>&#8630;</React.Fragment> : <React.Fragment>&#10004;</React.Fragment>} */}
        </span>
      </li>
    </ul>
  </div>
);

export default TodoList;
