import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

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
      <Modal show={true} onHide={() => false}>
        <Modal.Header>Create a new todo</Modal.Header>
        <Modal.Body>
          <div className="form-container">
            <FormControl
              id="formControlTodo"
              type="text"
              label="Add todo"
              placeholder="Add todo"
              value={this.state.todoText}
              onChange={this.handleInputChange}
            />
            <Button bsStyle="primary" onClick={this.handleSubmit}>
              Save
            </Button>
            <Button bsStyle="danger" onClick={this.props.toggleTodoForm}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddTodoForm;
