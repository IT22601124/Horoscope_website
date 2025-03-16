import React from 'react'
import AppointmentBooking from './appointment'
import '../css/home.css'
import j1 from '../assets/j1.png'
import j2 from '../assets/j3.png'

function Home() {
  return (
    <div className='container'>
      <img src={j1} alt='doctor' className='img1' width={250} height={150} />
      <img src={j2} alt='doctor' className='img2' width={200} height={60} />
      {/* <AppointmentBooking /> */}
    </div>
  )
}

export default Home
