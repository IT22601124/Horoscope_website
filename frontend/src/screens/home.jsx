"use client"

import { useState, useEffect } from "react"
import { Bell, Calendar, Clock, Settings } from "lucide-react"
import { Link } from "react-router-dom" //

export default function Home() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url('/images/gold.png')`, // Background image path
        backgroundSize: 'cover', // Ensure the image covers the entire page
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      
      {/* Blur overlay for the entire page */}
      <div className="absolute inset-0 backdrop-blur-md bg-30"></div> {/* Added blur overlay */}

      {/* Hero Section */}
      <section className="w-2/3 min-h-[66vh] rounded-3xl overflow-hidden flex flex-col md:flex-row mx-auto shadow-lg mb-8 bg-white bg-opacity-90 relative z-10"> {/* Reduced margin-bottom */}
        {/* Left side - Image with overlay text */}
        <div className="relative w-1/2 h-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h2 className="text-3xl font-bold">Discover Your Future</h2>
            <p className="text-lg">Professional Astrology Readings</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-48"> {/* Added mt-48 to move the image down */}
            <img
              src="/images/123.png" // Ensure this path is correct
              alt="Astrology chart"
              className="w-90 h-100 object-contain" // Use object-contain to fit the image
            />
          </div>
        </div>

        {/* Right side - Welcome text */}
        <div className="w-1/2 bg-indigo-950 text-white p-12 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-4">සියලුම ජෝතීශ්‍ය කටයුතු විශ්මිත පලාපල....</h2>
          <br />
          <p className="mb-6 text-sm">
             ෝතීශ්‍ය විද්‍යාශූරී - දිල්රුක්ශි ලියනග
          </p>
          <br />
          
          <a
             href="/book"
             className="block w-full py-3 px-6  text-white text-center rounded-lg transition-colors"
          >
            <button className="bg-[#FFD700] hover:bg-amber-600 text-amber-900 font-bold py-3 px-8 rounded-full transition duration-300">
              Book an Appointment
            </button>
          </a>
        
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="w-2/3 min-h-[50vh] bg-indigo-950 rounded-3xl p-8 shadow-lg mt-8 mx-auto relative z-10"> {/* Reduced margin-top */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#FFD700] text-center w-full">
            Notice Board
          </h2>
          <Bell className="w-6 h-6 text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow h-48 flex flex-col justify-between">
            <div className="flex items-center mb-4 text-blue-600">
              <Calendar className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Important Announcement</h3>
            </div>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>2023-10-01</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow h-48 flex flex-col justify-between">
            <div className="flex items-center mb-4 text-purple-600">
              <Calendar className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Upcoming Event</h3>
            </div>
            <p className="text-gray-700">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>2023-10-05</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow h-48 flex flex-col justify-between">
            <div className="flex items-center mb-4 text-orange-600">
              <Settings className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Maintenance Schedule</h3>
            </div>
            <p className="text-gray-700">
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>2023-10-10</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
