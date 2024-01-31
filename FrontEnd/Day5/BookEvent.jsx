// EventForm.js

import React, { useState } from 'react';
import './EventForm.css';
import UserNavBar from "./UserNavBar"

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    eventName: '',
    theme: '',
    time: '',
    venue: '',
    date: '',
    guestCount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    
    <div className="event-form-container">
    <h2 style={{textAlign:'center'}}>BOOK EVENT</h2><br></br>
      <form onSubmit={handleSubmit} className="event-form">
        <label className='booklabel'>
          Name:
          <input type="text" name="name" className="bookinput" value={formData.name} onChange={handleChange} placeholder='Name' required />
        </label>
        <label className='booklabel'>
          Phone Number:
          <input type="tel" name="phoneNumber" className="bookinput" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone Number' required/>
        </label>
        <label className='booklabel'>
          Email ID:
          <input type="email" name="email" className="bookinput" value={formData.email} onChange={handleChange} placeholder='Email Id' required/>
        </label>
        <label className='booklabel'>
          Event Name:
          <input type="text" name="eventName" className="bookinput" value={formData.eventName} onChange={handleChange} placeholder='Event Name' required/>
        </label>
        <label className='booklabel'>
          Theme:
          <input type="text" name="theme" className="bookinput" value={formData.theme} onChange={handleChange} placeholder='Theme' required/>
        </label>
        <label className='booklabel'>
          Time:
          <input type="time" name="time" className="bookinput" value={formData.time} onChange={handleChange} placeholder='Time' required/>
        </label>
        <label className='booklabel'>
          Venue:
          <input type="text" name="venue" className="bookinput" value={formData.venue} onChange={handleChange} placeholder='Venue' required/>
        </label>
        <label className='booklabel'>
          Date:
          <input type="date" name="date" className="bookinput" value={formData.date} onChange={handleChange} placeholder='Date' required/>
        </label>
        <label className='booklabel'>
          Guest Count:
          <input type="number" name="guestCount" className="bookinput" value={formData.guestCount} onChange={handleChange} placeholder='Count' required/>
        </label>
        <button type="submit" className='bookbutton'>Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
