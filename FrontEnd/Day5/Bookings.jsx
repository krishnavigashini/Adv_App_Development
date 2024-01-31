// App.js

import React, { useState } from 'react';
import './Bookings.css';
import AdminNavBar from "./AdminNavBar"

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: '',
    mobile: '',
    email: '',
    venue: '',
    theme: '',
    eventName: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const addBooking = () => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
    setNewBooking({
      name: '',
      mobile: '',
      email: '',
      venue: '',
      theme: '',
      eventName: '',
      date: '',
      time: '',
    });
  };

  const deleteBooking = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings.splice(index, 1);
    setBookings(updatedBookings);
  };

  return (
    <div className="booking-container">
    <AdminNavBar/>
      <h1>Event Booking List</h1>
<br></br>
      <div className="form1-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newBooking.name}
          onChange={handleInputChange}
          className='binput'
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={newBooking.mobile}
          className='binput'
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newBooking.email}
          className='binput'
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={newBooking.venue}
          className='binput'
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="theme"
          placeholder="Theme"
          value={newBooking.theme}
          className='binput'
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={newBooking.eventName}
          className='binput'
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={newBooking.date}
          className='binput'
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={newBooking.time}
          className='binput'
          onChange={handleInputChange}
        />

        <button onClick={addBooking} className='bbutton'>Add Booking</button>
      </div>

      <ul className="booking-list">
        {bookings.map((booking, index) => (
          <li key={index} className="booking-item">
            <span>Name: {booking.name}</span>
            <span>Mobile: {booking.mobile}</span>
            <span>Email: {booking.email}</span>
            <span>Venue: {booking.venue}</span>
            <span>Theme: {booking.theme}</span>
            <span>Event Name: {booking.eventName}</span>
            <span>Date: {booking.date}</span>
            <span>Time: {booking.time}</span>
            <button onClick={() => deleteBooking(index)} className='bbutton'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
