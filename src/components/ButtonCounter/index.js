import React, { Component } from 'react';
import './index.css';

class ButtonCounter extends Component {
  // State Example
  state={
    count:0
  }
  // Merges automatically with all of state,only set one
  increase = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div className="ButtonCounter" onClick={this.increase}>
        {this.state.count}
      </div>
    );
  }
}

export default ButtonCounter;
