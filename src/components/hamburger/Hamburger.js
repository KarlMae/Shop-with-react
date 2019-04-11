import React, {Component} from 'react'
import './hamburger.scss'
import {withRouter} from 'react-router-dom';

class Hamburger extends Component {

  constructor(props) {
    super(props);

  }

  menuItems() {
    let items = ['Necklaces', 'Wristbands', 'Rings', 'Earrings'];
    let content = [];


    for (let i = 0; i < items.length; i++) {
      content.push(
        <div
          className="hamburger-button"
          onClick={(selection) => {
            this.props.onClose();

            this.props.history.push(
              {
                pathname: '/',
                state: {
                  category: selection
                },
              })
          }}
        >
          <p>{items[i]}</p>
          <hr/>
        </div>
      )
    }

    return content;
  }

  render() {
    return (
      <div>
        <div className="hamburger">
          {this.menuItems()}
        </div>
        <div
          className="back-drop"
          onClick={() => this.props.onClose()}>
        </div>
      </div>
    )
  }
}

export default withRouter(Hamburger)