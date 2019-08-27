import {
  SET_LOADING,
  SIGNUP_USER,
  SET_ALERT,
  REMOVE_ALERT,
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
    default:
      return state;
  }
};
