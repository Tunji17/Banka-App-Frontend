import React, { useReducer } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import { setAuthTokenHeader } from '../../helpers/setAuthToken';
import AppContext from './appContext';
import AppRedudcer from './appReducer';
import {
  SET_LOADING,
  SIGNUP_USER,
  SET_ALERT,
  REMOVE_ALERT,
  SIGNIN_USER,
} from '../types';

const apiUrl = 'https://bankaappv1.herokuapp.com';

const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    alert: null,
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(AppRedudcer, initialState);

  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    // eslint-disable-next-line arrow-body-style
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };


  const signUpUser = async (userData) => {
    setIsLoading();
    try {
      const res = await axios.post(
        `${apiUrl}/api/v1/auth/signup`, userData,
      );
      dispatch({
        type: SIGNUP_USER,
        payload: res.data.data,
      });
      const { token } = res.data.data;
      setAuthTokenHeader(token);
      localStorage.setItem('jwtToken', token);
      setAlert('Your user account was created successfully', 'success');
    } catch (error) {
      setAlert('An error was encountered', 'error');
    }
  };

  const signInUser = async (userData) => {
    setIsLoading();
    try {
      const res = await axios.post(
        `${apiUrl}/api/v1/auth/signin`, userData,
      );
      dispatch({
        type: SIGNIN_USER,
        payload: res.data.data,
      });
      const { token } = res.data.data;
      setAuthTokenHeader(token);
      localStorage.setItem('jwtToken', token);
      setAlert('Your login was successfully', 'success');
    } catch (error) {
      // console.log(error.response);
      setAlert('An error was encountered', 'error');
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        setIsLoading,
        user: state.user,
        signUpUser,
        alert: state.alert,
        setAlert,
        signInUser,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppState.propTypes = {
  children: Proptypes.node.isRequired,
};

export default AppState;
