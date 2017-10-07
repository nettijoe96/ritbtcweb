import React, {
	Component
} from 'react';
import './index.css';

import emailIcon from './email.svg';
import sendIcon from './send.svg';

export default class EmailField extends Component {
	state = {
		value: ""
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit = (event) => {
		alert('Email entered: ' + this.state.value);

		event.preventDefault();
	}

	render() {
		const {
			placeholder
		} = this.props;

		const {
			value
		} = this.state;;

		return(
			<div className="EmailField">
				<header>
					<h1>Sign Up</h1>
					<p>Fill in all informations</p>
				</header>

				<form>
					<div className="EmailSection">
						<input className="EmailInput" type="email" placeholder={placeholder}
							value={value} onChange={this.handleChange}/>

						<div className="AnimatedButton">
							<span className={`${value.length > 0 ? 'Hide' : ''} EmailIconContainer`}>
								<img src={emailIcon} alt="Email icon" className="EmailIcon"/>
							</span>

							<span className="SendButton" onClick={this.handleSubmit}>
								<img src={sendIcon} alt="Send icon" className="SendIcon"/>
							</span>
						</div>
					</div>

				</form>
			</div>
		);
	}
}
