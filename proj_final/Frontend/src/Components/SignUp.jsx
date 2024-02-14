import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {FaUser, FaLock} from "react-icons/fa";
const SignUp = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();
  // const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  
    // mobileNumber: '',
    // gender: '',
    // dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful:', formData);
        navigate('/Login')
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  // const validateSignUp = () => {
  //   // Basic validation - you should implement proper registration logic
  //   if (password !== confirmPassword) {
  //     setErrorMessage('Passwords do not match');
  //   } else {
  //     setErrorMessage('');
  //     alert('Registration successful!'); // Replace with your actual registration logic
  //   }
  // };

  return (
    <div id='signup-main'>
<div className="scontainer">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="name" id='llabelform'>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* <FaUser className='icon1'/> */}

        <label htmlFor="email" id='llabelform'>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" id='llabelform'>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <FaLock className='icon1'/> */}

        {/* <FaLock className='icon1'/> */}
        
        

        <button type="submit">
          Register
        </button>
      </form>
  
      {/* <p id="error-message">{errorMessage}</p> */}
       {/* <p>Already have an account? </p>  */}
       Already have an account? <Link to="/login" id='linkbox'>Log In</Link>
    </div>
    </div>
    
  );
};

export default SignUp