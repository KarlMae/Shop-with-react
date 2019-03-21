import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";


import MainPage from './pages/mainpage/MainPage';
import ProductPage from './pages/productpage/ProductPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route path="/product/:name" component={ProductPage} />
        </Router>
      </div>
    );
  }
}

export default App;
