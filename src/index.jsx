import React, { Component, createRef } from 'react';
import ReactDOM from "react-dom";

import "reset-css";
import "normalize.css";
import "./index.sass";

import Header from 'components/Header';
import Intro from 'components/Intro';
import About from 'components/About';
import Service from 'components/Service';
import JoinUs from 'components/JoinUs';
import Login from 'components/Login';
import ReactDom from 'react-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux'
class App extends Component {
    constructor(props) {
        super(props);
        this.introRef = React.createRef();
        this.aboutRef = React.createRef();
        this.serviceRef = React.createRef();
        this.joinusRef = React.createRef();
    }

    onHederNavClick = (navType) => {
        //alert(navType);
        let container = null;
        switch (navType) {
            case 'intro':
                container = this.introRef.current.ref.current;
                break;
            case 'service':
                container = this.serviceRef.current.getContainer();
                break;
            case 'about':
                container = this.aboutRef.current;
                break;
            case 'joinus':
                container = this.joinusRef.current.ref.current;
                break;
            default:
                break;
        }
        //Scroll to contain
        if (container) {
            container.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
        else {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <>
                <Header onHederNavClick={this.onHederNavClick}></Header>
                <Intro ref={this.introRef}></Intro>
                <About ref={this.aboutRef}></About>
                <Service ref={this.serviceRef}></Service>
                <JoinUs ref={this.joinusRef}></JoinUs>
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