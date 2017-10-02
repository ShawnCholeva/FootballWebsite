import { actionTypes } from '../actions/action-types.js';

export default (state= {
    isFetching: false,
    isAuthenticated: false,
    errorMessage: '',
    user: {
        username: ''
    }
    }, action) => {

    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
          return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            errorMessage: '',
            user: action.creds
          });
        case actionTypes.LOGIN_SUCCESS:
          return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            user: action.user,
            errorMessage: ''
          });
        case actionTypes.LOGIN_FAILURE:
          return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: action.message,
            user: null
          });
        case actionTypes.LOGOUT_REQUEST:
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: '',
            user: null
          });
        default:
          return state;
    }
};