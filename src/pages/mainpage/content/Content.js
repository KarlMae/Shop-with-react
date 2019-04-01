import React, {Component} from 'react'
import './content.scss'
import {Container} from 'react-bootstrap'
import items from './mockResponse'
import Item from '../../../components/item/Item';
import Paging from '../../../components/paging/Paging';
import ContentMenu from '../contentmenu/ContentMenu';
import isMobile from '../../../reducers/isMobile';



class Content extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      pageSize: 30,
      pageCount: 10,
      selectedMenuItem: ''
    };
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
    this.setPageSize = this.setPageSize.bind(this);
    this.setSelectedMenuItem = this.setSelectedMenuItem.bind(this);
  }

  componentDidUpdate() {
    let scrollLength = isMobile() ? 0 : 620;
    window.scroll({
      top: scrollLength,
      left: 0,
      behavior: 'smooth'
    });
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

  setPageSize(size) {
    this.setState({pageSize: size});
  }

  setPageNumber(page) {
    this.setState({currentPage: page});
  }

  setSelectedMenuItem(item) {
    this.setState({selectedMenuItem: item});
  }

  conntentMenu() {
    if (!isMobile()) {
      return <ContentMenu
        selectedMenuItem={this.state.selectedMenuItem}
        setSelectedMenuItem={this.setSelectedMenuItem}
      />
    }
  }

  render() {
    return (
      <Container>
        {this.conntentMenu()}
        <div className="item-container">
          {items.map(item => <Item item={item}/>)}
        </div>
        <Paging
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          setPageNumber={this.setPageNumber}
          setPageSize={this.setPageSize}
          currentPage={this.state.currentPage}
          pageCount={this.state.pageCount}
          pageSize={this.state.pageSize}
        />
      </Container>
    )
  }
}

export default Content