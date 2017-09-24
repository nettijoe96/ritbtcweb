import React, { Component } from 'react';
import logo from 'logo.svg';
import './index.css';
import Button from 'components/Button';
import ButtonCounter from 'components/ButtonCounter';
import content from 'variable.json';
import Sector from 'components/Sector'
import BlockButton from 'components/BlockButton'

/*
COLOR SCHEME
DARKS
#000000 - Black
#1e1e1e - Slate? Gray
#37123c - Purple, darkish
LIGHTS
#FFFFFF - White
#87f5fb - Light Blue/Cyan
#FFb629 - Bitcoin Orange
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bitcoin Club!</h1>
          <p style={{color:'white'}}>
            Welcome! Come learn about RIT, BTC, ETC!
          </p>
          <BlockButton>
          Click Me!
          </BlockButton>
        </div>
      </div>
    );
  }
}

export default App;
