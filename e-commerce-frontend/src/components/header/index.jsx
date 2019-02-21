import React from 'react';
import { Collapse } from 'react-bootstrap';

import Navbar from './Navbar';
import TitleBar from './TitleBar';
import LoginForm from './LoginForm';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowingLoginForm: false
    };
  }

  toggleLoginFormShownStatus = e => {
    e.preventDefault();
    this.setState(prevState => ({ isShowingLoginForm: !prevState.isShowingLoginForm }));
    // Alternative approach
    // this.setState({ isShowingLoginForm: !this.state.isShowingLoginForm });
  };
  render() {
    return (
      <div className="header clearfix">
        <TitleBar toggleLoginFormShownStatus={this.toggleLoginFormShownStatus} />
        <Collapse in={!this.state.isShowingLoginForm}>
          <div>
            <LoginForm />
          </div>
        </Collapse>
        <Navbar />
      </div>
    );
  }
}

export default Header;
