import React, { Fragment } from 'react';
import './preloader.css';

const preloader = () => {
  return (
    <Fragment>
      <div id="loader" className="bounce" />
    </Fragment>
  );
};

export default preloader;
