import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
// import {FaUser, FaLock} from "react-icons/fa";
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateSignUp = () => {
    // Basic validation - you should implement proper registration logic
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
      alert('Registration successful!'); // Replace with your actual registration logic
    }
  };

  return (
    <div id='signup-main'>
<div className="scontainer">
      <s-form>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* <FaUser className='icon1'/> */}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <FaLock className='icon1'/> */}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {/* <FaLock className='icon1'/> */}
        
        

        <s-button type="button" onClick={validateSignUp}>
          Sign Up
        </s-button>
      </s-form>
  
      <p id="error-message">{errorMessage}</p>
       {/* <p>Already have an account? </p>  */}
       Already have an account? <Link to="/login" id='linkbox'>Log In</Link>
    </div>
    </div>
    
  );
};

export default SignUp