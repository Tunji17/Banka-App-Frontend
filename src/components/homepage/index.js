import React, { Fragment } from 'react';
import NavBar from '../layout/Navbar';
import HomeHeader from './homeHeader';
import HomeBody from './homeBody';
import Footer from '../layout/Footer';
import './home.css';

const home = () => {
  return (
    <Fragment>
      <NavBar />
      <HomeHeader />
      <HomeBody />
      <Footer />
    </Fragment>
  );
};

export default home;
