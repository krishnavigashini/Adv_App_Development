// Dashboard.js

import React from 'react';
import './UserHome.css';
// import Student from '../src/photo/login.jpg'
import UserNavBar from "./UserNavBar"
import UserSideBar from "./UserSideBar"
const UserHome = () => {
  return (
    <body className='userhome'>
    <div className="dashboard-container">
    <img className='uHome'></img>
    <UserNavBar/>
    <UserSideBar/>
    </div>
    </body>
  );
};

export default UserHome;
