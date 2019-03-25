import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import './productPage.scss'
import {Link} from "react-router-dom";


class ProductPageModal extends Component {

  render() {
    return (
      <Modal show={this.props.modalVisible} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.productName} added to cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          <Link to="/" className="link">
            <Button variant="primary">
              Back shopping
            </Button>
          </Link>

        </Modal.Footer>
      </Modal>
    )
  }
}

export default ProductPageModal