import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto flex items-center gap-20"> {/* Increased gap */}
        {/* Logo Section (1/3 width) */}
        <div className="w-1/3 flex justify-center items-center">
          <img
            src="/images/logoo.png" // Replace with your logo path
            alt="Dinetha Astrological Logo"
            className="h-50 w-90" // Increased logo height
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
            Have questions? We’d love to hear from you! Reach out to us at <a href="mailto:dinethaastrological@gmail.com" className="text-amber-600 hover:text-amber-800">dinethaastrological@gmail.com</a> or follow us on our social media channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;