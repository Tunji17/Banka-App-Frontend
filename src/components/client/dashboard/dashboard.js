import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';
import AppContext from '../../../context/AppContext/appContext';


const Dashboard = ({ history }) => {
  const appContext = useContext(AppContext);
  const { user, isAuthenticated } = appContext;

  useEffect(() => {
    if (user.type !== 'client' && user.isadmin !== false && isAuthenticated !== true) {
      history.push('/signin');
    }
  });

  return (
    <Fragment>
      <AuthNavbar firstmenu="Dashboard" secondmenu="Account History" thirdmenu="Open New Account" fourthmenu="Help" dashboardUrl="/user" />
      <Sidebar title="Your Dashboard" firstmenu="Dashboard" secondmenu="Account History" thirdmenu="Open New Account" fourthmenu="Help" dashboardUrl="/user" />
    </Fragment>
  );
};


Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Dashboard;
