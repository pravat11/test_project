import React, { Component } from 'react';

class AddTodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      todoText: ''
    };
  }

  handleInputChange = e => {
    this.setState({ todoText: e.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <input type="text" placeholder="Add todo" value={this.state.todoText} onChange={this.handleInputChange} />
        <button onClick={() => this.props.saveTodo(this.state.todoText)}>Save</button>
      </div>
    );
  }
}

export default AddTodoForm;
