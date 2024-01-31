// Grid.jsx
import React from 'react';
import './Event.css';
import UserNavBar from './UserNavBar';
// import UserSideBar from './UserSideBar';
import  '../src/photo/login.jpg'; // Adjust the paths accordingly
import  '../src/photo/login1.jpg';
import  '../src/photo/login2.jpg';
import '../src/photo/login3.jpg';

const eventsData = [
  {
    name: 'Birthday',
    description: 'Immerse yourself in a vibrant atmosphere with thematic decor that captures the essence of our journey',
    imageUrl: '../src/photo/login1.jpg',
  },
  {
    name: 'Party',
    description: 'Indulge in a curated selection of handcrafted cocktails and exquisite beverages served by our skilled mixologists.',
    imageUrl: '../src/photo/login2.jpg',
  },
  {
    name: 'Ceremonies',
    description: 'Indulge in a scrumptious array of delights with our specially curated menu.',
    imageUrl: '../src/photo/login.jpg',
  },
  {
    name: 'Wedding Anniversary',
    description: 'Exchange of vows and rings in a romantic setting that reflects the unique love story of the couple',
    imageUrl: '../src/photo/login3.jpg',
  },
  // Add more events as needed
];

const Event = () => {
  return (
    <div className="event-container">
    <UserNavBar/>
    <br></br>
      {eventsData.map((event, index) => (
        <div key={index} className="event">
          <div className="image-container">
            <img src={event.imageUrl} alt={event.name} className='imgvenue' />
          </div>
          <div className="details-container">
            <h3 className='h3venue'>{event.name}</h3>
            <p className='pvenue'>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;