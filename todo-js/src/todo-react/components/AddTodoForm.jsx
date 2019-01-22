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

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.editingTodo) {
      await this.props.editTodo(this.props.editingTodo.id, this.state.todoText);
      this.props.resetEditMode();
    } else {
      await this.props.saveTodo(this.state.todoText);
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
        {this.props.isCreatingTodo && <div className="spinner form-spinner" />}
      </form>
    );
  }
}

export default AddTodoForm;
