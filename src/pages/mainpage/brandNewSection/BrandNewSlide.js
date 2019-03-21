import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'
import './brandNewSection.scss'
import SlideItem from './SlideItem';

class BrandNewSlide extends Component {

  render() {
    let items = this.props.slide.map(item => {
      return <Col xs={6} md={4}>
        <SlideItem item={item} key={item.name}/>
      </Col>
    });


    return (
        <Row>
          {items}
        </Row>
    );
  }
}

export default BrandNewSlide