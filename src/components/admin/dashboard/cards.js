import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './dashboard.css';

const Cards = ({
  cashier,
  accountnumber,
  type,
  amount,
}) => {
  let readabledate;
  // let totalCredit;
  // let totalDebit;

  return (
    <Fragment>
      <div className="history-container">
        <h5>----- ${readabledate} ----- </h5>
        <div className="main-history">
          <div className="column">CashierId</div>
          <div className="column">Account No</div>
          <div className="column">Type</div>
          <div className="column">Amount</div>
        </div>
        <div className="main-history">
          <div className="column">{ cashier }</div>
          <div className="column">{ accountnumber }</div>
          <div className="column">{ type }</div>
          <div className="column"><span>&#8358;</span>{ amount }</div>
        </div>

      </div>
    </Fragment>
  );
};

Cards.propTypes = {
  type: PropTypes.string.isRequired,
  accountnumber: PropTypes.string.isRequired,
  cashier: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,

};

export default Cards;
