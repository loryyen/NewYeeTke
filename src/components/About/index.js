import React, { Component, createRef } from "react";
import { Container, Row, Col } from "react-grid-system";
import withAnimationClass from "components/hoc/withAnimationClass";
import cx from "classnames";
import "./style.sass";

class About extends Component {
  render() {
    return (
      <div className="about" ref={this.props.forwardRef}>
        <Container>
          <Row>
            <Col sm={6} >
              <div className="title"> 我們的理念 </div>
              <div className="eng-title"> OUR PHILOSOPHY </div>
              <div className={cx("desc", { animation: this.props.animation })} >
                義德科技視員工為最珍貴的資產， 致力為員工提供優質的工作環境，
                關注員工的個人成長及事業發展。 員工的專業知識和卓越的工作技能，
                是我們成功的重要基石。 義德科技的成就， 有賴員工團結一致，
                同心同德， 不斷為公司作出貢獻， 共同為締造更美好的將來而努力。
              </div>
            </Col>
            <Col sm={6} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAnimationClass(
  React.forwardRef((props, ref) => <About forwardRef={ref} {...props} />)
);
