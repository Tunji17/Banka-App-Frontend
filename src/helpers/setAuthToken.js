/* eslint-disable import/prefer-default-export */

import axios from 'axios';

export const setAuthTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `${token}`;
    return (axios.defaults.headers.common.Authorization);
  }
  return delete axios.defaults.headers.common.Authorization;
};
