import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const navigateToRebooking = () => {
    navigate('/Rebooking');
  };

  const navigateToAddNotice = () => {
    navigate('/AddNotice'); // Navigate to the AddNotice page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Add Booking Button */}
          <div
            className="bg-amber-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={navigateToRebooking}
          >
            <h2 className="text-2xl font-semibold mb-4">Add Booking</h2>
            <p className="text-gray-700">Manage and add new bookings here.</p>
          </div>

          {/* Add Notice Button */}
          <div
            className="bg-amber-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={navigateToAddNotice}
          >
            <h2 className="text-2xl font-semibold mb-4">Add Notice</h2>
            <p className="text-gray-700">Post important notices and updates.</p>
          </div>

          {/* Other Admin Options */}
          
        </div>
      </div>
    </div>
  );
};

export default Admin;