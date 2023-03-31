import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

const initialState = {
  product: [],
  isLoding: false,
  isError: false,
  totalRecord: 1,
  perPage: 1,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoding: true, isError:false };
    case GET_PRODUCTS_SUCCESS:
      // console.log(payload)
      return {
        ...state,
        isLoding: false,
        isError: false,
        product: payload.products,
        totalRecord: payload.productsCount,
        perPage: payload.resultPerPage,
      };
    case GET_PRODUCTS_FAILURE:
      return { ...state, isError: true, isLoding: false };
    default:
      return state;
  }
};
