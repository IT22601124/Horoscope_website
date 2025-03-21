import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNotice = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Notice added for ${selectedCategory.name}: ${e.target.title.value} on ${e.target.date.value}`);
    setSelectedCategory(null); // Reset form after submission
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
      </div>
    </div>
  );
};

export default AddNotice;