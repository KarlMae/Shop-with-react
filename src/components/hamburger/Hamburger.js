import React, {Component} from 'react'
import './hamburger.scss'

class Hamburger extends Component {

  static menuItems() {
    let items = ['Necklaces', 'Wristbands', 'Rings', 'Earrings'];
    let content = [];


    for (let i = 0; i < items.length; i++) {
      content.push(<p>{items[i]}</p>);
      content.push(<hr/>);
    }

    return content;
  }

  render() {
    return (
      <div className="hamburger">
        {Hamburger.menuItems()}
      </div>
    )
  }
}

export default Hamburger