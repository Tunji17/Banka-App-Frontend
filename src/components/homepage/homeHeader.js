import React from 'react';
import { Link } from 'react-router-dom';


const homeHeader = () => {
  return (
    <section>
      <div id="firtpageitem" />
      <div className="headerimages">
        <div className="side-attract">
          <i className="fas fa-university university-size" />
          <h4>Bank Where Ever You Go</h4>
          <h2>Bank App is made with real <br /> people in mind</h2>
          <Link to="/signup"><button type="button" className="signup-btn"> Join us today</button> </Link>
        </div>
      </div>
    </section>
  );
};

export default homeHeader;
