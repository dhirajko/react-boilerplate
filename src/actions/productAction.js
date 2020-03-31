import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_ERROR
} from "../constants/actionTypes";

export const productFetchRequest = () => {
  return {
    type: FETCH_PRODUCTS_PENDING
  };
};

export const productFetchRequestSuccess = data => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data
  };
};

export const productFetchRequestFailure = error => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error
  };
};
