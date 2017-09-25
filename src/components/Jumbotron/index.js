import React, { Component } from 'react';
import './index.css';
import colors from 'colors.json'

class Jumbotron extends Component {
  render() {
    const content = this.props.content;
    return (
      <div className="Jumbotron" style={{
        backgroundColor:colors.dark.off
      }}>
        <div className="row">
          <h1>{content.title}</h1>
          <p style={{color:colors.light.pure}}>{content.paragraph}</p>
        </div>
        <div className="JumboButton" style={{
          boxShadowColor: colors.dark.pure,
          backgroundColor:colors.light.accent,
          color:colors.dark.off
        }}>{content.buttonText}</div>
      </div>
    );
  }
}
export default Jumbotron;
