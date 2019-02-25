import { combineReducers } from "redux";
import getProductsReducer from "./getProductsReducer";
import testReducer from "./testReducer";
import getProductByIdReducer from "./getProductByIdReducer";

const rootReducer = combineReducers({
  test: testReducer,
  allProducts: getProductsReducer,
  currentProductInfo: getProductByIdReducer
});

export default rootReducer;
