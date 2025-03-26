import React, { useRef } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const ContactUs = () => {
  const form = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Debug: Check if form.current is valid
    if (!form.current) {
      console.error("Form ref is not attached.");
      return;
    }

    // Send the email using EmailJS
    emailjs
      .sendForm(
        "service_xb6scxy", // Replace with your EmailJS service ID
        "template_v7t1e1y", // Replace with your EmailJS template ID
        form.current, // Reference to the form
        "PACI560wvpCY7r6Zc" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!"); // Notify the user

          // Debug: Check if form.current exists before resetting
          if (form.current) {
            form.current.reset(); // Reset the form
            console.log("Form has been reset.");
          } else {
            console.error("Form ref is not available for reset.");
          }
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again."); // Notify the user
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-cover bg-center bg-opacity-30">
      {/* Contact Info Section */}
      <div className="bg-[#F7E0A3] p-8 rounded-2xl shadow-2xl w-full md:w-1/2 max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#121212] mb-8">Contact Us</h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">Email</p>
              <p className="text-[#222] font-bold text-1xl">dinethaastrological@gmail.com</p>
            </div>
            <Mail className="text-[#0056b3] w-8 h-8" />
          </div>

          {/* Contact */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">Contact</p>
              <p className="text-[#222] font-bold text-1xl">077-2279389</p>
            </div>
            <Phone className="text-[#0088cc] w-8 h-8" />
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">WhatsApp</p>
              <p className="text-[#222] font-bold text-1xl">077-2279389</p>
            </div>
            <MessageCircle className="text-[#25D366] w-8 h-8" />
          </div>

          {/* Address */}
          <div className="flex items-center justify-between p-4 bg-[#F3D480] rounded-xl hover:bg-[#E5C97A] transition-colors duration-300">
            <div>
              <p className="text-[#333] font-semibold text-lg">Address</p>
              <p className="text-[#222] font-bold text-1xl">
                Dinetha Astrological Institute
                <br />
                12/53, Town Council Road, Elpitiya
              </p>
            </div>
            <MapPin className="text-[#FF0000] w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#F7E0A3] p-8 rounded-2xl shadow-2xl w-full md:w-1/2 max-w-md mt-8 md:mt-0 md:ml-8">
        <h2 className="text-4xl font-bold text-center text-[#121212] mb-8">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-[#333] font-semibold text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add name attribute for EmailJS
              className="w-full p-3 rounded-lg bg-[#F3D480] border-none focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute for EmailJS
              className="w-full p-3 rounded-lg bg-[#F3D480] border-none focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold text-lg mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Add name attribute for EmailJS
              className="w-full p-3 rounded-lg bg-[#F3D480] border-none focus:ring-2 focus:ring-[#0056b3]"
              placeholder="Your Message"
              rows="4"
              required
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