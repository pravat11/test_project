import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import SliderImage from '../../assets/images/slider-image.png';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

const Slider = () => (
  <section className="slider-section">
    <Carousel>
      <CarouselItem>
        <img src={SliderImage} className="slider-image" alt="slider-image" />
        <CarouselCaption>
          <div className="slider-texts">
            <span className="slider-text-above">Lorem ipsum dolor sitamet consectetur</span>
            <p>
              Vivamus fermentum dictum rhoncus. Ut molestie vehicula ipsum sed sagittis. Aenean euismod odio ac risus
              vulputate ultricies. Nam tincidunt ornare turpis, sit amet mattis. &nbsp;<a href="#">Read more+</a>
            </p>
          </div>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={SliderImage} className="slider-image" alt="slider-image" />
        <CarouselCaption>
          <div className="slider-texts">
            <span className="slider-text-above">Lorem ipsum dolor sitamet consectetur</span>
            <p>
              Vivamus fermentum dictum rhoncus. Ut molestie vehicula ipsum sed sagittis. Aenean euismod odio ac risus
              vulputate ultricies. Nam tincidunt ornare turpis, sit amet mattis. &nbsp;<a href="#">Read more+</a>
            </p>
          </div>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={SliderImage} className="slider-image" alt="slider-image" />
        <CarouselCaption>
          <div className="slider-texts">
            <span className="slider-text-above">Lorem ipsum dolor sitamet consectetur</span>
            <p>
              Vivamus fermentum dictum rhoncus. Ut molestie vehicula ipsum sed sagittis. Aenean euismod odio ac risus
              vulputate ultricies. Nam tincidunt ornare turpis, sit amet mattis. &nbsp;<a href="#">Read more+</a>
            </p>
          </div>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  </section>
);

export default Slider;
