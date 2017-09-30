import React, { Component } from 'react';
import './index.css';

import HackathonSignUp from 'components/HackathonSignUp';
import hackathon from 'contents/hackathon.json';

export default class Hackathon extends Component {
  render() {
    return (
      <div className="Hackathon">
				<HackathonSignUp { ...hackathon }/>
      </div>
    );
  }
}
