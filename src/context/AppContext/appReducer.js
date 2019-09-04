import {
  SET_LOADING,
  SIGNUP_USER,
  SET_ALERT,
  REMOVE_ALERT,
  SIGNIN_USER,
  SET_BANK_ACCOUNT,
  SET_ALL_TRANSACTIONS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGNIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    case SET_BANK_ACCOUNT:
      return {
        ...state,
        accounts: action.payload,
        isLoading: false,
      };
    case SET_ALL_TRANSACTIONS:
      return {
        ...state,
        allTransactions: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
