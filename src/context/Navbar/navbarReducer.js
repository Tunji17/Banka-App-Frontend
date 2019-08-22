import { SET_NAVBAR_TITLE, SET_NAVBAR_SIGNUP, SET_NAVBAR_SIGNIN } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_NAVBAR_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_NAVBAR_SIGNUP:
      return {
        ...state,
        signupText: action.payload,
      };
    case SET_NAVBAR_SIGNIN:
      return {
        ...state,
        signinText: action.payload,
      };
    default:
      return state;
  }
};
