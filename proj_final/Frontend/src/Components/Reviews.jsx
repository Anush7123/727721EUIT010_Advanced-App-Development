import { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file for contact styles
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for home styles

const ReviewPage = () => {
  const initialReviews = [
    "Absolutely mesmerizing! The boathouse offered breathtaking views of the waterfront.",
    "It's a true paradise for nature lovers. Can't wait to come back and experience the serenity again.",
    "Our stay at the boathouse was nothing short of magical.",
    "Waking up to the sound of gentle waves was pure bliss.",
    "The staff went above and beyond to make our stay memorable.",
    "Thank you for making our vacation unforgettable!",
    "A perfect blend of adventure and relaxation.",
    "An ideal escape from the hustle and bustle.",
    " The calm atmosphere allowed us to unwind and recharge. A hidden gem!",
    "The boathouse offered excellent value for money.",
    
    
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
            <li><Link to='/adminhome'>Home</Link></li>
            {/* <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li> */}
          </ul>
        </nav>
      </header>

      {/* Client Review Section */}
      

      {/* Contact Form */}
      
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

export default ReviewPage;
