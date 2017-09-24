import React, { Component } from 'react';
import './index.css';

class Sector extends Component {
  render() {
    return (
      <div className="Sector" style={{backgroundColor:this.props.color}}>
        {this.props.children}
      </div>
    );
  }
}

export default Sector;
