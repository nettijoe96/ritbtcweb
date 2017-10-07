import React, {
	Component
} from 'react';
import './index.css';
// Gimme Colors
import colors from 'colors.json'

// Gimme Pieces to Build with
import Button from 'components/Button'
import EmailField from 'components/EmailField'
// Gimme Content to put in the Pieces.
import ContactContent from 'contents/contact.json'

class Contact extends Component {
	render() {
		return(
			<div className="Contact" style={{
					backgroundColor:colors.dark.off
				}}>
				<div className="Header">
					<h1>
						{ContactContent.title}
					</h1>
					<hr/>
					<h3>
						{ContactContent.subtitle}
					</h3>
				</div>
				<EmailField fieldText={ContactContent.fieldText}>
					
				</EmailField>


			</div>
		);
	}
}
export default Contact;
