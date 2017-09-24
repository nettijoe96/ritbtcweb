import React, { Component } from 'react';
import './index.css';

class BlockButton extends Component {
  render() {
    return (
      <div className="BlockButtonBlock">
        <div className="BlockButtonButton">
          {this.props.children}
        </div>
      </div>
    );
  }
}
// Props and state
// Props - between tags
// state - local value
export default BlockButton;
