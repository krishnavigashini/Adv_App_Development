import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link } from "react-router-dom";

const Home = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = {
      name: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', registrationData);
      console.log('User registered successfully:', response.data);
      // const Role=response.data.role;
      setShowSuccessPopup(true);
      // Clear input values
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
       }catch (error) {
      if (error.response) {
        console.error('Error registering user:', error.response.data);
        setErrorMessage(error.response.data.message || 'An error occurred.');
      } else if (error.request) {
        console.error('Request failed:', error.request);
        setErrorMessage('Request failed. Please try again.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An error occurred. Please try again.');
      }
      setShowErrorPopup(true);
    }
  };
  
  return (
    <div className="full">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="sign">Signup</h2>
        <label htmlFor="name" className="lab">Name</label>
        <input
          type="text"
          id="name"
          className="username-input"
          placeholder="Name..."
          value={username}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email" className="lab">Email</label>
        <input
          type="email"
          id="email"
          className="email-input"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password" className="lab">Password</label>
        <input
          type="password"
          id="password"
          className="password-input"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmPassword" className="lab">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="password-input"
          placeholder="Confirm Password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit" className="regi">Register</button>
        <br /><br />
        <p className="login-link">
          Already registered? <Link to="/userlogin">Login</Link>
        </p>
      </form>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup success-popup">
          <p>Registration Successful!</p>
          <button onClick={() => setShowSuccessPopup(false)}>Close</button>
        </div>
      )}
      {/* Error Popup */}
      {showErrorPopup && (
        <div className="popup error-popup">
          <p>Error: {errorMessage}</p>
          <button onClick={() => setShowErrorPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Home;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setError(null);
//     setSuccessMessage(null);
//   };

//   const simulateSignUp = (username, email, password) => {
//     // Simulate storing user in local state
//     const newUser = { username, email, password };
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//     setSuccessMessage('Successfully Registered!');
//     setAuthenticated(true); // Set authenticated to true after successful signup
//   };

//   const simulateLogin = (email, password) => {
//     // Simulate login by checking if the user exists in local state
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       setAuthenticated(true);
//       setSuccessMessage('Successfully Logged In!');
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);

//     if (isSignUp) {
//       // Simulate sign-up
//       // You can customize this logic based on your needs
//       if (username && email && password.length >= 8 && email.includes('@')) {
//         simulateSignUp(username, email, password);
//       } else {
//         setError('Please fill in all the required fields and ensure the password is at least 8 characters long, and email contains "@".');
//       }
//     } else {
//       // Simulate login
//       // You can customize this logic based on your needs
//       if (email && password) {
//         simulateLogin(email, password);
//       } else {
//         setError('Please fill in all the required fields.');
//       }
//     }
//   };

//   return (
//     <body className='homebg'>
//     <div className='homebg'>
//       <form onSubmit={handleSubmit} className='container'>
//         <h2>PARTY WITH US</h2>
//         <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//         {isSignUp && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password (at least 8 characters)"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className='ad1'>
//         <Link to={!isSignUp ? '/user' : ''} type="submit" className='ad1'>{isSignUp ? 'Sign Up' : 'Login'}</Link>
//         </button>
//         <p onClick={toggleForm}>
//           {isSignUp
//             ? 'Already have an account? Login'
//             : "Don't have an account? Sign Up"}
//         </p>
//         <p className='ph1'>If you are an admin</p>
//         <Link to='/admin' className="ad">
//           Admin
//         </Link>
//       </form>

//       <div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         {authenticated && successMessage && (
//           <p
//             className='ph'
//             style={{ color: 'green', position: 'fixed', bottom: '10px' }}
//           >
//             {successMessage}
//           </p>
//         )}
//       </div>
//     </div>
//     </body>
//   );
// };

// export default Home;








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setError(null);
//     setSuccessMessage(null);
//   };

//   const simulateSignUp = (username, email, password) => {
//     // Simulate storing user in local state
//     const newUser = { username, email, password };
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//     setSuccessMessage('Successfully Registered!');
//     setAuthenticated(true); // Set authenticated to true after successful signup
//   };

//   const simulateLogin = (email, password) => {
//     // Simulate login by checking if the user exists in local state
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       setAuthenticated(true);
//       setSuccessMessage('Successfully Logged In!');
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);

//     if (isSignUp) {
//       // Simulate sign-up
//       // You can customize this logic based on your needs
//       if (username && email && password.length >= 8 && email.includes('@')) {
//         simulateSignUp(username, email, password);
//       } else {
//         setError('Please fill in all the required fields and ensure the password is at least 8 characters long, and email contains "@".');
//       }
//     } else {
//       // Simulate login
//       // You can customize this logic based on your needs
//       if (email && password) {
//         simulateLogin(email, password);
//       } else {
//         setError('Please fill in all the required fields.');
//       }
//     }
//   };

//   return (
//     <div className='homebg'>
//       <h2>PARTY WITH US</h2>
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password (at least 8 characters)"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Link to={!isSignUp ? '/user' : ''} type="submit" className='ad1'>{isSignUp ? 'Sign Up' : 'Login'}</Link>
//       </form>

//       <p onClick={toggleForm}>
//         {isSignUp
//           ? 'Already have an account? Login'
//           : "Don't have an account? Sign Up"}
//       </p>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {authenticated && successMessage && (
//         <p className='ph' style={{ color: 'green', position: 'fixed', bottom: '10px' }}>{successMessage}</p>
//       )}
//       <p className='ph1'>If you are an admin</p>
//       <Link to='/admin' className="ad">Admin</Link>
//     </div>
//   );
// };

// export default Home;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// const Home = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setError(null);
//     setSuccessMessage(null);
//   };

//   const simulateSignUp = (username, email, password) => {
//     // Simulate storing user in local state
//     const newUser = { username, email, password };
//     setUsers([...users, newUser]);
//     setAuthenticated(true);
//     setSuccessMessage('Successfully Registered!');
//   };

//   const simulateLogin = (email, password) => {
//     // Simulate login by checking if the user exists in local state
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       setAuthenticated(true);
//       setSuccessMessage('Successfully Logged In!');
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);

