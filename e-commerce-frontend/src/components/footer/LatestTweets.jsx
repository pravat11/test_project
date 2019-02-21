import React from 'react';

const LatestTweets = () => (
  <div class="col4-l-right">
    <div class="sections-title clearfix">
      <h2 class="h2-style">Latest tweets</h2>
    </div>
    <ul class="latest-tweets-list">
      <li class="clearfix">
        <img src="images/twitter.png" class="tweets-image" alt="tweet" />
        <span class="tweets-text">
          <a href="#">@crasnon</a> sem in felis consequat curss vitae cerat. Ut purus ipsum, laoreet at iaculis non{' '}
          <a href="#">http://t.co/yn0nTSlA</a>
        </span>
      </li>
      <li class="clearfix">
        <img src="images/twitter.png" class="tweets-image" alt="tweet" />
        <span class="tweets-text">
          Quisque fringilla, enim volutpat commodo eros faucibus massa, desed <a href="#">#ganymede</a> pellentesque
        </span>
      </li>
      <li class="clearfix">
        <img src="images/twitter.png" class="tweets-image" alt="tweet" />
        <span class="tweets-text">Fusce nec massa eget purus imperdiet commodo. Quisque non lorem eros.</span>
      </li>
    </ul>
  </div>
);

export default LatestTweets;
