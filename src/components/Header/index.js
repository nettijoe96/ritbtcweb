import React, { Component } from 'react';
import './index.css';
import colors from 'colors.json'

/*
  use this for h1s.
*/

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{color:colors.light.accent}}>
        {this.props.children}
      </div>
    );
  }
}
export default Header;
