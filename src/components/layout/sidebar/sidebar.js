/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoNav from '../../../assets/images/logo-nav.png';
import maleAvatar from '../../../assets/images/male-avatar.png';
import './sidebar.css';

const Sidebar = ({
  title,
  firstmenu,
  secondmenu,
  thirdmenu,
  fourthmenu,
  dashboardUrl,
}) => {
  return (
    <div id="menu" className="">
      <div className="menu-header">
        <div className="header-topol">
          <img src={logoNav} alt="logo-nav" />
          <h3>{title}</h3>

        </div>

      </div>
      <div className="menu-box">
        <div className="menu-wrapper-inner">
          <div className="profile-img">
            <img className="imageid" src={maleAvatar} alt="avatar" />

            <div className="uploaddiv">
              <button type="submit" className="uploadimagebtn"><Link href="javascript: void(0)">Upload Picture</Link></button>
              <input type="file" className="input-file" id="upload_input" name="upload-img" />
            </div>
            <h3 className="user-name" />
          </div>
          <div className="menu-wrapper">
            <div className="menu-slider">
              <div className="menu">

                <ul className="menu-ul-item">
                  {firstmenu.length > 0 && (
                  <li>
                    <div className="menu-item "><Link href={dashboardUrl} className="menu-anchor active" data-menu="1"><i className="fas fa-chart-line" />&nbsp;&nbsp;{firstmenu}</Link>
                    </div>
                  </li>
                  )}
                  {secondmenu.length > 0 && (
                  <li>
                    <div className="menu-item"><Link href={dashboardUrl} className="menu-anchor" data-menu="2"><i className="fas fa-history" />&nbsp;&nbsp;{secondmenu}</Link>
                    </div>
                  </li>
                  )}
                  {thirdmenu.length > 0 && (
                  <li>
                    <div className="menu-item"><Link href={dashboardUrl} className="menu-anchor" data-menu="3"><i className="fas fa-edit" />&nbsp;&nbsp;{thirdmenu}</Link>

                    </div>
                  </li>
                  )}
                  {fourthmenu.length > 0 && (
                  <li>
                    <div className="menu-item "><Link href={dashboardUrl} className="menu-anchor" data-menu="3"><i className="fas fa-hands-helping" />&nbsp;&nbsp;{fourthmenu}</Link>
                    </div>
                  </li>
                  )}
                  <li>
                    <div to="/" className="menu-item"><Link className="show-form" data-menu="4"><i className="fas fa-sign-out-alt" />&nbsp;&nbsp;Logout </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  firstmenu: '',
  secondmenu: '',
  thirdmenu: '',
  fourthmenu: '',

};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  firstmenu: PropTypes.string,
  secondmenu: PropTypes.string,
  thirdmenu: PropTypes.string,
  fourthmenu: PropTypes.string,
  dashboardUrl: PropTypes.string.isRequired,
};

export default Sidebar;
