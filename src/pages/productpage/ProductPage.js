import React, {Component} from 'react'
import Header from '../../components/header/Header';
import {Col, Row} from 'react-bootstrap'
import './productPage.scss'
import mock from './mock';
import {convertMoney} from '../../util/moneyUtil';
import Footer from '../../components/footer/Footer';
import ProductPageModal from './ProductPageModal';
import AmountSelector from '../../components/amountselector/AmountSelector';

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

  componentDidMount() {
    window.scrollTo(0, 0)
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
    this.setState(
      {
        amount: 1,
        modalVisible: true
      }
    );
  }

  closeModal() {
    this.setState(
      {
        modalVisible: false
      }
    );
  }

  render() {
    return (
      <div>
        <ProductPageModal
          productName={this.state.product.name}
          modalVisible={false}
          closeModal={this.closeModal}
        />

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