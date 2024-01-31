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
    description: 'Planning a birthday party can be stressful, but it doesnt have to be! Let us take care of the details so you can focus on enjoying the celebration. Our team at [Your Event Management Company] is dedicated to creating unforgettable birthday experiences tailored just for you.',
    imageUrl: '../src/photo/login1.jpg',
  },
  {
    name: 'Party',
    description: 'At our company, we believe that every celebration is unique and deserves a touch of elegance and professionalism. Our dedicated team is here to turn your party dreams into reality, offering end-to-end event management services that cater to your every need.',
    imageUrl: '../src/photo/login2.jpg',
  },
  {
    name: 'Events',
    description: 'Transform your party into a memorable experience with our creative themes and stunning decorations. Whether its a birthday bash, anniversary celebration, or corporate event, we have the perfect theme for every occasion.',
    imageUrl: '../src/photo/login.jpg',
  },
  {
    name: 'Wedding Anniversary',
    description: 'Planning a wedding should be a joyous experience, not a stressful one. Let us handle the logistics while you savor every moment.',
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