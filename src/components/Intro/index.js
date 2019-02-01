import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStore, bindActionCreators } from 'redux';
import { add } from 'actions';
import "./style.sass";
class Intro extends Component {
    ref = React.createRef();
    render() {
        return (
            <div className="intro" ref={this.ref}>
                Intro wrap
            </div>
        );
    }
}


// const mapStateToProps = (state, ownProps) => {
//     return {
//         loginAccount: state.username
//     };
// }

// const mapDispatchToProps = (dispatch, ownProps) => {

// }

// const tmp = connect(

// )(Login);

export default Intro;