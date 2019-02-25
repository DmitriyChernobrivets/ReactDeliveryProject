const onotialState = {};

const getProductByIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCT_ID":
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default getProductByIdReducer;
