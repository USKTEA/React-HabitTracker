import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick}
        className={this.props.class}
        id={this.props.css}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
