import React, { Component } from 'react';
import './origionalframe.css';
class Origionalframe extends React.Component {
    render() {
      return <div className="outer-frame">
        <div className="inner-frame">
            <div className="headerbox">
                <h2 className="headerbox">
                {this.props.cardname} 
                </h2>
            </div>
            <img className="cardimage"></img>
            <div className="tagbox">
                {this.props.cardtag}
            </div>
            <div className="textbox">
                {this.props.cardtext}
            </div>
            <div className="resbox">
                <div className="ressingle"></div>
                <div className="resbreak">|</div>
                <div className="ressingle"></div>
                <div className="resbreak">|</div>
                <div className="ressingle"></div>
            </div>
        </div>
        </div>;
    }
  }
  export default Origionalframe;