import React, { Component } from 'react';
import "./style.sass"
class Service extends Component {
    //ref = React.createRef();

    containerDOM = React.createRef();

    getContainer = () => {
        return this.containerDOM.current;
    }

    render() {
        return (
            <div className="service" ref={this.containerDOM}>
                Service
            </div>
        );
    }
}

export default Service;