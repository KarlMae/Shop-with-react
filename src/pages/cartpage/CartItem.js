import React, {Component} from 'react'
import garbage from '../../resources/icons/garbage.svg'
import AmountSelector from '../../components/amountselector/AmountSelector'


class CartItem extends Component {

  constructor() {
    super();

    this.state = {
      amount: 1
    };

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
      if (prevState.amount > 1) {
        return {
          amount: prevState.amount - 1
        };
      }
    })
  }

  render() {
    return (
      <div className="cart-item">
        <div className="header">
          <p className="item-name"> Necklace </p>
          <img
            className="garbage-icon"
            onClick={this.props.deleteItem}
            src={garbage}
            alt=""
          />
        </div>
        <img
          src="https://crawler-cache-jellolabs-com.imgix.net/yJAMHIeVB1VHLBya/source_photo.jpg?auto=compress%2Cformat&w=500&h=500&fit=clip"
          alt=""
          className="cart-item-image"
        />

        <p className="cart-price-tag">Price: €13.00</p>

        <AmountSelector
          amount={this.state.amount}
          addAmount={this.addAmount}
          removeAmount={this.removeAmount}
        />


      </div>
    )
  }
}

export default CartItem