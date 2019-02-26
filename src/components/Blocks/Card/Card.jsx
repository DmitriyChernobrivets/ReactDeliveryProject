import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ForSale from "../../Shared/forSale/forSale";

const Card = ({ product }) => {
  console.log(product);
  const { _id, description, title, forSale, images, price, hot } = product;

  return (
    <div className="product-card">
      {hot && (
        <div className="hot-price">
          <span>HOT</span>
        </div>
      )}
      <div className="prdouct-image">
        <Link to={_id}>
          <img src={images[0]} alt="img" />
        </Link>
      </div>
      <Link to="/" className="product-card-title">
        <span>{title}</span>
      </Link>
      <div className="review">
        <Link to="/">
          <span>Add review</span>
        </Link>
      </div>
      <div className="forsale">
        <ForSale forSale={forSale} />
      </div>
      <Button className="btn product-card-button">
        <span>{price} UAH</span>
      </Button>
      <div className="product-description">
        <p>
          <span>Processor: </span>
          {description.processor}
        </p>
        <p>
          <span>Display: </span>
          {description.display}
        </p>
        <p>
          <span>memory: </span>
          {description.memory}
        </p>
      </div>
    </div>
  );
};

export default Card;
