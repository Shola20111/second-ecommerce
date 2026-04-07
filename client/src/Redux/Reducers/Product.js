
import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_REQ_SUCCESS,
  PRODUCT_LIST_REQ_FAIL,

  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_REQ_SUCCESS,
  PRODUCT_DETAIL_REQ_FAIL
} from "../constants/Product";

// List of products
export const productListReducer = (
  state = { products: [], page: 1, totalPage: 1 },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQ:
      return { loading: true, products: [] };

    case PRODUCT_LIST_REQ_SUCCESS:
  return {
    loading: false,
    products: action.payload,
    totalPage: 1,
    page: 1
  };

    case PRODUCT_LIST_REQ_FAIL:
      return { loading: false, error: action.payload.error };

    default:
      return state;
  }
};

// Details of a single product by ID
export const productReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQ:
      return { loading: true, ...state };

    case PRODUCT_DETAIL_REQ_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAIL_REQ_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};