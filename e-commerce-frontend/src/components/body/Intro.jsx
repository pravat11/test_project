import React from 'react';

import introImage from '../../assets/images/intro-image.png';

const Intro = () => (
  <section class="intro-section clearfix">
    <div class="intro-left">
      <img src={introImage} class="intro-image" alt="intro-image" />
    </div>
    <div class="intro-right">
      <span class="intro-header-right">
        Welcome to <span class="h1-style">PANDORA,</span> responsive Shopify theme
      </span>
      <br />
      <br />
      <p class="intro-p1">Congratulations on starting your own e-commerce store! </p>
      <p class="intro-p2">
        GANYMEDE is an elegant & responsive Shopify theme which dynamically adjusts for all screen sizes and devices.
        Your shop will look great and will be easy to use on desktops, laptops, tablets and mobile smartphones.
      </p>
    </div>
  </section>
);

export default Intro;
