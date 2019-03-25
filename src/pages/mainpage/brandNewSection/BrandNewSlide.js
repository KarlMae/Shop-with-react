import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import './brandNewSection.scss'
import Item from '../../../components/item/Item';

class BrandNewSlide extends Component {

  render() {
    let items = this.props.slide.map(item => {
      return <Col xs={6} md={4}>
        <Item item={item} key={item.id}/>
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