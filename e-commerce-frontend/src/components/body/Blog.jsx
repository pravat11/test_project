import React from 'react';

const Blog = () => (
  <section className="latest-from-blog clearfix">
    <div className="left-wrapper">
      <div className="col3-l">
        <div className="sections-title clearfix">
          <h2 className="h2-style">Latest from news blog</h2>
        </div>
        <div className="blog-contents">
          <span className="blog-titles">Praesent feugiat felis congue nulla dapibus</span>
          <span className="date-and-comments">
            <img src="images/date.png" className="date-image" alt="date" />
            <span className="date">May 23, 2012</span>
            <img src="images/comment.png" className="comment-image" alt="comment" />
            <span className="comment">6</span>
          </span>
          <p className="blog-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh risus. Morbi dapibus lectus
            at erat viverra malesuada. Phasellus congue nulla eu turpis.accumsan. &nbsp;<a href="#">Read more +</a>
          </p>
        </div>
        <div className="blog-contents">
          <span className="blog-titles">Aliquam feugiat imperdiet orcinon mattis</span>
          <span className="date-and-comments">
            <img src="images/date.png" className="date-image" alt="date" />
            <span className="date">May 15, 2012</span>
            <img src="images/comment.png" className="comment-image" alt="comment" />
            <span className="comment">12</span>
          </span>
          <p className="blog-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum risus vitae aliquet libero volutpat.
            Integer viverra quam tempus dolor condimentum ut euismod leo feugiat. &nbsp;<a href="#">Read more +</a>
          </p>
        </div>
        <div className="blog-contents-last">
          <span className="blog-titles">Consectetur adipiscing etiamts adipiscing</span>
          <span className="date-and-comments">
            <img src="images/date.png" className="date-image" alt="date" />
            <span className="date">May 11, 2012</span>
            <img src="images/comment.png" className="comment-image" alt="comment" />
            <span className="comment">0</span>
          </span>
          <p className="blog-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh risus. Morbi malesuada.
            Phasellus congue nulla eu turpis volutpat adipiscing. Nam risus ligula, accumsan. &nbsp;
            <a href="#">Read more +</a>{' '}
          </p>
        </div>
      </div>
      <div className="col3-m">
        <div className="sections-title clearfix">
          <h2 className="h2-style">Best sellers</h2>
        </div>
        <div className="best-sellers-container">
          <div className="best-seller-item first">
            <img src="images/photo1.png" className="best-seller-image" alt="item1" />
            <img src="images/sale_tag.png" className="sale-tag" alt="sale-tag" />
            <span className="item-price">&#36; 9.99</span>
          </div>
          <div className="best-seller-item second">
            <img src="images/photo6.png" className="best-seller-image" alt="item1" />
            <span className="item-price">&#36; 59.99</span>
          </div>
          <div className="best-seller-item first">
            <img src="images/photo4.png" className="best-seller-image" alt="item1" />
            <span className="item-price">&#36; 29.99</span>
          </div>
          <div className="best-seller-item second">
            <img src="images/photo8.png" className="best-seller-image" alt="item1" />
            <span className="item-price">&#36; 39.99</span>
          </div>
        </div>
      </div>
    </div>
    <div className="col3-r">
      <div className="sections-title clearfix">
        <h2 className="h2-style">About & Contacts</h2>
      </div>
      <div className="blog-contents col3-r-body">
        <p>
          Mecenas quis porta in, condimentum eget arcu. Fringilla aliquam ultricies pellente sque vel turpis nec leo
          tincidunt sollicitudin ac non risus. Ves tibu lum ultrices feugiat velit, quis tincidunt velit volutpat nec.
          Vivamus pharetra fringilla augue, elementum ante ultrices tincidunt. Aenean consequat tincidunt.
        </p>
        <p>
          Quisque scelerisque augue eu turpis condimentum iaculis. Cras adipiscing lobortis convallis. Nam eu augue
          lorem.
        </p>
        <span className="phone">
          <img src="images/phone.png" className="phone-image" alt="contact" />
          <span className="phone-number">7-685-531-2605</span>
        </span>
        <img src="images/message.png" className="message-image" alt="contact" />
        <span className="email">info@planetshine.net</span>
      </div>
    </div>
  </section>
);

export default Blog;
