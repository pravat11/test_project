import React from 'react';

const Blog = () => (
  <section class="latest-from-blog clearfix">
    <div class="left-wrapper">
      <div class="col3-l">
        <div class="sections-title clearfix">
          <h2 class="h2-style">Latest from news blog</h2>
        </div>
        <div class="blog-contents">
          <span class="blog-titles">Praesent feugiat felis congue nulla dapibus</span>
          <span class="date-and-comments">
            <img src="images/date.png" class="date-image" alt="date" />
            <span class="date">May 23, 2012</span>
            <img src="images/comment.png" class="comment-image" alt="comment" />
            <span class="comment">6</span>
          </span>
          <p class="blog-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh risus. Morbi dapibus lectus
            at erat viverra malesuada. Phasellus congue nulla eu turpis.accumsan. &nbsp;<a href="#">Read more +</a>
          </p>
        </div>
        <div class="blog-contents">
          <span class="blog-titles">Aliquam feugiat imperdiet orcinon mattis</span>
          <span class="date-and-comments">
            <img src="images/date.png" class="date-image" alt="date" />
            <span class="date">May 15, 2012</span>
            <img src="images/comment.png" class="comment-image" alt="comment" />
            <span class="comment">12</span>
          </span>
          <p class="blog-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum risus vitae aliquet libero volutpat.
            Integer viverra quam tempus dolor condimentum ut euismod leo feugiat. &nbsp;<a href="#">Read more +</a>
          </p>
        </div>
        <div class="blog-contents-last">
          <span class="blog-titles">Consectetur adipiscing etiamts adipiscing</span>
          <span class="date-and-comments">
            <img src="images/date.png" class="date-image" alt="date" />
            <span class="date">May 11, 2012</span>
            <img src="images/comment.png" class="comment-image" alt="comment" />
            <span class="comment">0</span>
          </span>
          <p class="blog-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh risus. Morbi malesuada.
            Phasellus congue nulla eu turpis volutpat adipiscing. Nam risus ligula, accumsan. &nbsp;
            <a href="#">Read more +</a>{' '}
          </p>
        </div>
      </div>
      <div class="col3-m">
        <div class="sections-title clearfix">
          <h2 class="h2-style">Best sellers</h2>
        </div>
        <div class="best-sellers-container">
          <div class="best-seller-item first">
            <img src="images/photo1.png" class="best-seller-image" alt="item1" />
            <img src="images/sale_tag.png" class="sale-tag" alt="sale-tag" />
            <span class="item-price">&#36; 9.99</span>
          </div>
          <div class="best-seller-item second">
            <img src="images/photo6.png" class="best-seller-image" alt="item1" />
            <span class="item-price">&#36; 59.99</span>
          </div>
          <div class="best-seller-item first">
            <img src="images/photo4.png" class="best-seller-image" alt="item1" />
            <span class="item-price">&#36; 29.99</span>
          </div>
          <div class="best-seller-item second">
            <img src="images/photo8.png" class="best-seller-image" alt="item1" />
            <span class="item-price">&#36; 39.99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col3-r">
      <div class="sections-title clearfix">
        <h2 class="h2-style">About & Contacts</h2>
      </div>
      <div class="blog-contents col3-r-body">
        <p>
          Mecenas quis porta in, condimentum eget arcu. Fringilla aliquam ultricies pellente sque vel turpis nec leo
          tincidunt sollicitudin ac non risus. Ves tibu lum ultrices feugiat velit, quis tincidunt velit volutpat nec.
          Vivamus pharetra fringilla augue, elementum ante ultrices tincidunt. Aenean consequat tincidunt.
        </p>
        <p>
          Quisque scelerisque augue eu turpis condimentum iaculis. Cras adipiscing lobortis convallis. Nam eu augue
          lorem.
        </p>
        <span class="phone">
          <img src="images/phone.png" class="phone-image" alt="contact" />
          <span class="phone-number">7-685-531-2605</span>
        </span>
        <img src="images/message.png" class="message-image" alt="contact" />
        <span class="email">info@planetshine.net</span>
      </div>
    </div>
  </section>
);

export default Blog;
