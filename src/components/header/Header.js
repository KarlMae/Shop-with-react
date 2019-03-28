import React, {Component} from 'react'
import {FormControl, InputGroup} from 'react-bootstrap'
import './header.scss'
import search from '../../resources/icons/search.svg'
import close from '../../resources/icons/close.svg'
import cart from '../../resources/icons/cart.svg'
import left from '../../resources/icons/left.svg'
import {Link} from "react-router-dom";


class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSearchEnabled: false,
    };

    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch() {
    this.setState((state) => ({isSearchEnabled: !state.isSearchEnabled}));
  }

  leftButton() {
    let leftButton;
    if (this.props.isHomePage) {
      leftButton = <img
        src={this.state.isSearchEnabled ? close : search}
        onClick={this.toggleSearch}
        alt="search"
        className="left-logo logo"
      />;
    } else {
      leftButton = (
        <a href={"/"} className="back-button-link">
          <img
            src={left}
            alt="search"
            className="logo"
          />
        </a>
      );
    }

    return leftButton;
  }

  rightButton() {
    return (
      <Link to="/cart" className="link">
        <img className="right-logo logo" src={cart} alt="search"/>
      </Link>
    )
  }

  middleSection() {
    let middleSection;

    if (this.state.isSearchEnabled) {
      middleSection = (
        <InputGroup>
          <FormControl
            placeholder="Search for product"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      );
    } else {
      middleSection = <h2 className="title">{"UrbAccessories"}</h2>
    }

    return middleSection;
  }

  render() {
    return (
      <header>
        {this.leftButton()}
        {this.middleSection()}
        {this.rightButton()}
      </header>
    )
  }
}

export default Header