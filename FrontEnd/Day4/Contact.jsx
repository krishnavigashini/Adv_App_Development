// ContactForm.js

import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
    // You can also send the form data to a server or perform other actions.
  };

  return (
    <div className="contact-form-container">
    <h2>CONTACT</h2><br></br>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className='conlabel'>
          Name:
          <input type="text" name="name" className='coninput' value={formData.name} onChange={handleChange} placeholder='Name' required />
        </label>
        <label className='conlabel'>
          Email:
          <input type="email" name="email" className='coninput' value={formData.email} onChange={handleChange} placeholder='Email' required />
        </label>
        <label className='conlabel'>
          Subject:
          <input type="text" name="subject" className='coninput' value={formData.subject} onChange={handleChange} placeholder='Subject' required />
        </label>
        <label className='conlabel'>
          Message:
          <textarea name="message" className='contextarea' value={formData.message} onChange={handleChange} placeholder='Message' required />
        </label>
        <button type="submit" className='conbutton'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
