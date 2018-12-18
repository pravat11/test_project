import React from 'react';

class AddTodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      todoText: ''
    };
  }

  componentDidMount() {
    if (this.props.editingTodo) {
      this.setState({ todoText: this.props.editingTodo.text });
    }
  }

  handleInputChange = e => {
    this.setState({ todoText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.editingTodo) {
      this.props.editTodo(this.state.todoText);
      this.props.resetEditMode();
    } else {
      this.props.saveTodo(this.state.todoText);
    }
    
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
