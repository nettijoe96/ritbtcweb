import React, { Component } from 'react';
import './index.css';
import colors from 'colors.json'

/*
  use this for h1s.
  theme = light || dark
*/

/*
RIP Jumbotron Component. CSS:
color: #ffb629;
text-shadow: 0px 2px 2px #000;
font-size: 2em;
display: inline-block;
margin: 0px 50px;
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
