import React, { Component, createRef } from 'react';
import ReactDOM from "react-dom";

import "reset-css";
import "normalize.css";
import "./index.sass";

import Header from 'components/header/Header';
import Intro from 'components/Intro/Intro';
import About from 'components/About/About'
import Service from 'components/Service/Service'
import JoinUs from 'components/JoinUs/JoinUs'
class App extends Component {
    constructor(props) {
        super(props);
        this.intro = React.createRef();
        this.about = React.createRef();
        this.service = React.createRef();
        this.joinus = React.createRef();
    }

    onHederNavClick=(navType)=>{
        alert(navType);
    }

render() {
    return (
        <>
            <Header onHederNavClick={this.onHederNavClick}></Header>
            <Intro ref={this.intro}></Intro>
            <About ref={this.about}></About>
            <Service ref={this.service}></Service>
            <JoinUs ref={this.joinus}></JoinUs>
            {/* <div>Intro</div>
                <div>Service</div>
                <div>Philosophy</div>
                <div>Business</div>
                <div>AboutEnv</div>
                <div>Team</div>
                <div>JoinUs</div>
                <div>Partner</div>
                <div>Disclaimer</div>
                <div>Footer</div> */}
        </>
    );
}
}

ReactDOM.render(<App />, document.getElementById("app"));