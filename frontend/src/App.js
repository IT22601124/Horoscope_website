import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
import Contact from './screens/contact';
import Font, { Text } from 'react-font';
import './App.css';
import './css/vertical-nav.css';
import AppointmentBooking from './screens/appointment';
import AstrologyForm from './app/Booking/page';
import Blog from './app/Blogs/page';
import ContactUs from './app/ContactUs/page';
import Footer from './components/Footer/page'; // Import the footer component

function App() {
  const [time, setTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="app">
        <nav className="horizontal-nav">
          <ul className="nav-menu">
            <li>
              <Link to="/"><Text family='Garamond'>Home</Text></Link>
            </li>
            <li>
              <Link to="/book"><Text family='Garamond'>Booking</Text></Link>
            </li>
            <li>
              <Link to="/blog"><Text family='Garamond'>Blog</Text></Link>
            </li>
            <li>
              <Link to="/contact"><Text family='Garamond'>Contact</Text></Link>
            </li>
            <li>
              <Link to="/about"><Text family='Garamond'>About</Text></Link>
            </li>
          </ul>
          <div className='clock'>
            <h2>{time.toLocaleTimeString()}</h2>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/book" element={<AstrologyForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer /> {/* Add the footer here */}
      </div>
    </Router>
  );
}

export default App;
