import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./style.sass";
class Service extends Component {
  //ref = React.createRef();

  containerDOM = React.createRef();

  getContainer = () => {
    return this.containerDOM.current;
  };

  render() {
    return (
      <div className="service" ref={this.containerDOM}>
        <Container>
          <Row className="row-top">
            <Col sm={12}>
              <div className="title">義德業務領域</div>
              <div className="eng-title">SERVICE</div>
              <div className="desc">
                <p>我們的辦公室設於九龍灣甲級商廈，坐落黃金地段，交通便捷。</p>
                <p>
                  公司實行五天工作周，辦公室內提供無限量飲品及零食予員工享用，務求讓員工在親切友善的工作環境下，發揮最佳表現。
                </p>
              </div>
            </Col>
          </Row>
          <Row className="row-bottom">
            <Col md={3} sm={6}>
              <div className="service1">
                <div className="img" />
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="service2">
                <div className="img" />
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="service3">
                <div className="img" />
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="service4">
                <div className="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Service;
