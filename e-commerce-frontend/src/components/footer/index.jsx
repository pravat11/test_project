import React from 'react';

import About from './About';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import LatestTweets from './LatestTweets';
import FooterBottomContents from './FooterBottomContents';

const Footer = () => (
  <div className="footer">
    <div className="footer-wrapper clearfix">
      <div className="left-wrapper">
        <Navigation />
        <LatestTweets />
      </div>
      <div className="right-wrapper">
        <Newsletter />
        <About />
      </div>
    </div>
    <FooterBottomContents />
  </div>
);

export default Footer;
