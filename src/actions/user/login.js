//Dependencies
import { actionTypes } from '../action-types.js';

export const login = (loginInfo) => {
  return (dispatch) => {
    dispatch(requestLogin(loginInfo));
  };
};

export const requestLogin = (credentials) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials
  };
};

export const receiveLogin = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user
  };
};

export const loginError = (message) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
};


