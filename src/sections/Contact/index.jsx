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
				<EmailField
					fieldText={ContactContent.fieldText}/>
			</div>
		);
	}
}
export default Contact;
