import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./cardinfo.scss";
import { fetchProductById } from "../../../store/Actions/getProductById";
import { connect } from "react-redux";

class CardInfo extends Component {
  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
  }

  render() {
    return (
      <Container>
        <Row>
          <div className="card-info_title">
            <h1>TITLE</h1>
          </div>
          <Col xs={12} md={6} lg={8}>
            <Row>
              <Col col={12} lg={6} className="card-info_image">
                <img src="#" alt="" />
              </Col>
              <Col col={12} lg={6} className="card-info_content">
                <h3 className="card-info_about">Detail</h3>
                <p>asdadasdada</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div>RIGHT</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    getProductById: id => dispatch(fetchProductById(id))
  };
};

export default connect(
  null,
  dispatchToProps
)(CardInfo);
