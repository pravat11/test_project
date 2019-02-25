import React from 'react';

const Offers = () => (
  <section className="featured-specials-section clearfix">
    <div className="sections-title clearfix">
      <h2 className="h2-style">Special offers</h2>
    </div>
    <div className="special-content">
      <div className="left-wrapper">
        <a href="#">
          <div className="col3-l">
            <span className="special-content-titles">sale</span>
            <span className="special-content-text">check out all items on sale</span>
          </div>
        </a>
        <a href="#">
          <div className="col3-m">
            <span className="special-content-titles fifty-percent">50% off</span>
            <span className="special-content-text">on all winter clothing & accessories</span>
          </div>
        </a>
      </div>
      <a href="#">
        <div className="col3-r">
          <span className="special-content-titles">new</span>
          <span className="special-content-text">specialized sports clothing</span>
        </div>
      </a>
    </div>
  </section>
);

export default Offers;
