import React, {Component} from 'react'
import './custombutton.scss'

class CustomButton extends Component {

  classes() {
    let classes = 'custom-button';
    if (this.props.isFocused) {
      classes += ' button-underline'
    }
    return classes;
  }

  render() {
    return (
      <button
        className={this.classes()}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }
}

export default CustomButton