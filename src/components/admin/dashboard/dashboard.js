import React from 'react';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';

const Dashboard = () => {
  return (
    <div>
      <AuthNavbar firstmenu="Dashboard" secondmenu="All Users" thirdmenu="Register New Staff/Admin" fourthmenu="All Bank Accounts" />
      <Sidebar title="Admin Dashboard" firstmenu="Dashboard" secondmenu="All Users" thirdmenu="Register New Staff/Admin" fourthmenu="All Bank Accounts" />
    </div>
  );
};

export default Dashboard;
