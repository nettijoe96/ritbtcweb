import React, { Component } from 'react';
import './index.css';

//import Components
import Jumbotron from 'components/Jumbotron'
import Header from 'components/Header'

//import Component Resources.
import JumbotronContent from 'content/jumbotron.json'
import colors from 'colors.json'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Jumbotron content={JumbotronContent}/>
          <Header>
            RITBTC
          </Header>
      </div>
    );
  }
}

export default App;
