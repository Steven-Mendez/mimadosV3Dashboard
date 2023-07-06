import axios from 'axios';
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
import { logout } from './userActions';

export const listSales = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SALE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/sales', config);

    dispatch({ type: SALE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SALE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSale =
  ({ customerName, products, totalAmount }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: SALE_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/sales/`,
        { customerName, products, totalAmount },
        config
      );

      dispatch({ type: SALE_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: SALE_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const getSaleDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SALE_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/sales/${id}`, config);

    dispatch({ type: SALE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SALE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
