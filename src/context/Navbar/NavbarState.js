import React, { useReducer } from 'react';
import Proptypes from 'prop-types';
import NavbarContext from './navbarContext';
import NavbarReducer from './navbarReducer';
import { SET_NAVBAR_TITLE, SET_NAVBAR_SIGNUP, SET_NAVBAR_SIGNIN } from '../types';


const NavbarState = ({ children }) => {
  const initialState = {
    title: '',
    signupText: '',
    signinText: '',
  };
  const [state, dispatch] = useReducer(NavbarReducer, initialState);

  const setTitle = (msg) => {
    dispatch({
      type: SET_NAVBAR_TITLE,
      payload: { msg },
    });
  };

  const setSignupText = (msg) => {
    dispatch({
      type: SET_NAVBAR_SIGNUP,
      payload: { msg },
    });
  };

  const setSigninText = (msg) => {
    dispatch({
      type: SET_NAVBAR_SIGNIN,
      payload: { msg },
    });
  };

  return (
    <NavbarContext.Provider
      value={{
        title: state.title,
        signupText: state.signupText,
        signinText: state.signinText,
        setTitle,
        setSignupText,
        setSigninText,
      }}
    >

      {children}

    </NavbarContext.Provider>
  );
};

NavbarState.propTypes = {
  children: Proptypes.node.isRequired,
};

export default NavbarState;
