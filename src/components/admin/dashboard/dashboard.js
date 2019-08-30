import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';
import AppContext from '../../../context/AppContext/appContext';


const Dashboard = ({ history }) => {
  const appContext = useContext(AppContext);
  const { user, isAuthenticated } = appContext;

  useEffect(() => {
    if (user.type !== 'staff' && user.isadmin !== true && isAuthenticated !== true) {
      history.push('/signin');
    }
  });

  return (
    <Fragment>
      <AuthNavbar firstmenu="Dashboard" secondmenu="All Users" thirdmenu="Register New Staff/Admin" fourthmenu="All Bank Accounts" dashboardUrl="/admin" />
      <Sidebar title="Admin Dashboard" firstmenu="Dashboard" secondmenu="All Users" thirdmenu="Register New Staff/Admin" fourthmenu="All Bank Accounts" dashboardUrl="/admin" />
    </Fragment>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Dashboard;
