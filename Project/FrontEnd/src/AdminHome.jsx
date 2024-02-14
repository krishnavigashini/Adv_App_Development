// Dashboard.js

import React from 'react';
import './AdminHome.css';
// import Student from '../src/photo/login.jpg'
import AdminNavBar from "./AdminNavBar"
import AdminSideBar from "./AdminSideBar"
const UserHome = () => {
  return (
    <body className='adminhome'>
    <div className="dashboard-container">
    <AdminNavBar/>
    <AdminSideBar/>
    </div>
    </body>
  );
};

export default UserHome;
