import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoNav from '../../../assets/images/logo-nav.png';
import './navBar.css';

const Navbar = ({ title, signupText, signinText }) => {
  return (
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={logoNav} alt="Banka App" />
          <Link to="/">
            { title }
          </Link>
        </div>
      </div>
      <div className="nav-btn">
        <div className="nav-check">
          <span />
          <span />
          <span />
        </div>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        {signupText.length > 0 && (
        <Link to="/signup">{ signupText }</Link>
        )}
        {signinText.length > 0 && (
        <Link to="/signin">{ signinText }</Link>
        )}
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  signupText: '',
  signinText: '',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  signupText: PropTypes.string,
  signinText: PropTypes.string,
};

export default Navbar;
