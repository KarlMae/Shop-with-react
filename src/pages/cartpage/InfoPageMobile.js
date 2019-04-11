import React, {Component} from 'react'
import './cartPage.scss'
import CartItem from './CartItem';
import items from '../mainpage/content/mockResponse';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/es/Form';


class CartPage extends Component {
  constructor() {
    super();

    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };

  }

  deleteItem(id) {
    this.setState((state) => ({items: state.items.filter(item => item.id !== id)}));
  }

  static content() {
    let content = [];
    for (let i = 0; i < items.length / 4; i++) {
      let children = [];
      for (let j = 0; j < 4; j++) {
        content.push(
          <td>
            <CartItem/>
          </td>)
      }
      content.push(<tr>{children}</tr>);
    }

    return content;
  }

  render() {
    return (
      <div className="mobile-info">
        <Form>
          <h3>Total cost €146.50</h3>
          <br/>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>


          <Link to={"/purchaseComplete"} className="link">
            <button className="btn btn-swed">Swedbank</button>
          </Link>

          <Link to={"/purchaseComplete"} className="link">
            <button type="submit" className="btn btn-seb">SEBbank</button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default CartPage