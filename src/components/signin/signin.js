import React, { Fragment, useContext, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Alert from '../layout/alert';
import AppContext from '../../context/AppContext/appContext';
import './signin.css';

const Signup = () => {
  const appContext = useContext(AppContext);
  const { signInUser } = appContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = {
    email,
    password,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(userData);
  };

  return (
    <Fragment>
      <Navbar title="Banka App" />
      <div className="container">
        <form onSubmit={onSubmit} className="signin-form">
          <div className="contains-form-div">
            <div className="form-div">
              <h3 className="heading-info">Welcome Back</h3>
              <Alert />
              <input
                className="input-fields"
                id="emailAddress"
                type="email"
                placeholder="Enter your email adress"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="input-fields"
                id="password"
                type="password"
                placeholder="Enter your Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                className="submit-btn"
                type="submit"
                value="Sign in"
              />
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
