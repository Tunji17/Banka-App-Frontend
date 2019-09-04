import React, { useReducer } from 'react';
import Proptypes from 'prop-types';
import jwtDecode from 'jwt-decode';
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
  SET_BANK_ACCOUNT,
  SET_ALL_TRANSACTIONS,
} from '../types';

const apiUrl = 'https://bankaappv1.herokuapp.com';

const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    alert: null,
    isAuthenticated: false,
    accounts: [],
    allTransactions: [],
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


  const signUpUser = async (userData, history) => {
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
      history.push('/user');
    } catch (error) {
      setAlert('An error was encountered', 'error');
    }
  };

  const signInUser = async (userData, history) => {
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
      const userType = jwtDecode(token);
      const { type, isadmin } = userType;
      setAlert('Your login was successfully', 'success');
      if (type === 'client' && isadmin === false) {
        history.push('/user');
      }
      if (type === 'staff' && isadmin === false) {
        history.push('/staff');
      }
      if (type === 'staff' && isadmin === true) {
        history.push('/admin');
      }
    } catch (error) {
      setAlert(error.response.data.message, 'error');
    }
  };

  const getUsersAccounts = async (email) => {
    setIsLoading();
    try {
      const token = localStorage.getItem('jwtToken');
      setAuthTokenHeader(token);
      const resAccount = await axios.get(`${apiUrl}/api/v1/user/${email}/accounts`);
      dispatch({
        type: SET_BANK_ACCOUNT,
        payload: resAccount.data.data,
      });
    } catch (error) {
      console.log(error.response.data, 'error');
    }
  };

  const getAllTransactions = async () => {
    setIsLoading();
    try {
      const token = localStorage.getItem('jwtToken');
      setAuthTokenHeader(token);
      const resAccount = await axios.get(`${apiUrl}/api/v1/transactions`);
      dispatch({
        type: SET_ALL_TRANSACTIONS,
        payload: resAccount.data.data,
      });
    } catch (error) {
      console.log(error.response.data, 'error');
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
        accounts: state.accounts,
        getUsersAccounts,
        allTransactions: state.allTransactions,
        getAllTransactions,
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
