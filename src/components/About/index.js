import React, { Component } from 'react';
import './style.sass';

class About extends Component {

    render() {
        return (
            <div className="about" ref={this.props.forwardRef}>
                <p>about</p>
            </div>
        );
    }
}


export default React.forwardRef((props, ref) => {
    return <About {...props} forwardRef={ref} ></About>;
});