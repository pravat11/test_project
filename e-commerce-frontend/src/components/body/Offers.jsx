import React from 'react';

const Offers = () => (
  <section class="featured-specials-section clearfix">
    <div class="sections-title clearfix">
      <h2 class="h2-style">Special offers</h2>
    </div>
    <div class="special-content">
      <div class="left-wrapper">
        <a href="#">
          <div class="col3-l">
            <span class="special-content-titles">sale</span>
            <span class="special-content-text">check out all items on sale</span>
          </div>
        </a>
        <a href="#">
          <div class="col3-m">
            <span class="special-content-titles fifty-percent">50% off</span>
            <span class="special-content-text">on all winter clothing & accessories</span>
          </div>
        </a>
      </div>
      <a href="#">
        <div class="col3-r">
          <span class="special-content-titles">new</span>
          <span class="special-content-text">specialized sports clothing</span>
        </div>
      </a>
    </div>
  </section>
);

export default Offers;
