import React, { Component, createRef } from 'react';
import ReactDOM from "react-dom";
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <>

                <Header></Header>

                <div>Intro</div>
                <div>Service</div>
                <div>Philosophy</div>
                <div>Business</div>
                <div>AboutEnv</div>
                <div>Team</div>
                <div>JoinUs</div>
                <div>Partner</div>
                <div>Disclaimer</div>
                <div>Footer</div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));