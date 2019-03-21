import React, {Component} from 'react'
import './brandNewSection.scss'

class SlideItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.img} alt="mine" className="item-image"/>
        <p className="name-tag">{this.props.item.name}</p>
        <p className="price-tag">{this.props.item.price}</p>
      </div>
    );
  }
}

export default SlideItem