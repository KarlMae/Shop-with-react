import React, {Component} from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './endPage.scss'
import {Link} from "react-router-dom";

class EndPage extends Component {

  render() {
    return (
      <div>
        <Header isHomePage={false}/>
        <div className="final-page">
          <h1>Thank you for your purchase</h1>

          <Link to={"/"} className="link">
            <button type="submit" className="btn">Back home</button>
          </Link>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default EndPage