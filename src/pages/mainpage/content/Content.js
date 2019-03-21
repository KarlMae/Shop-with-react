import React, {Component} from 'react'
import './content.scss'
import {Container} from 'react-bootstrap'
import items from './mockResponse'
import Item from './Item';
import Paging from '../../../components/paging/Paging';
import ContentMenu from '../contentmenu/ContentMenu';


class Content extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      pageSize: 15,
      pageCount: 10,
      selectedMenuItem: ''
    };
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
    this.setSelectedMenuItem = this.setSelectedMenuItem.bind(this);
  }

  nextPage() {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1
      };
    })
  }

  previousPage() {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage - 1
      };
    })
  }

  setPageNumber(page) {
    this.setState({currentPage: page});
  }

  setSelectedMenuItem(item) {
    this.setState({selectedMenuItem: item});
  }

  render() {
    return (
      <Container>
        <ContentMenu
          selectedMenuItem={this.state.selectedMenuItem}
          setSelectedMenuItem={this.setSelectedMenuItem}
        />
        <div className="item-container">
          {items.map(item => <Item item={item}/>)}
        </div>
        <Paging
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          setPageNumber={this.setPageNumber}
          currentPage={this.state.currentPage}
          pageCount={this.state.pageCount}
          pageSize={this.state.pageSize}
        />
      </Container>
    )
  }
}

export default Content