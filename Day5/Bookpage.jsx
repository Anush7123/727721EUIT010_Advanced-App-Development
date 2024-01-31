// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Bookpage.css';

export default function Courses() {
  return (
    <div className='course-page'>
        <div>
        <div className="ev">
          <h2>BOOTHOUSE AVAILABLE </h2>
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
            <button> Book boat</button>
          </div>
          <div className="event__card">
            <p>Canopy</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>These boat shelters are a simple choice.</p>
            
            <p>₹688</p>
            <button> Book boat</button>
          </div>
          <div className="event__card">
            <p>Professional Business English Communication</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>January 1 | 10PM - January 29 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button> Book boat</button>
          </div>

          <div className="event__card">
            <p>Certificate in Academic Writing and Research Skills</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>January 1 | 12PM - January 29 | 1PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button> Book boat</button>
          </div>
          <div className="event__card">
            <p>Introduction to British Political Systems</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>March 1 | 10PM - March 29 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button> Book boat</button>
          </div>

          <div className="event__card">
            <p>British English Pronunciation Mastery</p>
            <label htmlFor="eventDate">Date:</label>
            <input type="text" id="eventDate" name="eventDate" placeholder="Select Date" />
            
            <label htmlFor="eventCount">Count:</label>
            <input type="number" id="eventCount" name="eventCount" placeholder="Enter Count" />
            <p>March 1 | 10PM - March 23 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button>Book boat</button>
          </div>

         

         </div>
          
        
</div>

    </div>
  )
}