import React, { useReducer } from 'react';
import Proptypes from 'prop-types';
import AppContext from './appContext';
import AppRedudcer from './appReducer';
import { SET_LOADING } from '../types';

const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
  };

  const [state, dispatch] = useReducer(AppRedudcer, initialState);

  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        setIsLoading,
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
