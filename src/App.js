import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";

import MainPage from './pages/mainpage/MainPage';
import ProductPage from './pages/productpage/ProductPage';
import CartPage from './pages/cartpage/CartPage';
import EndPage from './pages/endpage/EndPage';
import ScrollToTop from './util/ReactUtil/ScrollToTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={MainPage}/>
            <Route path="/product/:name" component={ProductPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/purchaseComplete" component={EndPage}/>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
