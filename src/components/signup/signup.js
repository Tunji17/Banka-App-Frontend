import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './signup.css';

const signup = () => {
  return (
    <Fragment>
      <Navbar title="Banka App" signinText="Sign in" />
      <div className="container">
        <form className="signup-form">
          <div className="contains-form-div">
            <div className="form-div">
              <h3 className="heading-info">Sign up Info</h3>
              <div id="signup_messages" />
              <div className="row">
                <div className="column">
                  <input className="input-fields" id="firstName" type="text" placeholder="What's your name?" />
                  <div id="firstname_error" />
                </div>
                <div className="column">
                  <input className="input-fields" id="lastName" type="text" placeholder="Tell us your Surname" />
                  <div id="lastname_error" />
                </div>
              </div>
              <input className="input-fields" id="emailAddress" type="email" placeholder="Enter your email adress" />
              <div id="email_error" />
              <div className="row">
                <div className="column">
                  <input className="input-fields" id="password" type="password" placeholder="Enter a Password" />
                  <div id="password_error1" />
                </div>
                <div className="column">
                  <input className="input-fields" id="confirm-password" type="password" placeholder="Confirm Password" />
                  <div id="password_error2" />
                </div>
              </div>

              <input className="submit-btn" type="submit" value="Sign up" />

            </div>
          </div>
        </form>

        <div className="table-shadow" />
      </div>
      <Footer />
    </Fragment>
  );
};

export default signup;
