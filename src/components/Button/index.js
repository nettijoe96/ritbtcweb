import React, { Component } from 'react';
import './index.css';

import colors from 'colors.json'

class Button extends Component {
    render() {
				const {className, link, children} = this.props;
        return (
            <a className={className || "Button"}
							 href={link}
							 style={{
	            // boxShadowColor: colors.dark.pure,
	            // backgroundColor:colors.light.accent,
	            // color:colors.dark.off
            }}>
                {children}
            </a>
        );
    }
}
export default Button;
