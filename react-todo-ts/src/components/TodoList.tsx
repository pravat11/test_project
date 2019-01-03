import * as React from 'react';
import { connect } from 'react-redux';

import Todo from 'types/Todo';
import AppState from 'types/states/AppState';

interface TodoListProps {
  todos: Todo[];
}

const TodoList = (props: TodoListProps) => (
  <div className="list-wrapper">
    <ul>
      {props.todos.map(todo => {
        return (
          <li key={todo.id}>
            <span className="todo-text">{todo.text}</span>
            <span className="action-buttons cross-button">&times;</span>
            <span className="action-buttons complete-button">
              {todo.isCompleted ? <React.Fragment>&#8630;</React.Fragment> : <React.Fragment>&#10004;</React.Fragment>}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  todos: state.data.todos
});

const enhance = connect(mapStateToProps);

export default enhance(TodoList);
