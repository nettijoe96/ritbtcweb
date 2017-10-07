import React, {
	Component
} from 'react';
import './index.css';

import Button from 'components/Button';

// Gimme Colors
import colors from 'colors.json'

// Gimme Content to put in the Pieces.
import {title, paragraph, subtitle, signinUrl} from 'contents/jumbotron.json'

class Jumbotron extends Component {
	render() {
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
						{paragraph}
					</h2>
					<h3>
						{subtitle}
					</h3>
				</div>

				<Button link={signinUrl}>
					- sign in -
				</Button>


			</div>
		);
	}
}
export default Jumbotron;
