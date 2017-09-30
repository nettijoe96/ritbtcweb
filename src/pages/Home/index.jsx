import React, { Component } from 'react';
import './index.css';

//import Components
import Jumbotron from 'sections/Jumbotron'

//import Component Resources.
import JumbotronContent from 'contents/jumbotron.json'

import Hackathon from 'sections/Hackathon';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
          <Jumbotron content={JumbotronContent}/>
					<Hackathon />
      </div>
    );
  }
}
