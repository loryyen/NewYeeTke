import React from "react";
// import { isElementInViewPort } from "utils";
import { throttle } from "lodash";

const withAnimationClass = function(WrapperComponent, offsetY = 0) {
  return class extends React.Component {
    state = {
      animation: false
    };

    container = React.createRef();

    componentDidMount() {
      window.addEventListener("scroll", this.onWindowScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.onWindowScroll);
    }

    onWindowScroll = throttle(() => {
      // if (
      //   isElementInViewPort(this.container.current, offsetY) &&
      //   !this.state.animation
      // ) {
      this.setState({ animation: true });
      // }
    }, 30);

    render() {
      return (
        <WrapperComponent
          ref={this.container}
          animation={this.state.animation}
          {...this.props}
        />
      );
    }
  };
};

export default withAnimationClass;
