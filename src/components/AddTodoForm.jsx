import React from 'react';

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveTodo(this.state.todoText);
    this.props.toggleTodoForm();
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add todo" value={this.state.todoText} onChange={this.handleInputChange} />
        <input type="submit" value="Save" className="custom-button" />
        <button className="custom-button cancel-button" onClick={this.props.toggleTodoForm}>
          Cancel
        </button>
      </form>
    );
  }
}

export default AddTodoForm;
