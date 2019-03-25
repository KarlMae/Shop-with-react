import React, {Component} from 'react'
import './footer.scss'
import {Col, Row} from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col md={8}>
            <h4 className="footer-menu">About us</h4>
            <h4 className="footer-menu">Frequently asked questions</h4>
            <h4 className="footer-menu">Shipping info</h4>
          </Col>

          <Col className="contact-info">
            <p>Tester Testerson</p>
            <p>Tester street 10</p>
            <p>+372 49 47282 17</p>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer