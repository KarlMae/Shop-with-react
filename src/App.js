import React, {Component} from 'react';
import './App.scss';
import {HashRouter as Router, Route} from "react-router-dom";

import MainPage from './pages/mainpage/MainPage';
import ProductPage from './pages/productpage/ProductPage';
import CartPage from './pages/cartpage/CartPage';
import CartPageMobile from './pages/cartpage/CartPageMobile';
import InfoPageMobile from './pages/cartpage/InfoPageMobile';
import EndPage from './pages/endpage/EndPage';
import ScrollToTop from './util/ReactUtil/ScrollToTop';
import Header from './components/header/Header';
import isMobile from './reducers/isMobile';
import Footer from './components/footer/Footer';
import Hamburger from './components/hamburger/Hamburger';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isHamburgerDisplayed: false
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {
    this.setState(prevState => {
      return {
        isHamburgerDisplayed: !prevState.isHamburgerDisplayed,
      };
    })
  }

  render() {
    let hamburgerClass = this.state.isHamburgerDisplayed ? undefined : "hidden";

    return (
      <div className="App">
        <Router basename="/">
          <Header toggleHamburger={this.toggleHamburger}/>

          <div className={hamburgerClass}>
            <Hamburger onClose={() => this.toggleHamburger()}/>
          </div>

          <ScrollToTop>
            <Route exact path="/" component={MainPage}/>
            <Route path="/product/:name" component={ProductPage}/>
            <Route path="/cart" component={isMobile() ? CartPageMobile : CartPage}/>
            <Route path="/info" component={InfoPageMobile}/>
            <Route path="/purchaseComplete" component={EndPage}/>
          </ScrollToTop>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
