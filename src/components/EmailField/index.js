import React, { Component } from 'react';
import './index.css';

class EmailField extends Component {
    render() {
				const {className, link, children, style} = this.props;
        return (
            <a className={className || "EmailField"}
								style={style}
							 href={link}>
                {children}
            </a>
            <input type="text", name="Email">

        );
    }
}
export default EmailField;
