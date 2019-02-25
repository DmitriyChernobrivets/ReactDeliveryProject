import axios from "axios";

const actionProducts = payload => {
  return {
    type: "GET_PRODUCTS",
    payload
  };
};
const getProductsFailure = error => {
  return {
    type: "GET_PRODUCTS_FAILURE",
    payload: error
  };
};

export const getProducts = () => {
  return dispatch => {
    axios
      .get("/notebooks")
      .then(({ data }) => dispatch(actionProducts(data.notebooks)))
      .catch(err => console.log(err) || dispatch(getProductsFailure(err.message)));
  };
};
