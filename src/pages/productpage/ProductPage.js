import React, {Component} from 'react'
import Header from '../../components/header/Header';
import {Col, Overlay, Popover, Row} from 'react-bootstrap'
import './productPage.scss'
import mock from './mock';
import {convertMoney} from '../../util/moneyUtil';
import Footer from '../../components/footer/Footer';
import AmountSelector from '../../components/amountselector/AmountSelector';
import {Link} from 'react-router-dom';

class ProductPage extends Component {

  constructor() {
    super();
    this.state = {
      amount: 1,
      modalVisible: false,
      product: mock
    };

    this.addToCart = this.addToCart.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addAmount = this.addAmount.bind(this);
    this.removeAmount = this.removeAmount.bind(this);
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
    this.setState(prevState => {
      return {
        savedAmount: prevState.amount,
        amount: 1,
        modalVisible: true
      };
    })
  }

  closeModal() {
    this.setState(
      {
        modalVisible: false
      }
    );
  }

  closeButton() {
    return (
      <div className="item-added-header">
        <p>Item added</p>
        <button onClick={this.closeModal} className="item-added-close-button">X</button>
      </div>
    );
  }

  render() {
    console.log(document.getElementsByClassName("right-logo"));
    return (
      <div>
        <Overlay
          show={this.state.modalVisible}
          target={document.getElementsByClassName("right-logo")[0]}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title={this.closeButton()}>
            <p className="item-added-text">{this.state.savedAmount} x {this.state.product.name}</p>
            <img
              className="img-fluid item-added-image"
              src="https://crawler-cache-jellolabs-com.imgix.net/HMqErkx8zD49-TWv/source_photo.jpg?auto=compress%2Cformat&w=500&h=500&fit=clip"
              alt="alt"
            />
            <Link to="/" className="link">
              <button className="btn item-added-button">Back home</button>
            </Link>
          </Popover>
        </Overlay>
        <Header isHomePage={false}/>
        <div className="product-page">
          <Row>
            <Col md={5}>
              <img
                className="img-fluid"
                src="https://crawler-cache-jellolabs-com.imgix.net/HMqErkx8zD49-TWv/source_photo.jpg?auto=compress%2Cformat&w=500&h=500&fit=clip"
                alt="alt"
              />
            </Col>
            <Col>
              <div className="info-section">
                <h1 className="product-name">{this.state.product.name}</h1>
                <h2 className="product-price">{convertMoney(this.state.product.price)}</h2>
                <p className="product-description">{this.state.product.description}</p>

                <div className="input-section">
                  <div className="amount-section">
                    <AmountSelector
                      amount={this.state.amount}
                      addAmount={this.addAmount}
                      removeAmount={this.removeAmount}
                    />
                    <p className="total">Total: {convertMoney(this.state.product.price * this.state.amount)}</p>
                  </div>

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
        <Footer/>
      </div>
    )
  }
}

export default ProductPage