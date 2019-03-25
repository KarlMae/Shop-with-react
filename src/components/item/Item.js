import React, {Component} from 'react'
import './item.scss'
import {Link} from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <Link to={"/product/" + this.props.item.id} className="link">
          <img src={this.props.item.img} alt="mine" className="item-image"/>
        </Link>
        <p className="name-tag">{this.props.item.name}</p>
        <p className="price-tag">{this.props.item.price}</p>
      </div>
    )
  }
}

export default Item