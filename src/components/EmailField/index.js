import React, { Component } from 'react';
import './index.css';

export default class EmailField extends Component {
    render() {
				const {className, link, children, fieldText} = this.props;
        return (
            <div>
            <input type="text" name="Email" placeholder={fieldText}/>
            </div>
        );
    }
}
