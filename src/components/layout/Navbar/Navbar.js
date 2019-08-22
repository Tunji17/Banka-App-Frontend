import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../../../assets/images/logo-nav.png';
import './navBar.css';
import NavbarContext from '../../../context/Navbar/navbarContext';

const Navbar = () => {
  const navbarContext = useContext(NavbarContext);
  const { title, signupText, signinText } = navbarContext;
  useEffect(() => {
    navbarContext.setTitle('Banka App');
    navbarContext.setSignupText('Sign up');
    navbarContext.setSigninText('Sign in');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={logoNav} alt="Banka App" />
          <Link to="/">{ title.msg }</Link>
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
        <Link to="signup.html">{ signupText.msg }</Link>
        <Link to="signin.html">{ signinText.msg }</Link>
      </div>
    </nav>
  );
};

// Navbar.Proptypes
export default Navbar;
