import React, {Component} from 'react'
import './cartPage.scss'
import garbage from '../../resources/icons/garbage.svg'
import Link from 'react-router-dom/es/Link';
import AmountSelector from '../../components/amountselector/AmountSelector';


class CartPage extends Component {
  constructor() {
    super();

    this.state = {
      items: [1, 2, 3, 4]
    };

  }

  deleteItem(id) {
    this.setState((state) => ({items: state.items.filter(item => item.id !== id)}));
  }

  rows() {
    let content = [];
    for (let item in this.state.items) {
      content.push(
        <div className="mobile-row">
          <img
            className="garbage-icon"
            onClick={this.props.deleteItem}
            src={garbage}
            alt=""
          />
          <p>Necklace</p>

          <AmountSelector
            amount={1}
            addAmount={() => console.log("added")}
            removeAmount={() => console.log("removed")}
          />
        </div>
      );
    }

    return content;
  }

  render() {
    return (
      <div className="mobile">
        <div className="cart-page">
          <h1 className="cart-title">Checkout</h1>
          {this.rows()}

          <p> Total: €40.00 </p>

          <Link to={"/info"} className="link">
            <button type="submit" className="btn">Continue</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default CartPage