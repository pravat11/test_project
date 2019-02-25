import React from 'react';

const LatestTweets = () => (
  <div className="col4-l-right">
    <div className="sections-title clearfix">
      <h2 className="h2-style">Latest tweets</h2>
    </div>
    <ul className="latest-tweets-list">
      <li className="clearfix">
        <img src="images/twitter.png" className="tweets-image" alt="tweet" />
        <span className="tweets-text">
          <a href="#">@crasnon</a> sem in felis consequat curss vitae cerat. Ut purus ipsum, laoreet at iaculis non{' '}
          <a href="#">http://t.co/yn0nTSlA</a>
        </span>
      </li>
      <li className="clearfix">
        <img src="images/twitter.png" className="tweets-image" alt="tweet" />
        <span className="tweets-text">
          Quisque fringilla, enim volutpat commodo eros faucibus massa, desed <a href="#">#ganymede</a> pellentesque
        </span>
      </li>
      <li className="clearfix">
        <img src="images/twitter.png" className="tweets-image" alt="tweet" />
        <span className="tweets-text">Fusce nec massa eget purus imperdiet commodo. Quisque non lorem eros.</span>
      </li>
    </ul>
  </div>
);

export default LatestTweets;
