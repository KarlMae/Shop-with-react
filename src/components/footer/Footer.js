import React, {Component} from 'react'
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer>
          <h2 className="footer-menu">About us</h2>
          <h2 className="footer-menu">Frequently asked questions</h2>
          <h2 className="footer-menu">Shipping info</h2>
      </footer>
    )
  }
}

export default Footer