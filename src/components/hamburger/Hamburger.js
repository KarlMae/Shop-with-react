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
      <div>
        <div className="hamburger">
          {Hamburger.menuItems()}
        </div>
        <div
          className="back-drop"
          onClick={() => this.props.onClose()}>
        </div>
      </div>
    )
  }
}

export default Hamburger