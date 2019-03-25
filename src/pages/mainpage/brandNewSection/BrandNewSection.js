import React, {Component} from 'react'
import './brandNewSection.scss'
import {Carousel, Container} from 'react-bootstrap'
import BrandNewSlide from './BrandNewSlide';
import slides from './MockResponse'

class BrandNewSection extends Component {
  render() {
    const slideComponents = slides.map((slide) => {
      return (
        <Carousel.Item>
          <BrandNewSlide slide={slide.slide.items} key={slide.id}/>
        </Carousel.Item>
      );
    });

    return (
      <div className="brand-new-container">
        <Container>
          <h1 className="brand-new-header">Brand new</h1>
          <Carousel>
            {slideComponents}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default BrandNewSection