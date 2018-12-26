import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  // const todosToDisplay =
  //   props.visibilityFilter === VisibilityFilters.ACTIVE
  //     ? props.todos.filter(todo => !todo.isCompleted)
  //     : props.visibilityFilter === VisibilityFilters.COMPLETED
  //     ? props.todos.filter(todo => todo.isCompleted)
  //     : props.todos;

  // const emptyStateText =
  //   props.visibilityFilter === VisibilityFilters.ACTIVE
  //     ? 'No active todos'
  //     : props.visibilityFilter === VisibilityFilters.COMPLETED
  //     ? 'No completed todos'
  //     : 'No todos available';

  const emptyStateText = 'No todos available';

  const todosToDisplay = props.todos;

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
              <span className={isCompleted ? 'todo-text strike' : 'todo-text'}>{text}</span>
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
  todos: state.data.todos
});

const enhance = connect(mapStateToProps);

export default enhance(TodoList);
