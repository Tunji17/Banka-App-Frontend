import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './notfound.css';

const NotFound = () => {
  return (
    <Fragment>
      <Navbar title="Banka App" />
      <div className="notfound-body">
        <h1 className="header-notfound">Not Found</h1>
        <p className="centered">The page you are looking for does not exist...</p>
      </div>
      <Footer />
    </Fragment>
  );
};

export default NotFound;
