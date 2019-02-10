import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import withAnimationClass from "components/hoc/withAnimationClass";
import "./style.sass";
class JoinUs extends Component {
  ref = React.createRef();
  render() {
    return (
      <div className="joinus" ref={this.ref}>
        <div className="title"> 加入我們 </div>{" "}
        <div className="eng-title"> Join Us </div>{" "}
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <div className="job1">
                <div className="img" />
                <div className="job-title"> R & D </div>{" "}
                <ul>
                  <li>
                    <div> 資深架構師 </div> <div> Senior Architect </div>{" "}
                  </li>{" "}
                  <li>
                    <div> 資深.Net工程師 </div>{" "}
                    <div> Senior C#.Net Analyst Programmer </div>{" "}
                  </li>{" "}
                  <li>
                    <div> .Net工程師C# </div>{" "}
                    <div> .Net Analyst Programmer </div>{" "}
                  </li>{" "}
                  <li>
                    <div> 軟體測試工程師 </div>{" "}
                    <div> Software Test Engineer </div>{" "}
                  </li>{" "}
                  <li>
                    <div> 前端工程師 </div> <div> Frontend Develpoer </div>{" "}
                  </li>{" "}
                  <li>
                    <div> Android工程師 </div> <div> Android Develpoer </div>{" "}
                  </li>{" "}
                  <li>
                    <div> iOS工程師 </div> <div> iOS Develpoer </div>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </Col>{" "}
            <Col md={4} sm={12}>
              <div className="job2">
                <div className="img" />
                <div className="job-title"> PRODUCT </div>{" "}
                <div className="content"> 目前暫無職缺 </div>{" "}
              </div>{" "}
            </Col>{" "}
            <Col md={4} sm={12}>
              <div className="job3">
                <div className="img" />
                <div className="job-title"> HR </div>{" "}
                <div className="content"> 目前暫無職缺 </div>{" "}
              </div>{" "}
            </Col>{" "}
          </Row>{" "}
        </Container>{" "}
      </div>
    );
  }
}

export default JoinUs;
