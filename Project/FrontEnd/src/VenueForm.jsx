import React, { useState, useEffect } from 'react';
import "./VenueForm.css"
const VenueForm = ({ addVenue, updateVenue, selectedVenue, clearSelectedVenue }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });

  useEffect(() => {
    if (selectedVenue) {
      setFormData(selectedVenue);
    } else {
      clearForm();
    }
  }, [selectedVenue]);

  const clearForm = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedVenue) {
      updateVenue({ ...selectedVenue, ...formData });
    } else {
      addVenue({ ...formData });
    }

    clearForm();
    clearSelectedVenue();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="venue-form" onSubmit={handleSubmit}>
      <h2>{selectedVenue ? 'Edit Venue' : 'Add New Venue'}</h2>
      <label>
        Venue Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{selectedVenue ? 'Update Venue' : 'Add Venue'}</button>
      {selectedVenue && (
        <button type="button" onClick={clearSelectedVenue}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default VenueForm;
