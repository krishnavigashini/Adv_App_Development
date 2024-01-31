// Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      <ul className="sidebar-list">
        <li><Link to="/eventlist" style={{color:'white'}}>Event List</Link></li>
        <li><Link to="/venuelist" style={{color:'white'}}>Venue List</Link></li>
        <li><Link to="/bookings" style={{color:'white'}}>Bookings List</Link></li>
        <li><Link to="/payment" style={{color:'white'}}>Payment Details</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
