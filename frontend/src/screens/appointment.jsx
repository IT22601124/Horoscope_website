import React from "react";
import "../css/AppointmentBooking.css";

const AppointmentBooking = () => {
  return (
    <div className="container">
      <div className="booking-box">
        <h2 className="title">ඔබගේ වේලාව වෙන්කරන්න!</h2>
        <form className="form">
          <input type="text" placeholder="නම" className="input" />
          <input type="email" placeholder="ඊමේල්" className="input" />
          <input type="tel" placeholder="දුරකථන අංකය" className="input" />
          <input type="date" className="input" />
          <button type="submit" className="button">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
