import React from 'react';
import AuthNavbar from '../../layout/AuthNavbar';
import Sidebar from '../../layout/sidebar';

const Dashboard = () => {
  return (
    <div>
      <AuthNavbar firstmenu="Dashboard" thirdmenu="All Bank Accounts" />
      <Sidebar title="Staff Dashboard" firstmenu="Dashboard" thirdmenu="All Bank Accounts" />
    </div>
  );
};

export default Dashboard;
