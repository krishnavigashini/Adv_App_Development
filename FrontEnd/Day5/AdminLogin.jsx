import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./UserLogin.css"

export default class AdminLogin extends Component {
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
        <h3>ADMIN LOGIN</h3>
<br></br>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
<br></br>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
        <Link to="/adminhome">
          <button type="submit" className="btn btn-primary">
          Submit
          </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
           <a href="#">Forgot password?</a>
        </p>
      </form>
      </div>
    )
  }
}
