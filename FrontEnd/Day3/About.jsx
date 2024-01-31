// AboutPage.js

import React from 'react';
import './About.css';
import UserNavBar from "./UserNavBar"

const AboutPage = () => {
  return (
    <div className="about-container">
    <UserNavBar/>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to [Your Event Management Company Name], your partner in creating unforgettable
          events! We specialize in delivering high-quality event planning and management services
          tailored to your unique needs. With our team of experienced professionals, we ensure every
          detail is taken care of, leaving you free to enjoy your special moments.
        </p>
      </div>
      <div className="about-image">
        {/* Include your company image or any relevant image here */}
        <img src="../src/photo/login.jpg" alt="Company Image" />
      </div>
    </div>
  );
};

export default AboutPage;
