import React, {
	Component
} from 'react';
import './index.css';

import {DAYS} from 'api';

import Button from 'components/Button';

// Gimme Colors
import colors from 'colors.json'

// Gimme Content to put in the Pieces.
import {title, date, time, subtitle, buttonText, buttonHref} from 'contents/jumbotron.json'

class Jumbotron extends Component {
	render() {
		const today = new Date();

		const showSignin = DAYS[today.getDay()] === date;

		return(
			<div className="Jumbotron" style={{
					backgroundColor:colors.dark.off
				}}>
				<div className="Header">
					<h1>
						{title}
					</h1>
					<hr/>
					<h2>
						{date} {time}
					</h2>
					<h3>
						{subtitle}
					</h3>
				</div>

				{showSignin &&
					<Button link={buttonHref} style={{width: "360px"}}>
						{buttonText}
					</Button>
				}

			</div>
		);
	}
}
export default Jumbotron;
