import React, { Component } from 'react';
import './index.css';

import colors from 'colors.json'

class Button extends Component {
    render() {
        return (
            <div className="Button" style={{
	            boxShadowColor: colors.dark.pure,
	            backgroundColor:colors.light.accent,
	            color:colors.dark.off
            }}>
                {this.props.children}
            </div>
        );
    }
}
export default Button;
