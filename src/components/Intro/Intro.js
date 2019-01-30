import React, { Component } from 'react';
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

export default Intro;