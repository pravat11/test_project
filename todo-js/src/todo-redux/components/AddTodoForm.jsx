import React from 'react';
import { connect } from 'react-redux';

import { editTodo, addTodo } from '../actions/todo';
import { resetEditingMode, toggleTodoFormShownStatus } from '../actions/ui';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    if (this.props.editingTodo) {
      this.setState({ text: this.props.editingTodo.text });
    }
  }

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { editingTodo } = this.props;

    if (!editingTodo) {
      this.props.addTodo(text);
    } else {
      this.props.editTodo(editingTodo.id, text);
      this.props.resetEditingMode();
    }
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

const mapStateToProps = state => ({
  editingTodo: state.ui.editingTodo
});

const mapDispatchToProps = {
  addTodo,
  editTodo,
  resetEditingMode,
  toggleTodoFormShownStatus
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(AddTodoForm);
