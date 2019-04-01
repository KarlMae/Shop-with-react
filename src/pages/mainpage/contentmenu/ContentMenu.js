import React, {Component} from 'react'
import {ButtonGroup, Col, Dropdown} from 'react-bootstrap'
import './contentmenu.scss'
import CustomButton from '../../../components/underlinebutton/CustomButton';

class ContentMenu extends Component {

  menuButtons() {
    let buttons = ['Necklaces', 'Wristbands', 'Rings', 'Earrings'];
    let buttonComponents = [];
    buttons.forEach(button => {
      buttonComponents.push(
        <CustomButton
          onClick={() => this.props.setSelectedMenuItem(button)}
          isFocused={this.props.selectedMenuItem === button}
          text={button}
          key={button}
        />
      );
    });

    return buttonComponents;
  }

  render() {
    return (
      <div className="d-flex flex-column navbar">
        <div className="full-width">
          <Col md={10}>
            <ButtonGroup size="lg">
              {this.menuButtons()}
            </ButtonGroup>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Order by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>What's new</Dropdown.Item>
                <Dropdown.Item>Price high to low</Dropdown.Item>
                <Dropdown.Item>Price low to high</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </div>
      </div>
    )
  }
}

export default ContentMenu