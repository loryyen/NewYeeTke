import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";

import "reset-css";
import "normalize.css";
import "./index.sass";

import Header from "components/Header";
import Intro from "components/Intro";
import About from "components/About";
import Service from "components/Service";
import JoinUs from "components/JoinUs";
import Modal from "components/Modal";
import LoginDialog from "components/LoginDialog";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./reducer";
import Context from "./context/context";

const store = createStore(
  Reducer,
  window.devToolsExtension && window.devToolsExtension()
);

const ModalContent = ({ account }) => {
  return <div>{"Welcome"}</div>;
};

// console.log(store.getState())
class App extends Component {
  constructor(props) {
    super(props);
    this.introRef = React.createRef();
    this.aboutRef = React.createRef();
    this.serviceRef = React.createRef();
    this.joinusRef = React.createRef();
  }
  state = {
    isModalOpen: false,
    loginAccount: ""
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  onHederNavClick = navType => {
    //alert(navType);
    let container = null;
    switch (navType) {
      case "intro":
        container = this.introRef.current.ref.current;
        break;
      case "service":
        container = this.serviceRef.current.getContainer();
        break;
      case "about":
        container = this.aboutRef.current.container.current;
        break;
      case "joinus":
        container = this.joinusRef.current.ref.current;
        break;
      default:
        break;
    }
    //Scroll to contain
    if (container) {
      container.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <Context.Provider value={state.loginAccount}>
        <>
          <Header
            onHederNavClick={this.onHederNavClick}
            openModal={this.openModal}
          />
          <Intro ref={this.introRef} />
          <About ref={this.aboutRef} />
          <Service ref={this.serviceRef} />
          <JoinUs ref={this.joinusRef} />
          <Modal isHidden={!this.state.isModalOpen} onClose={this.onModalClose}>
            {/* <ModalContent account={this.props.loginAccount} /> */}
            <LoginDialog
              key={this.state.isModalOpen}
              onClose={this.onModalClose}
            />
          </Modal>
          {/* <div>Intro</div>
                <div>Service</div>
                <div>Philosophy</div>
                <div>Business</div>
                <div>AboutEnv</div>
                <div>Team</div>
                <div>JoinUs</div>
                <div>Partner</div>
                <div>Disclaimer</div>
                <div>Footer</div> */}
        </>
      </Context.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
