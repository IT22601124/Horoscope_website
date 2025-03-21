import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AstrologyForm from '../Booking/page'; // Correct import path

const Rebooking = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const navigateToAdmin = () => {
    navigate('/Admin'); // Navigate back to the Admin Panel
  };

  return (
    <div>
      {/* Back Button */}
      <div className="flex justify-start p-4">
        <button
          onClick={navigateToAdmin}
          className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 text-sm"
        >
          Back to Admin Panel
        </button>
      </div>

      {/* Render the AstrologyForm component */}
      <AstrologyForm />
    </div>
  );
};

export default Rebooking;