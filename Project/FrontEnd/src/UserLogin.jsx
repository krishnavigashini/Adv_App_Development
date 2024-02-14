import React, { useState } from 'react';
import axios from 'axios';
import './UserLogin.css';

import { Link, useNavigate } from "react-router-dom";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
      role: role,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
      localStorage.setItem('token', response.data.token);
      console.log(response.data.token);
        console.log('Login successful');
       handleLogin();
        if(role=="admin"&&email=="admin@gmail.com")
        {
          navigate("/adminhome")
        }
        else
        {
          navigate("/userhome")
        }

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
  
      <div className="login-container">
        
        <h2 className="lo">Login</h2>
        <br />
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
          placeholder='Email'
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
          placeholder='Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="role">Role</label> {/* Add label for role dropdown */}
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
          <option value="" disabled>Select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <br />
          <button className="login-lin" type="submit">Login</button>
          <br />
          <p className="login-link">Don't have an account? <Link to="/">Register here</Link></p>
          
          </form>
      </div>
  );
};

export default Login;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// class UserLogin extends Component {
//   state = {
//     email: '',
//     password: ''
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     axios.post('http://localhost:8080/api/v1/auth/login', { email, password })
//       .then(response => {
//         localStorage.setItem('token', response.data.token);
//         // Redirect to home page or dashboard
//         this.props.history.push('/userhome');
//       })
//       .catch(error => {
//         console.error('Login failed:', error);
//         // Handle login error (e.g., display error message)
//       });
//   };

//   render() {
//     return (
//       <div>
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//       <div className="container">
//         <Link className="navbar-brand" to={'/userlogin'}>
//           EVENT HUB
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to={'/userlogin'}>
//                 USER LOGIN
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to={'/adminlogin'}>
//                 ADMIN LOGIN
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to={'/signup'}>
//                 SIGN UP
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//         <form className='loginform' onSubmit={this.handleSubmit}>
//           <h3>USER LOGIN</h3>
//           <br></br>
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               className="form-control"
//               placeholder="Enter email"
//               required
//             />
//           </div>
//           <br></br>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               className="form-control"
//               placeholder="Enter password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//           <p className="forgot-password text-right">
//             <Link to="#">Forgot password?</Link>
//           </p>
//         </form>
//       </div>
//     );
//   }
// }

// export default UserLogin;


// // import React, { Component } from 'react'
// // import { Link } from 'react-router-dom';
// // import "./UserLogin.css"

// // export default class Login extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
// //           <div className="container">
// //             <Link className="navbar-brand" to={'/userlogin'}>
// //               EVENT HUB
// //             </Link>
// //             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
// //               <ul className="navbar-nav ml-auto">
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to={'/userlogin'}>
// //                     USER LOGIN
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to={'/adminlogin'}>
// //                     ADMIN LOGIN
// //                   </Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to={'/signup'}>
// //                     SIGN UP
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </nav>

// //         <form className='loginform'>
// //           <h3>USER LOGIN</h3>
// //           <br></br>
// //           <div className="mb-3">
// //             <label>Email address</label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               placeholder="Enter email"
// //             />
// //           </div>
// //           <br></br>
// //           <div className="mb-3">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               placeholder="Enter password"
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <div className="custom-control custom-checkbox">
// //               <input
// //                 type="checkbox"
// //                 className="custom-control-input"
// //                 id="customCheck1"
// //               />
// //               <label className="custom-control-label" htmlFor="customCheck1">
// //                 Remember me
// //               </label>
// //             </div>
// //           </div>

// //           <div className="d-grid">
// //             <button type="submit" className="btn btn-primary">
// //               Submit
// //             </button>
// //           </div>
// //           <p className="forgot-password text-right">
// //             <a href="#">Forgot password?</a>
// //           </p>
// //         </form>
// //       </div>
// //     )
// //   }
// // }
