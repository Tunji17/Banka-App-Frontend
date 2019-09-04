import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';
import './dashboard.css';


const Dashboard = ({ history }) => {
  const token = localStorage.getItem('jwtToken');
  const decoded = jwtDecode(token);
  useEffect(() => {
    if (decoded.type !== 'staff' || decoded.isadmin !== false) {
      history.push('/signin');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Fragment>
      <AuthNavbar firstmenu="Dashboard" thirdmenu="All Bank Accounts" dashboardUrl="/staff" />
      <Sidebar title="Staff Dashboard" firstmenu="Dashboard" thirdmenu="All Bank Accounts" dashboardUrl="/staff" />
      <div id="content-container">
        <div className="content-container-inner">
          <div className="content-container-wrapper">
            <div className="account-history-search">
              <div className="filter-search">
                <div className="filter-header">
                  <div className="white-background">
                    <div className="search-inner1">
                      <h3>Search by Account Number </h3>
                    </div>
                    <div className="search-inner2" />
                  </div>
                </div>
                <form className="quick-search">
                  <div className="filter-bottom">
                    <div id="form-message" />
                    <div className="row">
                      <div className="column">
                        <input className="input-fields" type="text" placeholder="Enter Owners Name" />
                      </div>
                      <div className="column">
                        <input id="account-number" className="input-fields" type="number" placeholder="Enter Account Number" />
                      </div>
                    </div>
                    <div className="row"> <input type="submit" className="search-btn" value="search" /></div>

                  </div>
                </form>
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
