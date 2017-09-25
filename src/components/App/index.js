import React, { Component } from 'react';
import './index.css';

//import Components
import Jumbotron from 'sections/Jumbotron'

//import Component Resources.
import JumbotronContent from 'content/jumbotron.json'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Jumbotron content={JumbotronContent}/>
      </div>
    );
  }
}

export default App;
