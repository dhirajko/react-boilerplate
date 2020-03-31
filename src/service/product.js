import {
  productFetchRequest,
  productFetchRequestFailure,
  productFetchRequestSuccess
} from "../actions/productAction";
import { fetch } from "../utils/httpUtil";

export const fetchProduct = async dispatch => {
  dispatch(productFetchRequest());

  return fetch("api/user") 
    .then(response => {
      dispatch(productFetchRequestSuccess(response.data.data));
    })
    .catch(error => dispatch(productFetchRequestFailure(error)));


};
