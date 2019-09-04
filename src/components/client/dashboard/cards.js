import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './dashboard.css';

const Cards = ({
  type,
  accountnumber,
  status,
  balance,
}) => {
  return (
    <Fragment>
      <div className="content-container-box ">
        <div className="box-content">
          <div className="box-content-header"> <h3>{ type } account</h3> </div>
          <div className="box-content-item">
            <div className="bank-account">
              <h4>ACCOUNT NO.</h4>
              <h2>{ accountnumber }</h2>
            </div>
            <div className="bank-account-active">
              <h3>{ status }</h3>
            </div>
          </div>
          <div className="box-content-item">
            <div className="bank-account">
              <h5>AVAILABLE FOR SPENDING</h5>
              <h2> <span>&#8358;</span>{ balance }</h2>
            </div>
            <div className="bank-account-active">
              <button type="button" className="bank-account-button">View Account</button>
            </div>
          </div>
          <div className="box-content-item" />
        </div>
      </div>
    </Fragment>
  );
};

Cards.propTypes = {
  type: PropTypes.string.isRequired,
  accountnumber: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,

};

export default Cards;
