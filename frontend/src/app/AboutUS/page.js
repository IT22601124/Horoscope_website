import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const [showLoginModal, setShowLoginModal] = useState(false); // State to toggle login modal
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setShowLoginModal(false); // Close the modal
    navigate('/Admin'); // Navigate to the Admin page
  };

  return (
    <div className="bg-white p-8">
      {/* Admin Button (Top-Right Corner) */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setShowLoginModal(true)} // Open the login modal
          className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 text-sm"
        >
          Admin
        </button>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <LoginPage onSuccess={handleLoginSuccess} onClose={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex items-center gap-20">
        {/* Logo Section (1/3 width) */}
        <div className="w-1/3 flex justify-center items-center">
          <img
            src="/images/logoo.png"
            alt="Dinetha Astrological Logo"
            className="h-50 w-90"
          />
        </div>

        {/* About Us Content Section (2/3 width) */}
        <div className="w-2/3">
          <div className="relative mb-10">
            <div className="bg-gradient-to-r from-amber-100 to-amber-300 rounded-full py-6 text-center shadow-md">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
                About Us
              </h2>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Dinetha Astrological Institute – your trusted platform for astrological insights and guidance. Our mission is to provide accurate and personalized astrological solutions to help you navigate life's challenges and opportunities.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are a team of passionate astrologers dedicated to helping individuals understand their cosmic influences. With years of experience and a focus on accuracy and empathy, we strive to provide meaningful guidance to our clients.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Trusted by thousands of clients worldwide</li>
            <li>Accurate and personalized astrological readings</li>
            <li>Dedicated customer support</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions? We’d love to hear from you! Reach out to us at{' '}
            <a
              href="mailto:dinethaastrological@gmail.com"
              className="text-amber-600 hover:text-amber-800"
            >
              dinethaastrological@gmail.com
            </a>{' '}
            or follow us on our social media channels.
          </p>
        </div>
      </div>
    </div>
  );
};

const LoginPage = ({ onSuccess, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        
        onSuccess(); // Call the success callback
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.error);
        alert(`Login failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutUs;