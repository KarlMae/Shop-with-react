import React, {Component} from 'react'
import './endPage.scss'
import {Link} from "react-router-dom";

class EndPage extends Component {

  render() {
    return (
      <div>
        <div className="final-page">
          <h1>Thank you for your purchase</h1>

          <Link to={"/"} className="link">
            <button type="submit" className="btn">Back home</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default EndPage