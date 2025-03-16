import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentBooking from './appointment';
import '../css/home.css';
import j1 from '../assets/j1.png';
import j2 from '../assets/j3.png';

function Home() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      {/* Left Side */}
      <div className='left-content'>
        <img src={j1} alt='doctor' className='img1' width={250} height={150} />
        <img src={j2} alt='doctor' className='img2' width={200} height={60} />
        {/* <AppointmentBooking /> */}
      </div>

      {/* Right Side (Calendar & Clock) */}
      <div className='right-content'>
        
        <div className='calendar'>
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}

export default Home;
