import React from 'react';

const Newsletter = () => (
  <div class="col4-r-left">
    <div class="sections-title clearfix">
      <h2 class="h2-style">Newsletter</h2>
    </div>
    <span class="newsletter">
      To subscribe to our newsletter, type in your e-mail address below and press “<i>Enter</i>”.{' '}
      <span>We don’t send spam. Ever!</span>
    </span>
    <div class="newsletter-form-container">
      <form class="newsletter-form">
        <input type="submit" name="search-button" value=" " />
        <input type="text" name="search" placeholder="search here" />
      </form>
    </div>
  </div>
);

export default Newsletter;
