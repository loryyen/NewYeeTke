import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./style.sass";
class Header extends Component {


    constructor(props) {
        super(props);
    }

    onClick = () => {
        //Need to scroll to right place
        //but cant access Upper component DOM from this child component
        //===>lefting state up
    }

    render() {
        return (
            <Router>
                <div className="navbar">
                    <div className="container">
                        <div className="logo"></div>
                        <div className="navbox">
                            <ul>
                                <li>
                                    <NavLink to="/" className="item" onClick={() => this.props.onHederNavClick("intro")}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" className="item" onClick={() => this.props.onHederNavClick("service")}>Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="item" onClick={() => this.props.onHederNavClick("about")}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/join-us" className="item" onClick={() => this.props.onHederNavClick("joinus")}>Join Us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Route exact path="/" />
                        <Route path="/service" />
                        <Route path="/about" />
                        <Route path="/join-us" />
                        {/* <Route exact path="/" component={Intro} />
                    <Route path="/service" component={Service} />
                    <Route path="/about" component={Philosophy} />
                    <Route path="/join-us" component={JoinUs} /> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default Header;