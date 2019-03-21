import React, {Component} from 'react'
import { ButtonGroup, Dropdown, Col } from 'react-bootstrap'
import './contentmenu.scss'
import CustomButton from '../../../components/custombutton/CustomButton';

class ContentMenu extends Component {

  menuButtons() {
    let buttons = ['Necklaces', 'Wristbands', 'Rings', 'Earrings'];
    let buttonComponents = [];
    buttons.forEach( button => {
      buttonComponents.push(
        <CustomButton
          onClick={() => this.props.setSelectedMenuItem(button)}
          isFocused={this.props.selectedMenuItem === button}
          text={button}
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
                <Dropdown.Item href="#/action-1">What's new</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Price high to low</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Price low to high</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </div>
      </div>
    )
  }
}

export default ContentMenu