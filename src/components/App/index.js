import React, { Component } from 'react';
import logo from 'logo.svg';
import './index.css';
import Button from 'components/Button';
import ButtonCounter from 'components/ButtonCounter';
import content from 'variable.json';

const buttons = content.data.map((b)=>{
  return(<Button>{b}</Button>)
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bitcoin Club</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {buttons}
        <ButtonCounter/>
      </div>
    );
  }
}

export default App;
