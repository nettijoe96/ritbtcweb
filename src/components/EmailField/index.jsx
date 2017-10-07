import React, { Component } from 'react';
import './index.css';

import envelopeIcon from './envelope.svg';

export default class EmailField extends Component {
    render() {
				const {fieldText} = this.props;
        return (
            <div className="EmailField">
							<header>
								<h1>Sign Up</h1>
								<p>Fill in all informations</p>
							</header>

							<form>

								<div className="input-section email-section">
									<input className="email" type="email" placeholder="ENTER YOUR E-MAIL HERE" autocomplete="off"/>
									<div className="animated-button">

									<span className="icon-paper-plane">

									</span>

									<span className="next-button email">
										<img src={envelopeIcon}/>
									</span>

									</div>
								</div>

							</form>
{/*            <input type="text" name="Email" placeholder={fieldText}/>*/}
            </div>
        );
    }
}
