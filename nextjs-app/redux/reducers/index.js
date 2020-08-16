import { combineReducers } from 'redux';
import { tweetReducer } from './tweetReducer';

/**
 * allows to relay the data/state from the switch case to the react component
 */
export default combineReducers({
    tweeter: tweetReducer
});