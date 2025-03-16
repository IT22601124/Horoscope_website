import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react"; // Icon library

const ContactUs = () => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-cover bg-center bg-opacity-30"
      style={{ backgroundImage: "url('/images/img7.png')" }} // Update with your image path
    >
      {/* Contact Info Section */}
      <div className="bg-[#F7E0A3] p-8 rounded-2xl shadow-2xl w-full md:w-1/2 max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#121212] mb-8">Contact Us</h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">Email</p>
              <p className="text-[#222] font-bold text-xl">dinethaastrological@gmail.com</p>
            </div>
            <Mail className="text-[#0056b3] w-10 h-10" />
          </div>

          {/* Contact */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">Contact</p>
              <p className="text-[#222] font-bold text-xl">077-2279389</p>
            </div>
            <Phone className="text-[#0088cc] w-10 h-10" />
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">WhatsApp</p>
              <p className="text-[#222] font-bold text-xl">077-2279389</p>
            </div>
            <MessageCircle className="text-[#25D366] w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#F7E0A3] p-8 rounded-2xl shadow-2xl w-full md:w-1/2 max-w-md mt-8 md:mt-0 md:ml-8">
        <h2 className="text-4xl font-bold text-center text-[#121212] mb-8">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-[#333] font-semibold text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-[#F3D480] border-none focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-[#F3D480] border-none focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold text-lg mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 rounded-lg bg-[#F3D480] border-none focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0056b3] text-white font-bold py-3 rounded-lg hover:bg-[#004080] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
