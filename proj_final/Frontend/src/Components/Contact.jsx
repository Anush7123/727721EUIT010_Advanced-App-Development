import { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file for contact styles
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for home styles

const ContactPage = () => {
  const initialReviews = [
    "Absolutely mesmerizing! The boathouse offered breathtaking views of the waterfront.",
    "It's a true paradise for nature lovers. Can't wait to come back and experience the serenity again.",
    "Our stay at the boathouse was nothing short of magical.",
    
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
            <li><Link to='/locations'>Gallery</Link></li>
            <li><Link to='/home1'>Home</Link></li>
            {/* <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li> */}
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
