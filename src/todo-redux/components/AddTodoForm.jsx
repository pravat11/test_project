import React from 'react';

class AddTodoForm extends React.Component {
  render() {
    return (
      <form className="form-container">
        <input type="text" placeholder="Add todo" />
        <input type="submit" value="Save" className="custom-button" />
        <button className="custom-button cancel-button">Cancel</button>
      </form>
    );
  }
}

export default AddTodoForm;
