import React from 'react';

const FeaturedSpecials = () => (
  <section class="featured-specials-section clearfix">
    <div class="sections-title clearfix">
      <h2 class="h2-style">Featured items</h2>
      <a href="#">
        <img src="images/eye.png" class="eye" alt="eye" />
        view more items
      </a>
    </div>
    <div class="featured-contents">
      <div class="featured-item">
        <img src="images/photo1.png" class="feature-image" alt="featured" />
        <span class="item-name">Striped colorfull dress</span>
        <span class="item-price">&#36; 29.99</span>
      </div>
      <div class="featured-item">
        <img src="images/photo2.png" class="feature-image" alt="featured" />
        <img src="images/sale_tag.png" class="sale-tag" alt="sale" />
        <span class="item-name">Polka dot light blue blouse</span>
        <span class="item-price">
          &#36; 13.99 <span class="strike"> &#36; 36.99</span>
        </span>
      </div>
      <div class="featured-item">
        <img src="images/photo3.png" class="feature-image" alt="featured" />
        <span class="item-name">Basic sleeveless sweater</span>
        <span class="item-price">&#36; 39.99</span>
      </div>
      <div class="featured-item featured-last">
        <img src="images/photo4.png" class="feature-image" alt="featured" />
        <span class="item-name">Colorful summer dress</span>
        <span class="item-price">&#36; 26.99</span>
      </div>
      <div class="featured-item">
        <img src="images/photo5.png" class="feature-image" alt="featured" />
        <span class="item-name">Black & white polka dot dress</span>
        <span class="item-price">&#36; 29.99</span>
      </div>
      <div class="featured-item">
        <img src="images/photo6.png" class="feature-image" alt="featured" />
        <span class="item-name">Elegant sweater with tie</span>
        <span class="item-price">&#36; 59.99</span>
      </div>
      <div class="featured-item">
        <img src="images/photo7.png" class="feature-image" alt="featured" />
        <span class="item-name">Basic white foulard</span>
        <span class="item-price">&#36; 9.99</span>
      </div>
      <div class="featured-item featured-last">
        <img src="images/photo8.png" class="feature-image" alt="featured" />
        <span class="item-name">White summer dress & hat</span>
        <span class="item-price">&#36; 49.99</span>
      </div>
    </div>
  </section>
);

export default FeaturedSpecials;
