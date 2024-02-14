import React, { useState, useEffect } from 'react';
import "./ThemeForm.css"
const ThemeForm = ({ addTheme, updateTheme, selectedTheme, clearSelectedTheme }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });

  useEffect(() => {
    if (selectedTheme) {
      setFormData(selectedTheme);
    } else {
      clearForm();
    }
  }, [selectedTheme]);

  const clearForm = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTheme) {
      updateTheme({ ...selectedTheme, ...formData });
    } else {
      addTheme({ ...formData });
    }

    clearForm();
    clearSelectedTheme();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2>{selectedTheme ? 'Edit Theme' : 'Add New Theme'}</h2>
      <label>
        Theme Name:
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
      <button type="submit">{selectedTheme ? 'Update Theme' : 'Add Theme'}</button>
      {selectedTheme && (
        <button type="button" onClick={clearSelectedTheme}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default ThemeForm;
