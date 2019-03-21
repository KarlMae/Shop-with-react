import React, {Component} from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import './header.scss'
import search from '../../resources/icons/search.svg'
import close from '../../resources/icons/close.svg'
import cart from '../../resources/icons/cart.svg'
import { Link } from "react-router-dom";


class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSearchEnabled: false,
    };

    this.openSearch = this.openSearch.bind(this)
  }

  openSearch() {
    this.setState((state) => ({ isSearchEnabled: !state.isSearchEnabled}));
  }

  leftButton() {
    let leftButton;
    if (this.props.isHomePage) {
      leftButton = <img
        src={this.state.isSearchEnabled ? close : search}
        onClick={this.openSearch}
        alt="search"
        className="logo"
      />;
    } else {
      leftButton = (
        <a href={"/"} className="back-button-link">
          <h1 className="back-button">{"<"}</h1>
        </a>
      );
    }

    return leftButton;
  }

  rightButton() {
    let rightButton;
    if (this.props.isHomePage) {
      rightButton = (
        <Link
          to="/product"
          className="link"
        >
          <img
            className="logo"
            src={cart}
            alt="search"
          />
        </Link>
      );
    } else {
      rightButton = <h1 className="back-button">{""}</h1>
    }

    return rightButton;
  }

  middleSection() {
    let middleSection;

    if (this.state.isSearchEnabled) {
      middleSection = (
        <InputGroup>
          <FormControl
            placeholder="Search for product"
            aria-label="Search for product"
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