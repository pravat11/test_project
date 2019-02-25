import React from 'react';

const Newsletter = () => (
  <div className="col4-r-left">
    <div className="sections-title clearfix">
      <h2 className="h2-style">Newsletter</h2>
    </div>
    <span className="newsletter">
      To subscribe to our newsletter, type in your e-mail address below and press “<i>Enter</i>”.{' '}
      <span>We don’t send spam. Ever!</span>
    </span>
    <div className="newsletter-form-container">
      <form className="newsletter-form">
        <input type="submit" name="search-button" value=" " />
        <input type="text" name="search" placeholder="search here" />
      </form>
    </div>
  </div>
);

export default Newsletter;
