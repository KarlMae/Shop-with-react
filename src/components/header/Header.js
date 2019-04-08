import React, {Component} from 'react'
import {FormControl, InputGroup} from 'react-bootstrap'
import './header.scss'
import search from '../../resources/icons/search.svg'
import close from '../../resources/icons/close.svg'
import cart from '../../resources/icons/cart.svg'
import hamburger from '../../resources/icons/hamburger.svg'
import {Link} from "react-router-dom";
import isMobile from '../../reducers/isMobile';
import {withRouter} from 'react-router';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSearchEnabled: false,
    };

    this.toggleSearch = this.toggleSearch.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({isSearchEnabled: false})
    }
  }

  toggleSearch() {
    this.setState((state) => ({isSearchEnabled: !state.isSearchEnabled}));
  }

  leftButton() {
    if (this.props.location.pathname === '/purchaseComplete') {
      return;
    }

    if (isMobile()) {
      if (this.props.location.pathname === '/') {
        return <img
          onClick={this.props.toggleHamburger}
          src={hamburger}
          alt="hamburger"
          className="logo"
        />
      } else {
        return (
          <Link to="/" className="link">
            <img
              onClick={this.props.history.goBack}
              src=''
              alt="back"
              className="left-logo logo"
            />
          </Link>
        )
      }
    }

    if (this.props.location.pathname === '/') {
      return (
          <img
            src={this.state.isSearchEnabled ? close : search}
            onClick={this.toggleSearch}
            alt="search"
            className="logo"
          />
      );
    } else {
      return (
        <Link to="/" className="link">
          <img
              src=''
              alt="search"
              className="left-logo logo"
            />
        </Link>
      )
    }
  }

  rightButton() {
    if (this.props.location.pathname === '/purchaseComplete') {
      return;
    }

    if (this.props.location.pathname !== '/cart' &&
      this.props.location.pathname !== '/info') {
      return (
        <Link to="/cart" className="link">
          <img className="right-logo logo" src={cart} alt="search"/>
        </Link>
      )
    }
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

export default withRouter(Header)