import React from 'react';

import Blog from './Blog';
import Intro from './Intro';
import Slider from './Slider';
import Offers from './Offers';
import FeaturedSpecials from './FeaturedSpecials';

const BodyWrapper = () => (
  <div className="body-wrapper">
    <Slider />
    <Intro />
    <FeaturedSpecials />
    <Offers />
    <Blog />
  </div>
);

export default BodyWrapper;
