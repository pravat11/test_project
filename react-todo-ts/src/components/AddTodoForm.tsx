import * as React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormControl, ButtonToolbar } from 'react-bootstrap';

import { addTodo } from '../actions/todo';
import AppState from 'types/states/AppState';
import { setTodoFormShownStatus } from '../actions/ui';

interface MappedProps {
  isShowingTodoForm: boolean;
  addTodo: (text: string) => void;
  setTodoFormShownStatus: (value: boolean) => void;
}

interface State {
  text: string;
}

class AddTodoForm extends React.Component<MappedProps, State> {
  constructor(props: MappedProps) {
    super(props);

    this.state = {
      text: ''
    };
  }

  _hideModal = () => {
    this.props.setTodoFormShownStatus(false);
  };

  _handleInputChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  _handleSubmit = () => {
    this.props.addTodo(this.state.text);
    this._hideModal();
  };

  render() {
    return (
      <Modal show={this.props.isShowingTodoForm} onHide={this._hideModal} onEnter={() => this.setState({ text: '' })}>
        <Modal.Header>Add a new todo</Modal.Header>
        <form className="form-container">
          <FormControl type="text" placeholder="Add todo" value={this.state.text} onChange={this._handleInputChange} />
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this._handleSubmit}>
              Save
            </Button>
            <Button bsStyle="danger" onClick={this._hideModal}>
              Cancel
            </Button>
          </ButtonToolbar>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isShowingTodoForm: state.ui.isShowingTodoForm
});

const mapDispatchToProps = {
  addTodo,
  setTodoFormShownStatus
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(AddTodoForm);
