import React, {Component} from 'react'
import {ButtonGroup, Dropdown} from 'react-bootstrap'
import './contentmenu.scss'
import CustomButton from '../underlinebutton/CustomButton';
import {withRouter} from 'react-router';

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

  dropDown() {
    return this.props.location.pathname === '/' && (
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
    );
  }

  render() {
    return (
      <div className="d-flex flex-column navbar">
        <div className="full-width">
          <div className="nav-buttons">
            <ButtonGroup size="lg">
              {this.menuButtons()}
            </ButtonGroup>
          </div>
          <div className="dropdown">
            {this.dropDown()}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ContentMenu)