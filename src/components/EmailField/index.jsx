import React, {
	Component
} from 'react';
import './index.css';

import emailIcon from './email.svg';
import sendIcon from './send.svg';

export default class EmailField extends Component {
	render() {
		const {
			placeholder
		} = this.props;
		return(
			<div className="EmailField">
							<header>
								<h1>Sign Up</h1>
								<p>Fill in all informations</p>
							</header>

							<form>

								<div className="EmailSection">
									<input className="EmailInput" type="email" placeholder={placeholder}/>

									<div className="AnimatedButton">
									<span className="EmailIcon">
										<img src={emailIcon} alt="Email icon"/>
									</span>

									<span className="SendButton">
										<img src={sendIcon} alt="Send icon"/>
									</span>
									</div>
								</div>

							</form>
            </div>
		);
	}
}
