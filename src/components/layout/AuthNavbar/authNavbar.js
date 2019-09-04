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
  dashboardUrl,
}) => {
  const logout = () => {
    localStorage.removeItem('jwtToken');
  };

  return (
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={logoNav} alt="Banka App" />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-linkks">
        {firstmenu.length > 0 && (
        <Link to={dashboardUrl}><i className="fas fa-chart-line" />&nbsp;&nbsp;{firstmenu}</Link>
        )}
        {secondmenu.length > 0 && (
        <Link to={dashboardUrl}><i className="fas fa-history" />&nbsp;&nbsp;{secondmenu}</Link>
        )}
        {thirdmenu.length > 0 && (
        <Link to={dashboardUrl}><i className="fas fa-edit" />&nbsp;&nbsp;{thirdmenu}</Link>
        )}
        {fourthmenu.length > 0 && (
        <Link to={dashboardUrl}><i className="fas fa-hands-helping" />&nbsp;&nbsp;{fourthmenu}</Link>
        )}
        <Link to="/" onClick={logout}><i className="fas fa-sign-out-alt" />&nbsp;&nbsp;logout</Link>
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
  dashboardUrl: PropTypes.string.isRequired,
};

export default AuthNavbar;
