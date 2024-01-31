import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UserLogin from './UserLogin'
import SignUp from './SignUp'
import UserHome from './UserHome'
import AdminLogin from './AdminLogin'
import AdminHome from "./AdminHome"
import Event from "./Event.jsx"
import Venue from "./Venue.jsx"
import Theme from './Theme.jsx'
import BookEvent from './BookEvent.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import EventList from "./EventList.jsx"
import VenueList from "./VenueList.jsx"
import Bookings from "./Bookings.jsx"
import Payment from "./Payment.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<UserLogin />} />
              <Route path="/userlogin" element={<UserLogin />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/userhome" element={<UserHome />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/event" element={<Event />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/theme" element={<Theme />} />
              <Route path="/bookevent" element={<BookEvent />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/eventlist" element={<EventList />} />
              <Route path="/venuelist" element={<VenueList />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/payment" element={<Payment />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

// import React from 'react'
// import UserLogin from './UserLogin'
// // import Signup from './Components/SignUp';


// const App = () => {
//   return (
//     <div>
//     <UserLogin/>
//     </div>
//   )
// }

// export default App;