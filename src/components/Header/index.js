import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./style.sass";
import Login from 'components/Login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { add } from 'actions';
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
                                    <OldSchoolMenuLink label="login" to="/login" loginInAccount={this.props.loginAccount}></OldSchoolMenuLink>
                                </li>
                            </ul>
                        </div>
                        <Route exact path="/" />
                        <Route path="/service" />
                        <Route path="/about" />
                        <Route path="/join-us" />
                        <Route exact path="/login" component={Login}></Route>                       
                    </div>
                </div>
            </Router>
        );
    }
}



function OldSchoolMenuLink({ label, to, activeOnlyWhenExact,loginInAccount }) {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (              
            <Link className="item" to={to}> {loginInAccount!==""?"Logout":"Login"}</Link>        
        )}
      />
    );
  }

const mapStateToProps = (state, ownProps) => {
    return {
        loginAccount: state.username
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators({ add }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);