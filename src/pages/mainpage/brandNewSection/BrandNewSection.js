import React, {Component} from 'react'
import { Container, Carousel } from 'react-bootstrap'
import BrandNewSlide from './BrandNewSlide';
import slides from './MockResponse'
import './brandNewSection.scss'

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
        <Container>
          <h1 className="brand-new-header">Brand new</h1>
          <Carousel>
            {slideComponents}
          </Carousel>
        </Container>
    );
  }
}

export default BrandNewSection