import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import UserLogin from './UserLogin'
import SignUp from './SignUp'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/login'}>
              EVENT HUB
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/signup'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<UserLogin />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/signup" element={<SignUp />} />
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