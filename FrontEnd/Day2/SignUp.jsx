import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./UserLogin.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/userlogin'}>
              EVENT HUB
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/userlogin'}>
                    USER LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/adminlogin'}>
                    ADMIN LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/signup'}>
                    SIGN UP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <form className='loginform'>
        <h3>SIGN UP</h3>
<br></br>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" required/>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="d-grid">
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>

        <p className="forgot-password text-right">
          Already registered? <Link to="/userlogin">Login</Link>
        </p>
      </form>
      </div>
    );
  }
}