//     if (isSignUp) {
//       // Simulate sign-up
//       // You can customize this logic based on your needs
//       if (username && email && password.length >= 8 && email.includes('@')) {
//         simulateSignUp(username, email, password);
//       } else {
//         setError('Please fill in all the required fields and ensure the password is at least 8 characters long, and email contains "@".');
//       }
//     } else {
//       // Simulate login
//       // You can customize this logic based on your needs
//       if (email && password) {
//         simulateLogin(email, password);
//       } else {
//         setError('Please fill in all the required fields.');
//       }
//     }
//   };

//   return (
//     // <div className='homebg'>
//     <div>
//       <h2>PARTY WITH US</h2>
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password (at least 8 characters)"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Link to={!isSignUp ? '/user' : ''} type="submit" className='ad1'>{isSignUp ? 'Sign Up' : 'Login'}</Link>
//       </form>

//       <p onClick={toggleForm}>
//         {isSignUp
//           ? 'Already have an account? Login'
//           : "Don't have an account? Sign Up"}
//       </p>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {authenticated && successMessage && (
//         <p className='ph' style={{ color: 'green', position: 'fixed', bottom: '10px' }}>{successMessage}</p>
//       )}
//       <p className='ph1'>If you are an admin</p>
//       <Link to='/admin' className="ad">Admin</Link>
//     </div>
//     // </div>
//   );
// };

// export default Home;
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import "./UserLogin.css";

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { firstName, lastName, email, password } = this.state;
//     axios.post('http://localhost:8080/api/v1/auth/register', { name: firstName + ' ' + lastName, email, password })
//       .then(response => {
//         localStorage.setItem('token', response.data.token);
//         window.location.href = '/userhome';
//       })
//       .catch(error => {
//         console.error('Registration failed:', error);
//       });
//   }

//   render() {
//     const { firstName, lastName, email, password } = this.state;
//     return (
//       <div>
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
//         <form className='loginform' onSubmit={this.handleSubmit}>
//           <h3>SIGN UP</h3>
//           <div className="mb-3">
//             <label>First name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={firstName}
//               onChange={this.handleChange}
//               className="form-control"
//               placeholder="First name"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Last name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={this.handleChange}
//               className="form-control"
//               placeholder="Last name"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//               className="form-control"
//               placeholder="Enter email"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//               className="form-control"
//               placeholder="Enter password"
//               required
//             />
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered? <Link to="/userlogin">Login</Link>
//           </p>
//         </form>
//       </div>
//     );
//   }
// }



// // import React, { Component } from 'react';
// // import { Link } from 'react-router-dom';
// // import "./UserLogin.css";

// // export default class SignUp extends Component {
// //   render() {
// //     return (
// //       <div>
// //       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
// //       <form className='loginform'>
// //         <h3>SIGN UP</h3>
// // <br></br>
// //         <div className="mb-3">
// //           <label>First name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="First name"
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label>Last name</label>
// //           <input type="text" className="form-control" placeholder="Last name" required/>
// //         </div>

// //         <div className="mb-3">
// //           <label>Email address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             placeholder="Enter email"
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             placeholder="Enter password"
// //             required
// //           />
// //         </div>

// //         <div className="d-grid">
// //           <Link to="/signup" className="btn btn-primary">
// //             Sign Up
// //           </Link>
// //         </div>

// //         <p className="forgot-password text-right">
// //           Already registered? <Link to="/userlogin">Login</Link>
// //         </p>
// //       </form>
// //       </div>
// //     );
// //   }
// // }
