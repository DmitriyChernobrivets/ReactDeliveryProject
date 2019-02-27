import React, { Component } from "react";
import "./feedback.scss";
import { Col, Row, Container } from "react-bootstrap";
class Feedback extends Component {
  state = {};
  render() {
    return (
      <Row className="feedback">
        <Col md={6} lg={5}>
          <p className="feedback_name">Enter your name: </p>
          <input className="feedback_name-input" type="text" placehoder="Enter your name" />
        </Col>
        <Col lg={12}>
          <p>Your comments: </p>
          <textarea className="feedback_comments" rows="3" placeholder="Enter your feedback here" />
        </Col>
        <div className="feedback" />
      </Row>
    );
  }
}

export default Feedback;
