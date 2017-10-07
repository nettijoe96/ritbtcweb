import React, {
	Component
} from 'react';
import './index.css';
// Gimme Colors
import colors from 'colors.json'

// Gimme Pieces to Build with
import Button from 'components/Button'

// Gimme Content to put in the Pieces.
import JumbotronContent from 'contents/jumbotron.json'

class Jumbotron extends Component {
	render() {
		return(
			<div className="Jumbotron" style={{
					backgroundColor:colors.dark.off
				}}>
				<div className="Header">
					<h1>
						{JumbotronContent.title}
					</h1>
					<hr/>
					<h2>
						{JumbotronContent.paragraph}
					</h2>
					<h3>
						{JumbotronContent.subtitle}
					</h3>
				</div>
			

			</div>
		);
	}
}
export default Jumbotron;
