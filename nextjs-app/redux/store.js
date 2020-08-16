import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

/**
 * this is where we initialize the store by giving it the initialState and by also applying the middleware.
 * In this case the middleware is from Redux Thunk This will allow us to make asynch api calls, without which 
 * those get request would not be possible
 */
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;