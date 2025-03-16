import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
import Contact from './screens/contact';
import './App.css';
import './css/vertical-nav.css';
import AppointmentBooking from './screens/appointment';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="horizontal-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appoitment" element={<AppointmentBooking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;