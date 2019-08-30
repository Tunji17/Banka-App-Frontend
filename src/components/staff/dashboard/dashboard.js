import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';
import AppContext from '../../../context/AppContext/appContext';


const Dashboard = ({ history }) => {
  const appContext = useContext(AppContext);
  const { user, isAuthenticated } = appContext;

  useEffect(() => {
    if (user.type !== 'staff' && user.isadmin !== false && isAuthenticated !== true) {
      history.push('/signin');
    }
  });

  return (
    <Fragment>
      <AuthNavbar firstmenu="Dashboard" thirdmenu="All Bank Accounts" dashboardUrl="/staff" />
      <Sidebar title="Staff Dashboard" firstmenu="Dashboard" thirdmenu="All Bank Accounts" dashboardUrl="/staff" />
    </Fragment>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Dashboard;
