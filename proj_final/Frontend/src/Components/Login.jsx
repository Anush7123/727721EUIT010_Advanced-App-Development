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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the button disabled state
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email,
        password
      });
      console.log(response.data);
      console.log("Login sucessfull");
      navigate('/home1');
    }
    catch(error){
      console.error('Login failed',error);
    }
  };
 

  return (<div id='login-main'>
    <div className="lcontainer">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <llabel htmlFor="email">Email:</llabel>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <llabel htmlFor="password">Password:</llabel>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit" disabled={isButtonDisabled} >
          Login
        </button>
      </form>
      {/* <p id="error-message">{errorMessage}</p> */}
      {/* <p>Dont have an account? </p> */}
      Dont have an account? <Link to="/signup" id='linkbox'>Sign Up</Link>
    </div>
  </div>
    
  );
};

export default Login