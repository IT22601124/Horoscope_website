import React, { useState, useEffect } from 'react';
import '../css/home.css';
import logo from '../assets/logo.png'; // Adjust the path as needed
import j2 from '../assets/j3.png';

function Home() {
  const [time, setTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Notice Component
  const Notice = () => {
    const notices = [
      {
        id: 1,
        title: 'Important Announcement',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2023-10-01',
      },
      {
        id: 2,
        title: 'Upcoming Event',
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        date: '2023-10-05',
      },
      {
        id: 3,
        title: 'Maintenance Schedule',
        content: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
        date: '2023-10-10',
      },
    ];

    return (
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-blue-600">{notice.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{notice.content}</p>
            <p className="text-xs text-gray-400 mt-2">{notice.date}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center'>
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: "url('/images/bg3.png')" }}
      ></div>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto flex flex-col gap-8 p-8'>
        {/* Images at the top */}
        <div className="rounded-lg border-2 border-white overflow-hidden"> {/* Added rounded corners and white border */}
          <img
            src="/images/logoo.png" // Replace with your logo path
            alt="Dinetha Astrological Logo"
            className="h-28 w-70 object-cover" // Ensure the image fits well
          />
        </div>

        {/* Flex container for the remaining content */}
        <div className='flex flex-col lg:flex-row gap-48'>
          {/* Left Side (Framed Image) */}
          <div className="flex justify-center items-center lg:justify-start lg:items-start">
            <div className="w-[500px] h-[400px] border-8 border-[#03033B] shadow-2xl rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/images/123.png" alt="Framed" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side (Notice Board) */}
          <div className='flex-1 p-6 rounded-lg shadow-lg' style={{ backgroundColor: '#03033B', maxWidth: '500px' }}>
            <h2 className="text-3xl font-bold text-white mb-5">Notice Board</h2>
            <Notice />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;