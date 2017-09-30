import React, { Component } from 'react';
import './index.css';

import HackathonSignUp from 'components/HackathonSignUp';
import hackathon from 'contents/hackathon.json';

export default class Hackathon extends Component {
  render() {
    return (
      <div className="Hackathon">
				<img className="HackathonBanner" alt={"Hackathon Banner Yo!"} src={"https://brickhack.io/assets/scroller-ebcb5017b5ac4739bd066dbedb60bea86dccc302fbfbde3fa336e2c4996b4e66.png"}/>
				<HackathonSignUp { ...hackathon }/>
      </div>
    );
  }
}
