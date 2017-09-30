import React, { Component } from 'react';
import './index.css';

export default class NavItem extends Component {
  render() {
    return (
      <div className="NavItem">
        {this.props.children}
      </div>
    );
  }
}
