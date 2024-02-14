import React, { useState, useEffect } from 'react';
import "./EventForm.css"
const EventForm = ({ addEvent, updateEvent, selectedEvent, clearSelectedEvent }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });

  useEffect(() => {
    if (selectedEvent) {
      setFormData(selectedEvent);
    } else {
      clearForm();
    }
  }, [selectedEvent]);

  const clearForm = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedEvent) {
      updateEvent({ ...selectedEvent, ...formData });
    } else {
      addEvent({ ...formData });
    }

    clearForm();
    clearSelectedEvent();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>{selectedEvent ? 'Edit Event' : 'Add New Event'}</h2>
      <label>
        Event Name:<br></br>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:<br></br>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{selectedEvent ? 'Update Event' : 'Add Event'}</button>
      {selectedEvent && (
        <button type="button" onClick={clearSelectedEvent}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default EventForm;
