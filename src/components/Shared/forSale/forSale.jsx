import React, { Fragment } from "react";
import "./forSale.scss";

const ForSale = prop => {
  console.log(prop.forSale);
  return (
    <Fragment>
      {prop.forSale ? (
        <span className="forSale-text">
          <i className="fas fa-check" />
          Available
        </span>
      ) : (
        <span className="forSale-text">
          <i className="fas fa-times" />
          Unavailable
        </span>
      )}
    </Fragment>
  );
};

export default ForSale;
