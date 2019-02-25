import React from 'react';

const FeaturedSpecials = () => (
  <section className="featured-specials-section clearfix">
    <div className="sections-title clearfix">
      <h2 className="h2-style">Featured items</h2>
      <a href="#">
        <img src="images/eye.png" className="eye" alt="eye" />
        view more items
      </a>
    </div>
    <div className="featured-contents">
      <div className="featured-item">
        <img src="images/photo1.png" className="feature-image" alt="featured" />
        <span className="item-name">Striped colorfull dress</span>
        <span className="item-price">&#36; 29.99</span>
      </div>
      <div className="featured-item">
        <img src="images/photo2.png" className="feature-image" alt="featured" />
        <img src="images/sale_tag.png" className="sale-tag" alt="sale" />
        <span className="item-name">Polka dot light blue blouse</span>
        <span className="item-price">
          &#36; 13.99 <span className="strike"> &#36; 36.99</span>
        </span>
      </div>
      <div className="featured-item">
        <img src="images/photo3.png" className="feature-image" alt="featured" />
        <span className="item-name">Basic sleeveless sweater</span>
        <span className="item-price">&#36; 39.99</span>
      </div>
      <div className="featured-item featured-last">
        <img src="images/photo4.png" className="feature-image" alt="featured" />
        <span className="item-name">Colorful summer dress</span>
        <span className="item-price">&#36; 26.99</span>
      </div>
      <div className="featured-item">
        <img src="images/photo5.png" className="feature-image" alt="featured" />
        <span className="item-name">Black & white polka dot dress</span>
        <span className="item-price">&#36; 29.99</span>
      </div>
      <div className="featured-item">
        <img src="images/photo6.png" className="feature-image" alt="featured" />
        <span className="item-name">Elegant sweater with tie</span>
        <span className="item-price">&#36; 59.99</span>
      </div>
      <div className="featured-item">
        <img src="images/photo7.png" className="feature-image" alt="featured" />
        <span className="item-name">Basic white foulard</span>
        <span className="item-price">&#36; 9.99</span>
      </div>
      <div className="featured-item featured-last">
        <img src="images/photo8.png" className="feature-image" alt="featured" />
        <span className="item-name">White summer dress & hat</span>
        <span className="item-price">&#36; 49.99</span>
      </div>
    </div>
  </section>
);

export default FeaturedSpecials;
