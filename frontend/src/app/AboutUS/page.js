import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to [Your Website Name] – your go-to platform for [briefly describe what your website offers, e.g., financial tracking, tech solutions, educational content]. Our mission is to [state your goal, e.g., simplify financial management, enhance digital experiences, provide top-notch solutions].
        </p>
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a team of passionate [mention expertise, e.g., developers, financial experts, designers] dedicated to providing innovative and user-friendly solutions. With a focus on [mention core values, e.g., accuracy, security, user experience], we strive to create a seamless experience for our users.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Trusted by [mention customers, users, or clients if applicable]</li>
          <li>[Highlight a unique feature, e.g., secure, real-time updates, easy integration]</li>
          <li>Dedicated customer support</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions? We’d love to hear from you! Reach out to us at [email/contact link] or follow us on [social media links].
        </p>
        <div className="flex justify-center mt-8">
          <img src="path-to-your-logo.png" alt="Directh Logo" className="h-16" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;