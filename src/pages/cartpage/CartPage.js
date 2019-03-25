import React, {Component} from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Col, Form, Row} from 'react-bootstrap'
import './cartPage.scss'
import CartItem from './CartItem';
import {Link} from "react-router-dom";


class CartPage extends Component {
  constructor() {
    super();

    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };

  }

  deleteItem(id) {
    this.setState((state) => ({items: state.items.filter(item => item.id !== id)}));
  }

  render() {
    return (
      <div>
        <Header isHomePage={false}/>
        <div className="cart-page">
          <h1 className="cart-title">Checkout</h1>
          <Row>
            <Col md={8}>
              <div className="cart">
                {this.state.items.map(item => <CartItem/>)}
              </div>
            </Col>
            <Col md={4}>
              <div className="payment-section">
                <Form>
                  <h3>Total cost €146.50</h3>
                  <br/>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>

                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>


                  <Link to={"/purchaseComplete"} className="link">
                    <button className="btn btn-swed">Swedbank</button>
                  </Link>

                  <Link to={"/purchaseComplete"} className="link">
                    <button type="submit" className="btn btn-seb">SEBbank</button>
                  </Link>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default CartPage