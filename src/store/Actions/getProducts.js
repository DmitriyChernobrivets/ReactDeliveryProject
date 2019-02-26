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

export const getProducts = category => {
  return dispatch => {
    axios
      .get(`/category/${category}`)
      .then(({ data }) => console.log(data) || dispatch(actionProducts(data.products)))
      .catch(err => console.log(err) || dispatch(getProductsFailure(err.message)));
  };
};
