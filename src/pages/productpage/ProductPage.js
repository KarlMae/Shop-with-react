import React, {Component} from 'react'
import Header from '../../components/header/Header';
import { Col, Row } from 'react-bootstrap'
import './productPage.scss'
import mock from './mock';
import {convertMoney} from '../../util/moneyUtil';

class ProductPage extends Component {

  constructor() {
    super();
    this.state = {
      product: mock,
      amount: 1
    };
  }

  addAmount() {
    this.setState(prevState => {
      return {
        amount: prevState.amount + 1
      };
    })
  }

  removeAmount() {
    this.setState(prevState => {
      return {
        amount: prevState.amount - 1
      };
    })
  }

  addToCart() {
    //Toggle modal
    //Add to cart
    this.setState({amount: 1})
  }

  render() {
    return (
      <div>
        <Header isHomePage={false}/>
        <div className="product-page">
          <Row>
            <Col md={5}>
              <img src="https://crawler-cache-jellolabs-com.imgix.net/HMqErkx8zD49-TWv/source_photo.jpg?auto=compress%2Cformat&w=500&h=500&fit=clip" alt="alt"/>
            </Col>
            <Col>
              <div className="info-section">
                <h1>{this.state.product.name}</h1>
                <h2>{convertMoney(this.state.product.price)}</h2>
                <p>{this.state.product.description}</p>


                <div className="amount-section">
                  <button
                    className="button nav-button"
                    onClick={() => this.removeAmount()}>
                    -
                  </button>

                  <p className="amount">{this.state.amount}</p>

                  <button
                    className="button nav-button"
                    onClick={() => this.addAmount()}>
                    +
                  </button>

                  <p className="total">Total: {convertMoney(this.state.product.price * this.state.amount)}</p>
                </div>

                <div>
                  <button
                    className="cart-button nav-button"
                    onClick={() => this.addToCart()}>
                    Add to cart
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default ProductPage