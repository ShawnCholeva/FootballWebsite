//Dependencies
import { combineReducers } from 'redux';

//Reducers
import LoggedInUserReducer from './logged-in-user';

const allReducers = combineReducers({
    loggedInUser: LoggedInUserReducer
});

export default allReducers;