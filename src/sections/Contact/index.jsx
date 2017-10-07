import React, {
	Component
} from 'react';
import './index.css';
// Gimme Colors
import colors from 'colors.json'

// Gimme Pieces to Build with
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
					title={ContactContent.title}
					subtitle={ContactContent.subtitle}
					placeholder={ContactContent.placeholder}/>
			</div>
		);
	}
}
export default Contact;
