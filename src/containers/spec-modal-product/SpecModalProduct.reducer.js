import {
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  CLOSE_MODAL,
} from './SpecModalProduct.actions';

export const initialState = {
  product: undefined,
  error: false,
  loader: true,
  showModalProduct: false,
};

const productsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload.product,
        loader: payload.loader,
        showModalProduct: true,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: payload.error,
        loader: payload.loader,
      };
    case CLOSE_MODAL:
      return {
        ...initialState,
      }
    default:
      return state;
  }
};

export default productsReducer;