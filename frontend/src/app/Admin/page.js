import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]); // State to store fetched details
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [selectedDetail, setSelectedDetail] = useState(null); // State to store the selected row's details

  const navigateToRebooking = () => {
    navigate('/Rebooking');
  };

  const navigateToAddNotice = () => {
    navigate('/AddNotice'); // Navigate to the AddNotice page
  };

  // Fetch details from the backend
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/get-users'); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch details');
        }
        const result = await response.json();
        setDetails(result.map((item) => ({ ...item, status: item.status || 'pending' }))); // Ensure status is initialized
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  // Handle status change
  const handleStatusChange = async (id, index) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/update-user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'accepted' }),
      });

      console.log('Response status:', response.status);
      console.log('Response body:', await response.text());

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      // Update the local state after successful API call
      const updatedDetails = [...details];
      updatedDetails[index].status = 'accepted';
      setDetails(updatedDetails);
    } catch (err) {
      console.error('Error updating status:', err.message);
      alert(`Failed to update status: ${err.message}`);
    }
  };

  // Handle row click to display details in a modal
  const handleRowClick = (detail) => {
    setSelectedDetail(detail); // Set the selected row's details
  };

  // Close the modal
  const closeModal = () => {
    setSelectedDetail(null); // Clear the selected detail
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-md">
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
        </div>

        {/* Display Details from Backend */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Birthday</th>
                    <th className="py-2 px-4 border-b">Birth Time</th>
                    <th className="py-2 px-4 border-b">Birth Place</th>
                    <th className="py-2 px-4 border-b">Phone Number</th>
                    <th className="py-2 px-4 border-b">Address</th>
                    <th className="py-2 px-4 border-b">Country</th>
                    <th className="py-2 px-4 border-b">Booking Date</th>
                    <th className="py-2 px-4 border-b">Booking Time</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Created At</th>
                    <th className="py-2 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleRowClick(detail)} // Handle row click
                    >
                      <td className="py-2 px-4 border-b">{detail.name}</td>
                      <td className="py-2 px-4 border-b">{detail.birthday}</td>
                      <td className="py-2 px-4 border-b">{detail.birthTime}</td>
                      <td className="py-2 px-4 border-b">{detail.birthPlace}</td>
                      <td className="py-2 px-4 border-b">{detail.phoneNumber}</td>
                      <td className="py-2 px-4 border-b">{detail.address}</td>
                      <td className="py-2 px-4 border-b">{detail.country}</td>
                      <td className="py-2 px-4 border-b">
                        {new Date(detail.bookingDate).toISOString().split('T')[0]}
                      </td>
                      <td className="py-2 px-4 border-b">{detail.bookingTime}</td>
                      <td className="py-2 px-4 border-b">{detail.nameCat}</td>
                      <td className="py-2 px-4 border-b">
                        {new Date(detail.createdAt).toLocaleString()}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click event
                            handleStatusChange(detail.id, index);
                          }}
                          className={`px-4 py-2 rounded ${
                            detail.status === 'pending'
                              ? 'bg-yellow-500 text-white'
                              : 'bg-green-500 text-white'
                          }`}
                          disabled={detail.status === 'accepted'}
                        >
                          {detail.status === 'pending' ? 'Pending' : 'Accepted'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal Window */}
      {selectedDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Detail Information</h2>
            <p><strong>Name:</strong> {selectedDetail.name}</p>
            <p><strong>Birthday:</strong> {selectedDetail.birthday}</p>
            <p><strong>Birth Time:</strong> {selectedDetail.birthTime}</p>
            <p><strong>Birth Place:</strong> {selectedDetail.birthPlace}</p>
            <p><strong>Phone Number:</strong> {selectedDetail.phoneNumber}</p>
            <p><strong>Email :</strong> {selectedDetail.email}</p>
            <p><strong>Address:</strong> {selectedDetail.address}</p>
            <p><strong>Country:</strong> {selectedDetail.country}</p>
            <p><strong>Booking Date:</strong> {selectedDetail.bookingDate}</p>
            <p><strong>Booking Time:</strong> {selectedDetail.bookingTime}</p>
            <p><strong>Category:</strong> {selectedDetail.nameCat}</p>
            <p><strong>Description:</strong> {selectedDetail.description}</p>
            <p><strong>Created At:</strong> {new Date(selectedDetail.createdAt).toLocaleString()}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;