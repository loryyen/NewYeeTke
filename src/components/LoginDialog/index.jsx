import React, { Component } from 'react';
import "./style.sass";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { add } from 'actions';
import { Consumer } from "context/user-context";

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

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            password: "",
            redirect: false,
            prevAccount: ""
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.prevAccount !== prevState.account) {
    //         return {
    //             prevAccount: prevState.account
    //         }
    //     } else {
    //         return {
    //             account: "",
    //             password: "",
    //             redirect: false,
    //             prevAccount: ""
    //         };
    //     }
    // }
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
        console.log(this.state.account);
        fakeLogin.auth(() => {
            this.setState({
                redirect: true
            }, this.props.onClose)
        });
        this.props.actions.add(this.state.account)
    }

    render() {
        return (

            <div className="logincontainer">
                <label htmlFor="account">Account</label>
                <input type="text" id="account" onChange={this.onAccountChange} />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={this.onPasswordChange} />
                {/* <button className="login-submit" onClick={this.onLoginClick}>Login</button> */}
                <LoginBtn account={this.state.account}></LoginBtn>
            </div>
        );
    }
}


const LoginBtn = ({ account }) => {
    return <div>
        <Consumer>
            {
                value => (
                    <button className="login-submit" onClick={() => value.loginEvent(account)}>
                        Login
                    </button>
                )
            }
        </Consumer>
    </div>
};


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

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginDialog);
