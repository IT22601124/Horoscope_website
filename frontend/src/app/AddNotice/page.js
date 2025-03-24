import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNotice = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [notices, setNotices] = useState([]); // State to store fetched notices
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  // Categories
  const categories = [
    { id: 1, name: 'Important Announcement' },
    { id: 2, name: 'Upcoming Event' },
    { id: 3, name: 'Maintenance Schedule' },
  ];

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Fetch notices from the backend
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/notices'); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch notices');
        }
        const result = await response.json();
        setNotices(result); // Set the fetched notices
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const noticeData = {
      title: e.target.title.value,
      date: e.target.date.value,
      description: e.target.description.value,
      category: selectedCategory.name,
    };

    try {
      const response = await fetch('http://localhost:5001/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticeData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Notice added successfully: ${result.message}`);
        setSelectedCategory(null); // Reset form after submission

        // Refresh the notices list
        setNotices((prevNotices) => [...prevNotices, noticeData]);
      } else {
        const errorData = await response.json();
        alert(`Failed to add notice: ${errorData.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  // Handle delete action
  const handleDelete = async (id, index) => {
    try {
      const response = await fetch(`http://localhost:5001/api/notices/delete-notice/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete notice');
      }

      // Remove the deleted notice from the local state
      const updatedNotices = [...notices];
      updatedNotices.splice(index, 1);
      setNotices(updatedNotices);

      alert('Notice deleted successfully!');
    } catch (err) {
      console.error('Error deleting notice:', err.message);
      alert(`Failed to delete notice: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/Admin')}
          className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 text-sm mb-6"
        >
          Back to Admin Panel
        </button>

        <h1 className="text-3xl font-bold text-center mb-8">Add Notice</h1>

        {/* Category Selection */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-amber-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">{category.name}</h2>
              </div>
            ))}
          </div>
        )}

        {/* Form for Selected Category */}
        {selectedCategory && (
          <div className="mt-8">
            {/* Back to Categories Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 mb-6"
            >
              Back to Categories
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">{selectedCategory.name}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full bg-white border border-gray-300 rounded-lg p-2"
                  placeholder="Enter title"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-white border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  className="w-full bg-white border border-gray-300 rounded-lg p-2"
                  placeholder="Enter description"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Notices Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Notice Details</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Description</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{notice.title}</td>
                      <td className="py-2 px-4 border-b">
                        {new Date(notice.date).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b">{notice.category}</td>
                      <td className="py-2 px-4 border-b">{notice.description}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => handleDelete(notice.id, index)}
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
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
    </div>
  );
};

export default AddNotice;