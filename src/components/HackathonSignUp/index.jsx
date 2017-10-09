import React, { Component } from 'react';
import './index.css';

import Button from 'components/Button';

export default class HackathonSignUp extends Component {
  render() {
		const {title, date, subtitle, buttons} = this.props

    return (
      <div className="HackathonSignUp">
				<h1>
					{title} 
				</h1>

				<h2>
					{date}
				</h2>

				<h3>
					{subtitle}
				</h3>

				<div className="ButtonContainer">
					{buttons.map(({text, link, className}) => (
						<Button key={text} link={link} className={className}
							style={{marginRight: "25px"}}>{text}</Button>
					))}
				</div>
      </div>
    );
  }
}
