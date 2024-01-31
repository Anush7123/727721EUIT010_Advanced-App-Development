// import { useState,useEffect } from 'react';
// import './Contact.css'; // Import the CSS file
// import { Link } from 'react-router-dom';



// import "./Home.css";

// const ContactPage = () => {
//   const initialReviews = [
//     "I recently Borcelle hired Party Management for my daughter's sweet sixteen, and I couldn't be happier with the experience.",
//     "We used Borcelle Events for our company's annual holiday party.",
//     "I can't express how impressed I am with Borcelle Events.",
//     "Dialam Celebrations made my milestone birthday truly unforgettable! ",
//     "LMN Party Planners turned our dream wedding into a reality! Their expertise and dedication were evident from day one.",
//   ];

//   const [reviews, setReviews] = useState(initialReviews);
//   const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
//   const [userReview, setUserReview] = useState("");

//   const handleUserReview = () => {
//     if (userReview.trim() !== "") {
//       // Add the new review to the existing reviews
//       const updatedReviews = [...reviews, userReview];
//       setReviews(updatedReviews);
//       // Set the currentReviewIndex to the newly added review
//       setCurrentReviewIndex(updatedReviews.length - 1);
//       // Clear the user review input
//       setUserReview("");
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentReviewIndex((prevIndex) =>
//         prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentReviewIndex, reviews.length]);

//   return (
//     <div className="home">
      
      
//       <header>
//         <h1>Contacts & review</h1>
//         <nav>
//            <ul>
//             {/* <li><Link to="/">Home</Link></li> */}
//             <li><a>Locations</a></li>
//             <li><Link to='/home'>Home</Link
//             ></li>
//             <li><Link to='/login'>Login</Link></li>
//             <li><Link to='/signup'>SignUp</Link></li>
//           </ul> 
//         </nav>
//       </header>

      

//       {/* Client Review Section */}
//       <div className="client-reviews">
        
//         <div className="review-container">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className={`review glassmorphism ${
//                 index === currentReviewIndex ? "active" : ""
//               }`}
//             >
//               <p>{review}</p>
//             </div>
//           ))}
//         </div>
//       </div>
      

      
//     </div>
    
//   );
// };

// export default ContactPage;

// Contact.css
/* Add your styles for the contact form container */

// Home.css
/* Add your styles for the home page container */

// ContactPage.js
import { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file for contact styles
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for home styles

const ContactPage = () => {
  const initialReviews = [
    "I recently Borcelle hired Party Management for my daughter's sweet sixteen, and I couldn't be happier with the experience.",
    "We used Borcelle Events for our company's annual holiday party.",
    "I can't express how impressed I am with Borcelle Events.",
    
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [userReview, setUserReview] = useState("");

  const handleUserReview = () => {
    if (userReview.trim() !== "") {
      // Add the new review to the existing reviews
      const updatedReviews = [...reviews, userReview];
      setReviews(updatedReviews);
      // Set the currentReviewIndex to the newly added review
      setCurrentReviewIndex(updatedReviews.length - 1);
      // Clear the user review input
      setUserReview("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentReviewIndex, reviews.length]);

  return (
    <div className="home">
      <header>
        <h1>Contacts & review</h1>
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><a>Locations</a></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
          </ul>
        </nav>
      </header>

      {/* Client Review Section */}
      

      {/* Contact Form */}
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* User Review Input */}
        <div className="user-review-input">
          <h2>Write a Review</h2>
          <textarea
            placeholder="Write your review here..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
          />
          <button className="b" onClick={handleUserReview}>
            Submit Review
          </button>
        </div>
      </div>
      <div className="client-reviews">
        <div className="review-container">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review glassmorphism ${
                index === currentReviewIndex ? "active" : ""
              }`}
            >
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
