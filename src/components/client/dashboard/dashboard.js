import React from 'react';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';

const Dashboard = () => {
  return (
    <div>
      <AuthNavbar firstmenu="Dashboard" secondmenu="Account History" thirdmenu="Open New Account" fourthmenu="Help" />
      <Sidebar title="Your Dashboard" firstmenu="Dashboard" secondmenu="Account History" thirdmenu="Open New Account" fourthmenu="Help" />
    </div>
  );
};

export default Dashboard;
