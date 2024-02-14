import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Bookings.css"

const BASE_URL = 'http://localhost:8080';

const BookingComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: '',
    mobile: '',
    email: '',
    theme: '',
    venue: '',
    event: '',
    time: '',
    date: ''
  });
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/booking/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (selectedBooking) {
        await axios.put(`${BASE_URL}/booking/${selectedBooking.id}`, newBooking, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBookings();
        setSelectedBooking(null);
      } else {
        await axios.post(`${BASE_URL}/booking/`, newBooking, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBookings();
      }
      setNewBooking({
        name: '',
        mobile: '',
        email: '',
        theme: '',
        venue: '',
        event: '',
        time: '',
        date: ''
      });
    } catch (error) {
      console.error('Error creating/updating booking:', error);
    }
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setNewBooking(booking);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/booking/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="booking-container">
      <h2>Bookings</h2>
      <form className="form1-container" onSubmit={handleSubmit}>
        <input className="binput" type="text" name="name" value={newBooking.name} onChange={handleInputChange} placeholder="Name" />
        <input className="binput" type="text" name="mobile" value={newBooking.mobile} onChange={handleInputChange} placeholder="Mobile" />
        <input className="binput" type="text" name="email" value={newBooking.email} onChange={handleInputChange} placeholder="Email" />
        <input className="binput" type="text" name="theme" value={newBooking.theme} onChange={handleInputChange} placeholder="Theme" />
        <input className="binput" type="text" name="venue" value={newBooking.venue} onChange={handleInputChange} placeholder="Venue" />
        <input className="binput" type="text" name="event" value={newBooking.event} onChange={handleInputChange} placeholder="Event" />
        <input className="binput" type="time" name="time" value={newBooking.time} onChange={handleInputChange} placeholder="Time" />
        <br/>
        <input className="binput" type="date" name="date" value={newBooking.date} onChange={handleInputChange} placeholder="Date" />
        <br/>
        <button className="bbutton" type="submit">{selectedBooking ? 'Update Booking' : 'Create Booking'}</button>
      </form>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <span>Name: {booking.name}</span>
            <span>Mobile: {booking.mobile}</span>
            <span>Email: {booking.email}</span>
            <span>Theme: {booking.theme}</span>
            <span>Venue: {booking.venue}</span>
            <span>Event: {booking.event}</span>
            <span>Time: {booking.time}</span>
            <span>Date: {booking.date}</span>
            <button onClick={() => handleEdit(booking)}>Edit</button>
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingComponent;
