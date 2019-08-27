import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './signin.css';

const Signup = () => {
  return (
    <Fragment>
      <Navbar title="Banka App" />
      <div className="container">
        <form className="signin-form">
          <div className="contains-form-div">
            <div className="form-div">
              <h3 className="heading-info">Welcome Back</h3>
              <div id="login_messages" />
              <input className="input-fields" id="emailAddress" type="email" placeholder="Enter your email adress" />
              <div id="email_error" />
              <input className="input-fields" id="password" type="password" placeholder="Enter your Password" />
              <div id="password_error1" />
              <input className="submit-btn" type="submit" value="Sign in" />
              <div className="recover">
                <h3><a href="./forgotpassword.html">Forgot Password?</a></h3>
                <h3>New Here? <a href="/signup">Sign up</a></h3>
              </div>
            </div>
          </div>
        </form>
        <div className="table-shadow" />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Signup;
