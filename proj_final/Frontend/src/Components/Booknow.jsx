import  { useState } from 'react';
import './Booknow.css';
// import NavbarU from './NavbarU';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  
  const [eventtype, setEventtype] = useState("");
    const [description, setDescription] = useState("");
    const [eventpackage, setEpackage] = useState("");
    const [participantcount, setCount] = useState("");
    const [charge, setCharge] = useState("");

    const handleEventtype = (event) => {
      setEventtype(event.target.value);
  }

  const handleDescription = (event) => {
      setDescription(event.target.value);
  }

  const handlePackage = (event) => {
      setEpackage(event.target.value);
  }

  const handleCount = (event) => {
      setCount(event.target.value);
  }
  const handleCharge = (event) => {
      setCharge(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for empty values and alert if any are found
    if (!eventtype || !description || !eventpackage || !participantcount || !charge) {
      alert("Please complete all required fields to proceed.");
      return; // Stop execution of the function here
    }
  
    const token = localStorage.getItem('token'); // Assuming token is required for authorization
    
    try {
      const response = await axios.post(
        "http://localhost:8080/addevent/newevent",
        { eventtype, description, eventpackage, participantcount, charge },
        { headers: { Authorization: `Bearer ${token}` } }

      );
      
      // Alert for successful submission
      alert("Event added successfully!");
  
      // Reset form fields after successful submission
      setEventtype("");
      setDescription("");
      setEpackage("");
      setCount("");
      setCharge("");
      
      // Optionally, navigate to another route or perform further actions
      // navigate("/Userlogin"); // Uncomment and modify as needed
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Adding event failed", error);
      
      // Alert for failure to submit
      alert("Failed to add event. Please try again.");
    }
  };
  

  return (
    <div className='AdminAddevent'>
        {/* <NavbarU/> */}
        <div className="AdminAddeventform-container">
            <form id="bookingForm" className='Bookevent' onSubmit={handleSubmit}>  
            <input type="text" value={eventtype} onChange={handleEventtype} placeholder="Email" />
                <input type="text" value={description} onChange={handleDescription} placeholder="No.Of.Days" />
                <input type="text" value={eventpackage} onChange={handlePackage} placeholder="No.Of.Persons" />
                <input type="text" value={participantcount} onChange={handleCount} placeholder="Boat type" />
                <input type="text" value={charge} onChange={handleCharge} placeholder="Ph.No" />
                <button type="submit" className='Bookeventbutton'>Book Boat</button>
            </form>
        </div>
        <div className='AdminAddevent-Image-container'>
            <img src='https://source.unsplash.com/1600x900/?waterfront' alt='' className='AdminAddevent-Image'/>
        </div>
    </div>
  );
};

export default FormComponent;