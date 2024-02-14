// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Bookpage.css';
import {Link } from "react-router-dom";
export default function Courses() {
  const [selectedLocation, setSelectedLocation] = useState('');
  

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  

  return (
    <div className='course-page'>
      <div>
        <div className="ev">
          <h2>BOOTHOUSE AVAILABLE </h2>
        </div>
        <div className="top-right-dropdowns">
          {/* First drop-down for location */}
          <label htmlFor="location">Select Location:</label>
          <select
            id="location"
            name="location"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Select Location</option>
            <option value="kerala">Kerala</option>
            <option value="goa">Goa</option>
            <option value="kashmir">kashmir</option>
            <option value="andhaman">andhaman</option>
            {/* <option value="Cruize">Cruize</option>
            <option value="Yatch">Yatch</option> */}
          </select>

          {/* Second drop-down for another selection */}
          
        </div>
        <div className="event__section">
        <div className="event__card">
            <p>Shed</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>Often located on land, this type of boathouse is usually large enough to accommodate a boat and its equipment</p>
            
            <p>₹899 per person</p>
            <Link to='/booknow'><button> Book boat</button></Link>
          </div>
          <div className="event__card">
            <p>Canopy</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>These boat shelters are a simple choice.</p>
            
            <p>₹688 per person</p>
            <Link to='/booknow'><button> Book boat</button></Link>
          </div>
          <div className="event__card">
            <p>Commercial</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p> Commercial boathouses may have attractions, restaurants or living quarters.</p>
            
            <p>₹1100 per person</p>
            <Link to='/booknow'><button> Book boat</button></Link>
          </div>

          <div className="event__card">
            <p>Residential</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>These boathouses are typically attached to a home or cottage and are used for storing boats and equipment.</p>
            
            <p>₹1700 per person</p>
            <Link to='/booknow'><button> Book boat</button></Link>
          </div>
          <div className="event__card">
            <p>Cruize</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>Cruise ships are large passenger ships used mainly for vacationing</p>
            
            <p>₹4400 per person</p>
            <Link to='/booknow'><button> Book boat</button></Link>
          </div>

          <div className="event__card">
            <p>Yatch</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>A yacht is a sailing or power vessel used for pleasure, cruising, or racing.</p>
            
            <p>₹55000 per person</p>
            <Link to='/booknow'><button> Book boat</button></Link>
          </div>

          
        </div>
      </div>
    </div>
  );
}
