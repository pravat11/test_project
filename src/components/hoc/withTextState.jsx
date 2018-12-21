import React from 'react';

const withTextState = flag => text => WrappedComponent => {
  return class TextStateComponent extends React.Component {
    constructor() {
      super();

      this.state = {
        text: ''
      };
    }

    componentDidMount() {
      console.log('flag:', flag);
      console.log('text:', text);
    }

    handleChange = e => {
      this.setState({ text: e.target.value }, () => {
        console.log('Text from hoc:', this.state.text);
      });
    };

    render() {
      return <WrappedComponent {...this.props} textFromHoc={this.state.text} handlerFromHoc={this.handleChange} />;
    }
  };
};

export default withTextState;
