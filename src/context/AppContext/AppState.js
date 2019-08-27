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
} from '../types';

const apiUrl = 'https://bankaappv1.herokuapp.com';

const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    alert: null,
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

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        setIsLoading,
        user: state.user,
        signUpUser,
        alert: state.alert,
        setAlert,
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
