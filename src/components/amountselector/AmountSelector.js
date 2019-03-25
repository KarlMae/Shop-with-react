import React, {Component} from 'react'
import './amountSelector.scss'

class AmountSelector extends Component {
  render() {
    return (
      <div className="amount-selector">
        <button
          onClick={() => this.props.removeAmount()}
          className="button nav-button">
          -
        </button>

        <p className="amount">{this.props.amount}</p>

        <button
          onClick={() => this.props.addAmount()}
          className="button nav-button">
          +
        </button>
      </div>
    );
  }
}

export default AmountSelector;