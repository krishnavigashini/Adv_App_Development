// Dashboard.js

import React from 'react';
import './AdminHome.css';
// import Student from '../src/photo/login.jpg'
import AdminNavBar from "./AdminNavBar"
import AdminSideBar from "./AdminSideBar"
const UserHome = () => {
  return (
    <div className="dashboard-container">
    <img className='uHome'></img>
    <AdminNavBar/>
    <AdminSideBar/>
    </div>
  );
};

export default UserHome;
