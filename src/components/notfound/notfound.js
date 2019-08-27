import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './notfound.css';

const NotFound = ({ location }) => {
  return (
    <Fragment>
      <Navbar title="Banka App" />
      <div className="notfound-body">
        <h1 className="header-notfound">Not Found <code>{location.pathname}</code></h1>
        <p className="centered">The page you are looking for does not exist...</p>
      </div>
      <Footer />
    </Fragment>
  );
};

NotFound.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NotFound;
