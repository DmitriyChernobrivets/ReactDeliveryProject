import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../store/Actions/getProducts";

import Card from "./Card/Card";
import "./main.scss";
import { Col, Row, Container } from "react-bootstrap";

class Main extends Component {
  componentDidMount() {
    this.props.getAllProducts();
    // fetch("/products")
    //   .then(el => el.json())
    //   .then(el => console.log(el));
  }
  render() {
    const { products } = this.props;

    return (
      <main>
        <Container className="wrapper">
          <Row>
            {products.map(prod => (
              <Col lg={3} key={prod._id}>
                <Card product={prod} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.allProducts.products
  };
};

const mapDeispathToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDeispathToProps
)(Main);
