import React, { Component } from 'react';
import './index.css';

import HackathonSignUp from 'components/HackathonSignUp';
import hackathon from 'contents/hackathon.json';
import logo from './logo.png'


export default class Hackathon extends Component {
  render() {
    return (
      <div className="Hackathon">
				<img className="HackathonBanner" alt={"Hackathon Banner Yo!"} src={logo}/>
				<HackathonSignUp { ...hackathon }/>
      </div>
    );
  }
}
//201e1f dark for index.css
