import React from 'react';

import About from './About';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import LatestTweets from './LatestTweets';
import FooterBottomContents from './FooterBottomContents';

const Footer = () => (
  <div class="footer">
    <div class="footer-wrapper clearfix">
      <div class="left-wrapper">
        <Navigation />
        <LatestTweets />
      </div>
      <div class="right-wrapper">
        <Newsletter />
        <About />
      </div>
    </div>
    <FooterBottomContents />
  </div>
);

export default Footer;
