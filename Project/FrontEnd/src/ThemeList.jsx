import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThemeForm from '../src/ThemeForm';
import AdminNav from './AdminNavBar';
import "./ThemeList.css";
import Sidebar from './AdminSideBar';

const BASE_URL = 'http://localhost:8080';

const ThemeList = () => {
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/theme/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setThemes(response.data);
    } catch (error) {
      console.error('Error fetching themes:', error);
    }
  };

  const addTheme = async (newTheme) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${BASE_URL}/theme/`, newTheme, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchThemes();
    } catch (error) {
      console.error('Error adding theme:', error);
    }
  };

  const updateTheme = async (updatedTheme) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${BASE_URL}/theme/${updatedTheme.id}`, updatedTheme, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchThemes();
      setSelectedTheme(null);
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  const deleteTheme = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/theme/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      fetchThemes();
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  };

  const handleEditClick = (id) => {
    const themeToEdit = themes.find((theme) => theme.id === id);
    setSelectedTheme(themeToEdit);
  };

  return (
    <body className='themebody'>
    <div className='themelist-container'>
    
      <AdminNav />
      
      <div className="theme-list-container">
      <h1 className="themelist-heading">Theme List</h1>
      <ThemeForm
      addTheme={addTheme}
      updateTheme={updateTheme}
      selectedTheme={selectedTheme}
      clearSelectedTheme={() => setSelectedTheme(null)}
      />
      <Sidebar/>
        
        <div className="theme-grid">
          {themes.map((theme) => (
            <div key={theme.id} className="theme-item">
              <p className="theme-name">{theme.name}</p>
              <p className="theme-description">{theme.description}</p>
              <div className="theme-buttons">
                <button onClick={() => handleEditClick(theme.id)}>Edit</button>
                <button onClick={() => deleteTheme(theme.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </body>
  );
};

export default ThemeList;
