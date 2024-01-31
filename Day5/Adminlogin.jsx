// // import React from 'react'

// // const Login = () => {
// //   return (
// //     <div>
      
    

// //     </div>
// //   )


// // export default Login
// // YourComponent.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Loginad = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateLogin = () => {
    // Basic validation - you should implement proper authentication logic
    if (username === 'admin' && password === 'password') {
      setErrorMessage(''); // Clear error message
      alert('Login successful!');
       // Replace with your actual login logic
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (<div id='login-main'>
    <div className="lcontainer">
      <form>
        <h2>Login</h2>
        <llabel htmlFor="username">Username:</llabel>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <llabel htmlFor="password">Password:</llabel>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Link to='adminhome'><lbutton type="button" onClick={validateLogin}>
          Login
        </lbutton></Link>
      </form>
      <p id="error-message">{errorMessage}</p>
      {/* <p>Dont have an account? </p> */}
     
    </div>
  </div>
    
  );
};

export default Loginad