import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
				const {className, link, children, style} = this.props;
        return (
            <a className={className || "Button"}
								style={style}
							 href={link}>
                {children}
            </a>
        );
    }
}
export default Button;
