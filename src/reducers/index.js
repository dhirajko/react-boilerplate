import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {productsReducer} from './productReducer'

const rootReducer = (state, action) => {

    const appReducer = (history) => combineReducers({
        router: connectRouter(history),
        products : productsReducer
    });

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;