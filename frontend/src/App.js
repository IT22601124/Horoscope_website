import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/home";
import About from "./app/AboutUS/page";
import Contact from "./screens/contact";
import Font, { Text } from "react-font";
import "./App.css";
import "./css/vertical-nav.css";
import AppointmentBooking from "./screens/appointment";
import BookingPage from "./app/Booking/page";
import Blog from "./app/Blogs/page";
import ContactUs from "./app/ContactUs/page";
import Footer from "./components/Footer/page";
import Category from "./app/Category/page";
import AstrologyForm from "./app/Booking/page";
import BookNowPage from "./app/Category/page";
import Admin from "./app/Admin/page";
import Rebooking from "./app/ReBooking/page";
import AddNotice from "./app/AddNotice/page";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const [time, setTime] = useState(new Date());

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
          <div className="nav-logo">
            <Link to="/">
              <img
                src="/images/logoo.png"
                alt="Dinetha Astrology Logo"
                className="logo-image"
              />
            </Link>
          </div>

          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link"><Text family="Garamond">Home</Text></Link>
            </li>
            <li>
              <Link to="/book" className="nav-link"><Text family="Garamond">Booking</Text></Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link"><Text family="Garamond">Blog</Text></Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link"><Text family="Garamond">Contact</Text></Link>
            </li>
            <li>
              <Link to="/about" className="nav-link"><Text family="Garamond">About</Text></Link>
            </li>
          </ul>

          <div className="clock">
            <h2>{time.toLocaleTimeString()}</h2>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/book" element={<Category />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/booking" element={<AstrologyForm />} />
            <Route path="/booknowpage" element={<BookNowPage />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/ReBooking" element={<Rebooking />} />
            <Route path="/AddNotice" element={<AddNotice />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
