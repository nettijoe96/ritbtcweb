import React, { Component } from 'react';
import './index.css';

import colors from 'colors.json'

import Header from 'components/Header'
import Button from 'components/Button'

class Jumbotron extends Component {
    render() {
        const content = this.props.content;
        return (
            <div className="Jumbotron" style={{
            backgroundColor:colors.dark.off
            }}>
                <div className="container">
                    <div className="row">
                        <Header>
                            {content.title}
                        </Header>
                        <p style={{color:colors.light.pure}}>
                            {content.paragraph}
                        </p>
                    </div>
                    <Button>
                        {content.buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}
export default Jumbotron;
