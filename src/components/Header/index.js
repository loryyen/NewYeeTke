import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./style.sass";
import Login from 'components/Login';
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
                                    <Link  to="/" className="item" onClick={() => this.props.onHederNavClick("intro")}>Home</Link >
                                </li>
                                <li>
                                    <Link  to="/service" className="item" onClick={() => this.props.onHederNavClick("service")}>Service</Link >
                                </li>
                                <li>
                                    <Link  to="/about" className="item" onClick={() => this.props.onHederNavClick("about")}>About</Link >
                                </li>
                                <li>
                                    <Link  to="/join-us" className="item" onClick={() => this.props.onHederNavClick("joinus")}>Join Us</Link >
                                </li>
                                <li>
                                    <Link to="/login" className="item">LogIn</Link>                                    
                                </li>
                            </ul>
                        </div>
                        <Route exact path="/" />
                        <Route path="/service" />
                        <Route path="/about" />
                        <Route path="/join-us" />
                        <Route exact path="/login" component={Login}></Route>
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