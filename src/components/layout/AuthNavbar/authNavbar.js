/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoNav from '../../../assets/images/logo-nav.png';
import './authNavbar.css';

const AuthNavbar = ({
  firstmenu,
  secondmenu,
  thirdmenu,
  fourthmenu,
}) => {
  return (
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={logoNav} alt="Banka App" />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          {/* <i className="big-icon fas fa-bars" /> */}
          <span />
          <span />
          <span />

        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        {firstmenu.length > 0 && (
        <Link to="dashboard.html"><i className="fas fa-chart-line" />&nbsp;&nbsp;{firstmenu}</Link>
        )}
        {secondmenu.length > 0 && (
        <Link to="accountHistory.html"><i className="fas fa-history" />&nbsp;&nbsp;{secondmenu}</Link>
        )}
        {thirdmenu.length > 0 && (
        <Link to="createNewBankAccount.html"><i className="fas fa-edit" />&nbsp;&nbsp;{thirdmenu}</Link>
        )}
        {fourthmenu.length > 0 && (
        <Link to="contactpage.html"><i className="fas fa-hands-helping" />&nbsp;&nbsp;{fourthmenu}</Link>
        )}
        <Link className="show-form"><i className="fas fa-sign-out-alt" />&nbsp;&nbsp;logout</Link>
        <div className="form">
          <form>
            <div className="row">
              <label htmlFor="balance">Are you sure you want to log out?</label>

            </div>
            <div className="row">
              <div className="column">
                <button type="button" className="btn-safe log-out">Yes</button>
              </div>
              <div className="column">
                <button type="button" className="btn-danger close-form">No</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </nav>
  );
};

AuthNavbar.defaultProps = {
  firstmenu: '',
  secondmenu: '',
  thirdmenu: '',
  fourthmenu: '',

};

AuthNavbar.propTypes = {
  firstmenu: PropTypes.string,
  secondmenu: PropTypes.string,
  thirdmenu: PropTypes.string,
  fourthmenu: PropTypes.string,
};

export default AuthNavbar;
