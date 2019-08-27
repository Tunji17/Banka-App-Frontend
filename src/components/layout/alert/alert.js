import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext/appContext';
import './alert.css';

const Alert = () => {
  const appContext = useContext(AppContext);

  const { alert } = appContext;
  return (
    alert !== null && (
      <div id="signup_messages" className={`alert-${alert.type}`}>{alert.msg}</div>
    )
  );
};

export default Alert;
