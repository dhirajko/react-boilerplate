import {
  productFetchRequest,
  productFetchRequestFailure,
  productFetchRequestSuccess
} from "../actions/productAction";
import { store, fetch, destroy } from "../utils/httpUtil";
import axios from "axios";

export const fetchProduct = async dispatch => {
  dispatch(productFetchRequest());

  return fetch("api/user") 
    .then(response => {
      dispatch(productFetchRequestSuccess(response.data.data));
    })
    .catch(error => dispatch(productFetchRequestFailure(error)));


};
