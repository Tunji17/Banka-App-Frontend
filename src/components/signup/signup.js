import React, { Fragment, useState, useContext } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Alert from '../layout/alert';
import AppContext from '../../context/AppContext/appContext';
import './signup.css';

const Signup = () => {
  const appContext = useContext(AppContext);
  const { signUpUser, setAlert } = appContext;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userData = {
    firstName,
    lastName,
    email,
    password,
    type: 'client',
    isAdmin: false,
  };

  // eslint-disable-next-line consistent-return
  const onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (firstName.length <= 3) {
      return setAlert('First name should be more than 3 characters', 'error');
    }
    if (lastName.length <= 3) {
      return setAlert('Your Surname should be more than 3 characters', 'error');
    }
    if (!regexEmail.test(email)) {
      return setAlert('Please use a valid email', 'error');
    }
    if (password.length <= 5) {
      return setAlert('Your Password is required to be atleast 6 characters', 'error');
    }
    if (password !== confirmPassword) {
      return setAlert('Password and Confirm Password must match', 'error');
    }
    signUpUser(userData);
  };

  return (
    <Fragment>
      <Navbar title="Banka App" signinText="Sign in" />
      <div className="container">
        <form onSubmit={onSubmit} className="signup-form">
          <div className="contains-form-div">
            <div className="form-div">
              <h3 className="heading-info">Sign up Info</h3>
              <Alert />
              <div className="row">
                <div className="column">
                  <input
                    className="input-fields"
                    id="firstName"
                    type="text"
                    placeholder="What's your name?"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <div id="firstname_error" />
                </div>
                <div className="column">
                  <input
                    className="input-fields"
                    id="lastName"
                    type="text"
                    placeholder="Tell us your Surname"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <div id="lastname_error" />
                </div>
              </div>
              <input
                className="input-fields"
                id="emailAddress"
                type="email"
                placeholder="Enter your email adress"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div id="email_error" />
              <div className="row">
                <div className="column">
                  <input
                    className="input-fields"
                    id="password"
                    type="password"
                    placeholder="Enter a Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div id="password_error1" />
                </div>
                <div className="column">
                  <input
                    className="input-fields"
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
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

export default Signup;
