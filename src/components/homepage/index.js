import React, { Fragment } from 'react';
import NavBar from '../layout/Navbar';
import HomeHeader from './homeHeader';
import HomeBody from './homeBody';
import Footer from '../layout/Footer';
import './home.css';

const Home = () => {
  return (
    <Fragment>
      <NavBar title="Banka App" signupText="Sign up" signinText="Sign in" />
      <HomeHeader />
      <HomeBody />
      <Footer />
    </Fragment>
  );
};

export default Home;
