import React from 'react';
import { Link } from 'react-router-dom';
import PlaystoreIcon from '../../../assets/images/get-it-on-playstore.png';
import PhoneSvg from '../../../assets/images/phonesvg.svg';
import MsgSvg from '../../../assets/images/msgsvg.svg';
import './footer.css';

const footer = () => {
  return (
    <footer id="footer">
      <div id="utility-links">
        <div className="help">
          <ul>
            <h3 className="left">Need Help?</h3>
            <li><Link to="/">Contact us today</Link></li>
            <li><Link to="/">Return Policy</Link></li>
            <li><img className="help-img-icon" src={MsgSvg} alt="livechat" /><Link to="/">Live Chat</Link></li>
            <li><img className="help-img-icon" src={PhoneSvg} alt="Phone number" /><Link to="/">+23480000000000</Link></li>
          </ul>
        </div>
        <div className="rspaces" />
        <div className="about">
          <ul>
            <h3 className="left">About Banka App</h3>
            <li><Link to="/">Company Information</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="dashboard.html" target="_blank">User dashboard</Link></li>
            <li><Link to="staffUI/staffDashboard.html" target="_blank">Staff dashboard</Link></li>
            <li><Link to="adminUI/adminDashboard.html" target="_blank">Admin dashboard</Link></li>

          </ul>
        </div>

        <div className="rspaces" />

        <div className="card">
          <ul>

            <h3 className="left">Our Services</h3>
            <li><Link to="/">Open a new bank account</Link></li>
            <li><Link to="/">View account Information without visiting our branch</Link></li>
          </ul>
        </div>
      </div>

      <div className="app-img">
        <img src={PlaystoreIcon} alt="" />
        <div className="app-text">Logo made with <Link to="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</Link></div>
      </div>


      <div className="space-div" />

      <div id="copyright">
        <ul>
          <li className="copy">© Banka App Inc. 2019</li>

          <li className="copy">Privacy Policy | Terms + Conditions</li>
        </ul>

      </div>

    </footer>
  );
};

export default footer;
