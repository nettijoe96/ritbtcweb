import React, { Component } from 'react';
import './index.css';
// Gimme Colors
import colors from 'colors.json'

// Gimme Pieces to Build with
import Header from 'components/Header'
import Button from 'components/Button'

// Gimme Content to put in the Pieces.
import JumbotronContent from 'contents/jumbotron.json'

class Jumbotron extends Component {
    render() {
        return (
            <div className="Jumbotron" style={{
            backgroundColor:colors.dark.off
            }}>
                <div className="container">
                    <div className="row">
                        <Header>
                            {JumbotronContent.title}
                        </Header>
                        <p style={{color:colors.light.pure}}>
                            {JumbotronContent.paragraph}
                        </p>
                    </div>
                    <Button>
                        {JumbotronContent.buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}
export default Jumbotron;
