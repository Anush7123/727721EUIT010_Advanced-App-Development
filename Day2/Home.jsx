
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  return (
    <div className='home'>
      <header>
        <h1>Boathouse Booking</h1>
        <nav>
           <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><a>Locations</a></li>
            <li><a>Contact</a></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
          </ul> 
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to Boathouse Booking</h2>
          <p>Book your perfect boathouse getaway now!</p><br></br>
          <a className="btn-primary">Book Now</a>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Beautiful Boathouses</h3>
            <p>Explore our collection of stunning boathouses located in picturesque settings.</p>
          </div>
          <div className="feature">
            <h3>Easy Booking</h3>
            <p>Our user-friendly platform makes it simple to find and book your ideal boathouse.</p>
          </div>
          <div className="feature">
            <h3>Customer Reviews</h3>
            <p>Read reviews from satisfied customers who have enjoyed their boathouse stays.</p>
          </div>
        </section>
      </main>
    <div className='foot'>
      <footer>
        <p>&copy; 2024 Boathouse Booking. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
};

