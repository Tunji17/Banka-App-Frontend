import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';
import AppContext from '../../../context/AppContext/appContext';
import Cards from './cards';
import './dashboard.css';


const Dashboard = ({ history }) => {
  const appContext = useContext(AppContext);
  const {
    user,
    accounts,
    getUsersAccounts,
  } = appContext;

  const token = localStorage.getItem('jwtToken');
  const decoded = jwtDecode(token);

  useEffect(() => {
    if (decoded.type !== 'client' || decoded.isadmin !== false) {
      history.push('/signin');
    }
    getUsersAccounts(user.email);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Fragment>
      <AuthNavbar firstmenu="Dashboard" secondmenu="Account History" thirdmenu="Open New Account" fourthmenu="Help" dashboardUrl="/user" />
      <Sidebar title="Your Dashboard" firstmenu="Dashboard" secondmenu="Account History" thirdmenu="Open New Account" fourthmenu="Help" dashboardUrl="/user" />
      <div id="content-container">
        <div className="content-container-inner">
          <div className="content-container-wrapper">
            {accounts.length > 0 && (
              accounts.map((account) => {
                return (
                  <Cards key={account.accountnumber} {...account} />
                );
              })
            )}
            {accounts.length <= 0 && (
            <h2>You have no accounts</h2>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};


Dashboard.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Dashboard;
