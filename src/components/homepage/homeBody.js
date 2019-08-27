import React, { Fragment } from 'react';
import sideLogo from '../../assets/images/side-logo.jpg';

const HomeBody = () => {
  return (
    <Fragment>
      <section className="mid-section">
        <div className="side-attract-mid bcolor">
          <h1>We’re here for you</h1>
          <p>
            Banka is a light-weight core banking application that powers banking operations
            like account creation, customer deposit and withdrawals. This app is meant to
            support a single bank, where users can signup and create bank accounts online,
            but must visit the branch to withdraw or deposit money
          </p>
        </div>
        <div className="side-image">
          <img src={sideLogo} alt="side-logo" />
        </div>
      </section>
      <section className="last-section">
        <h2>chat us, call us, email</h2>
      </section>
    </Fragment>
  );
};

export default HomeBody;
