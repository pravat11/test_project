import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todo';
import { toggleTodoFormShownStatus } from '../actions/ui';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.props.toggleTodoFormShownStatus();
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="Add todo" value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Save" className="custom-button" />
        <button className="custom-button cancel-button" onClick={this.props.toggleTodoFormShownStatus}>
          Cancel
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleTodoFormShownStatus
};

const enhance = connect(
  null,
  mapDispatchToProps
);

export default enhance(AddTodoForm);
