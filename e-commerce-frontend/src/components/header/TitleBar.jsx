import React from 'react';

import cartImage from '../../assets/images/cart.png';
import hamburgerImage from '../../assets/images/hamburger.png';
import accountDownImage from '../../assets/images/account-down.png';
import profileBlackImage from '../../assets/images/profile-black.png';

const TitleBar = props => (
  <div className="title-bar">
    <a href="#">
      <h1 className="h1-style">PANDORA</h1>
    </a>
    <span className="heading-caption">fantastic products & great prices</span>
    <a href="#" className="hamburger">
      <img className="hamburger-image" src={hamburgerImage} alt="HAM" />
    </a>
    <div className="title-bar-links">
      <a href="#" className="cart">
        <img className="title-links-icons" src={cartImage} alt="cart" />0 items (&dollar;0.00 in total)
      </a>
      <a href="#" className="checkout">
        Checkout
      </a>
      <a href="#" className="account" onClick={props.toggleLoginFormShownStatus}>
        <img className="title-links-icons" src={profileBlackImage} alt="profile" />
        My account
        <img src={accountDownImage} className="down-arrow" alt="down" />
      </a>
    </div>
  </div>
);

export default TitleBar;
