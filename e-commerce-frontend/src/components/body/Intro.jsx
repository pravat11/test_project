import React from 'react';

import introImage from '../../assets/images/intro-image.png';

const Intro = () => (
  <section className="intro-section clearfix">
    <div className="intro-left">
      <img src={introImage} className="intro-image" alt="intro-image" />
    </div>
    <div className="intro-right">
      <span className="intro-header-right">
        Welcome to <span className="h1-style">PANDORA,</span> responsive Shopify theme
      </span>
      <br />
      <br />
      <p className="intro-p1">Congratulations on starting your own e-commerce store! </p>
      <p className="intro-p2">
        GANYMEDE is an elegant & responsive Shopify theme which dynamically adjusts for all screen sizes and devices.
        Your shop will look great and will be easy to use on desktops, laptops, tablets and mobile smartphones.
      </p>
    </div>
  </section>
);

export default Intro;
