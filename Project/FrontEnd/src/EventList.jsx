import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import "./EventList.css"
import AdminNav from './AdminNavBar';
import Sidebar from './AdminSideBar';

const BASE_URL = 'http://localhost:8080';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/event/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${BASE_URL}/event/`, newEvent, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const updateEvent = async (updatedEvent) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${BASE_URL}/event/${updatedEvent.id}`, updatedEvent, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/event/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleEditClick = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setSelectedEvent(eventToEdit);
  };

  return (
    <body className='eventbody'>
    <div className='eventlist-container'>
      <AdminNav />
      <div className="event-list">
        <h1>Event List</h1>
        <EventForm
          addEvent={addEvent}
          updateEvent={updateEvent}
          selectedEvent={selectedEvent}
          clearSelectedEvent={() => setSelectedEvent(null)}
        />
        <Sidebar/>
        <div className="event-grid">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <p className="event-name">{event.name}</p>
              <p className="event-description">{event.description}</p>
              <div className="event-buttons">
                <button onClick={() => handleEditClick(event.id)}>Edit</button>
                <button onClick={() => deleteEvent(event.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </body>
  );
};

export default EventList;
