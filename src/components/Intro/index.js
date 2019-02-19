import React, { Component } from "react";
import { connect } from "react-redux";
import { createStore, bindActionCreators } from "redux";
import { add } from "actions";
import "./style.sass";
class Intro extends Component {
  ref = React.createRef();
  render() {
    return (
      <div className="intro" ref={this.ref}>
        <div className="intro-outter">
          <div className="head" />
        </div>
        <div className="arrowdown" onClick={this.props.onArrowClick}></div>
      </div>
    );
  }
}
export default Intro;
