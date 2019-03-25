import React, {Component} from 'react'
import {Dropdown} from 'react-bootstrap'
import './paging.scss'

class Paging extends Component {

  previousButton() {
    return (
      <button
        disabled={this.props.currentPage <= 1}
        onClick={this.props.previousPage}
        className="button nav-button"
      >
        {"<"}
      </button>
    );
  }

  nextButton() {
    return (
      <button
        disabled={this.props.currentPage >= this.props.pageCount}
        onClick={this.props.nextPage}
        className="button nav-button"
      >
        {">"}
      </button>
    );
  }

  previousPages() {
    let additionalPages = this.props.currentPage - this.props.pageCount + 2;
    additionalPages = additionalPages < 0 ? 0 : additionalPages;
    additionalPages += 3;

    let pages = [];
    for (let i = this.props.currentPage - 1; i > 0 && i > this.props.currentPage - additionalPages; i--) {
      pages.unshift(
        <button
          className="button"
          onClick={() => this.props.setPageNumber(i)}>
          {i}
        </button>
      );
    }

    return pages;
  }

  nextPages() {
    let additionalPages = 3 - this.props.currentPage;
    additionalPages = additionalPages < 0 ? 0 : additionalPages;
    additionalPages += 3;

    let pages = [];
    for (let i = this.props.currentPage + 1;
         i <= this.props.pageCount && i < this.props.currentPage + additionalPages;
         i++) {
      pages.push(
        <button
          className="button"
          key={i}
          onClick={() => this.props.setPageNumber(i)}>
          {i}
        </button>
      );
    }

    return pages;
  }

  render() {
    return (
      <div className="paging-wrapper">
        <div/>
        <div className="paging">
          {this.previousButton()}
          {this.previousPages()}

          <p className="current-page">
            {this.props.currentPage}
          </p>

          {this.nextPages()}
          {this.nextButton()}
        </div>
        <div className="page-count">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Items per page
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">30</Dropdown.Item>
              <Dropdown.Item href="#/action-2">60</Dropdown.Item>
              <Dropdown.Item href="#/action-3">90</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Paging