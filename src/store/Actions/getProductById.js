import axios from "axios";

const getProductId = paload => {
  return {
    type: "GET_PRODUCT_ID",
    payload: paload
  };
};

export const fetchProductById = id => {
  return dispatch => {
    axios
      .get(`/notebooks/${id}`)
      .then(el => console.log(el))
      .catch(err => console.log(err));
  };
};
