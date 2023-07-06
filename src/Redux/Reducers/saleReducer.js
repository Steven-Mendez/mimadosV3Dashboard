import {
  SALE_LIST_REQUEST,
  SALE_LIST_SUCCESS,
  SALE_LIST_FAIL,
  SALE_DETAILS_REQUEST,
  SALE_DETAILS_SUCCESS,
  SALE_DETAILS_FAIL,
  SALE_CREATE_REQUEST,
  SALE_CREATE_SUCCESS,
  SALE_CREATE_FAIL,
} from '../Constants/saleConstants';

export const saleListReducer = (state = { sales: [] }, action) => {
  switch (action.type) {
    case SALE_LIST_REQUEST:
      return { loading: true };
    case SALE_LIST_SUCCESS:
      return { loading: false, sales: action.payload };
    case SALE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const saleDetailsReducer = (state = { sale: {} }, action) => {
  switch (action.type) {
    case SALE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SALE_DETAILS_SUCCESS:
      return { loading: false, sale: action.payload };
    case SALE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const saleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SALE_CREATE_REQUEST:
      return { loading: true };
    case SALE_CREATE_SUCCESS:
      return { loading: false, success: true, sale: action.payload };
    case SALE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
