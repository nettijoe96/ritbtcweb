import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  render() {
    return (
      <div className="Button" style={{borderRadius:this.props.corners}}>
        {this.props.children}
      </div>
    );
  }
}
// Props and state
// Props - between tags
// state - local value
export default Button;
