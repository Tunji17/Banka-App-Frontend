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
  const { allTransactions, getAllTransactions } = appContext;
  const token = localStorage.getItem('jwtToken');
  const decoded = jwtDecode(token);

  useEffect(() => {
    if (decoded.type !== 'staff' || decoded.isadmin !== true) {
      history.push('/signin');
    }
    getAllTransactions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Fragment>
      <AuthNavbar firstmenu="Dashboard" secondmenu="All Users" thirdmenu="Register New Staff/Admin" fourthmenu="All Bank Accounts" dashboardUrl="/admin" />
      <Sidebar title="Admin Dashboard" firstmenu="Dashboard" secondmenu="All Users" thirdmenu="Register New Staff/Admin" fourthmenu="All Bank Accounts" dashboardUrl="/admin" />
      <div id="content-container">
        <div className="content-container-inner">
          <div className="content-container-wrapper">
            <div className="account-history">
              <div className="header">
                <div className="header-inner header-credit">
                  <h3>Total Credits</h3>
                  <h4> <span>&#8358;</span>10,000</h4>
                </div>
                <div className="header-inner header-debit">
                  <h3>Total Debits </h3>
                  <h4> <span>&#8358;</span>2,500</h4>
                </div>
              </div>
              <div className="header">
                <div className="history">
                  {allTransactions.length > 0 && (
                    allTransactions.map((transaction) => {
                      return (
                        <Fragment>
                          <Cards key={transaction.id} {...transaction} />
                        </Fragment>
                      );
                    })
                  )}
                  {allTransactions.length <= 0 && (
                    <h2>There are no Transactions</h2>
                  )}
                </div>
              </div>
            </div>
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
