import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AdminLogin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post('http://localhost:8080/api/v1/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        // Redirect to home page or dashboard
        this.props.history.push('/adminhome');
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login error (e.g., display error message)
      });
  };

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
        <form className='loginform' onSubmit={this.handleSubmit}>
          <h3>ADMIN LOGIN</h3>
          <br></br>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <br></br>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <p className="forgot-password text-right">
            <Link to="#">Forgot password?</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default AdminLogin;



// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import "./UserLogin.css"

// export default class AdminLogin extends Component {
//   render() {
//     return (
//         <div>
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={'/userlogin'}>
//               EVENT HUB
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/userlogin'}>
//                     USER LOGIN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/adminlogin'}>
//                     ADMIN LOGIN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/signup'}>
//                     SIGN UP
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       <form className='loginform'>
//         <h3>ADMIN LOGIN</h3>
// <br></br>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
// <br></br>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="d-grid">
//         <Link to="/adminhome">
//           <button type="submit" className="btn btn-primary">
//           Submit
//           </button>
//           </Link>
//         </div>
//         <p className="forgot-password text-right">
//            <a href="#">Forgot password?</a>
//         </p>
//       </form>
//       </div>
//     )
//   }
// }
