import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import "./style.sass";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { add } from 'actions';

const fakeLogin = {
    isAuth: false,
    auth(cb) {
        this.isAuth = true;
        setTimeout(cb, 1000);
    },
    logout(cb) {
        this.isAuth = false;
        setTimeout(cb, 1000);
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            password: "",
            redirect: false
        }
    }

    onAccountChange = (e) => {
        this.setState({
            account: e.target.value
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onLoginClick = () => {
        fakeLogin.auth(() => {
            this.setState({
                redirect: true
            })
        });
        this.props.actions.add(this.state.account)
        // this.props.dispatch(add(this.state.account));
    }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     console.log(prevState.redirect+" now:"+this.state.redirect);
    // }


    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirect } = this.state;

        if (redirect) {
            return <Redirect to={from}></Redirect>
        }

        return (

            <div className="login">
                <div className="logincontainer">
                    <label htmlFor="account">Account</label>
                    <input type="text" id="account" value={this.state.account} onChange={this.onAccountChange} />
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" value={this.state.password} onChange={this.onPasswordChange} />
                    <button onClick={this.onLoginClick}>Login</button>
                    {this.props.loginAccount}
                </div>

            </div>

        );
    }
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


export default connect(mapStateToProps, mapDispatchToProps, null)(Login);
// export default connect()(Login);