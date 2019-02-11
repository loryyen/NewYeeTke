import React, { Component } from 'react';
import ReactDOM from "react-dom";
import cx from "classnames";
import "./style.sass";

const modalRoot = document.getElementById('modal');

class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {

        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.isHidden !== state.prevIsHidden) {
            return {
                isHidden: props.isHidden,
                prevIsHidden: props.isHidden
            }
        }
        return null;
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    onButtonClick = () => {
        this.setState({
            hidden: !this.state.isHidden
        });
        this.props.onClose();
    }

    render() {
        return ReactDOM.createPortal(
            <div className={cx("modal", { hidden: this.state.isHidden })}>
                <button onClick={this.props.onClose}>X</button>
                {this.props.children}
            </div>,
            this.el
        );
    }
}

export default Modal;