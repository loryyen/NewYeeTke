import React, { Component } from 'react';

class JoinUs extends Component {
    ref = React.createRef();
    render() {
        return (
            <div ref={this.ref}>
                JoinUs
            </div>
        );
    }
}

export default JoinUs;