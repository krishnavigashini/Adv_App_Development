import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VenueForm from '../src/VenueForm';
import "./VenueList.css"
import AdminNav from './AdminNavBar';
import Sidebar from './AdminSideBar';

const BASE_URL = 'http://localhost:8080';

const VenueList = () => {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/venue/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const addVenue = async (newVenue) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${BASE_URL}/venue/`, newVenue, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVenues();
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  const updateVenue = async (updatedVenue) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${BASE_URL}/venue/${updatedVenue.id}`, updatedVenue, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVenues();
      setSelectedVenue(null);
    } catch (error) {
      console.error('Error updating venue:', error);
    }
  };

  const deleteVenue = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/venue/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVenues();
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  const handleEditClick = (id) => {
    const venueToEdit = venues.find((venue) => venue.id === id);
    setSelectedVenue(venueToEdit);
  };

  return (
    <body className='venuebody'>
    <div className='venue-list-container'>
      <AdminNav />
      <h1 className='venue-list-title'>Venue List</h1>
      <VenueForm
        addVenue={addVenue}
        updateVenue={updateVenue}
        selectedVenue={selectedVenue}
        clearSelectedVenue={() => setSelectedVenue(null)}
      />
      <Sidebar/>
      <div className='venue-grid'>
        {venues.map((venue) => (
          <div key={venue.id} className='venue-item'>
            <p className='venue-name'>{venue.name}</p>
            <p className='venue-description'>{venue.description}</p>
            <div className='venue-buttons'>
              <button className='venue-button' onClick={() => handleEditClick(venue.id)}>Edit</button>
              <button className='venue-button' onClick={() => deleteVenue(venue.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default VenueList;
