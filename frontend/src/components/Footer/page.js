import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function AdvisorsFooter() {
  return (
    <footer className="bg-white py-5 px-4 md:px-8 lg:px-16">
      {/* Divider */}
      <div className="border-t-2 border-[#000033] my-6"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="/images/logoo.png"
                alt="Dinetha Astrology Logo"
                className="w-62 h-32"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/14MzYpduyU/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0c0c0c] text-white p-3 rounded-full hover:bg-[#008080] transition-colors"
              >
                <Facebook size={12} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@DhanushkaVithanageOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0c0c0c] text-white p-3 rounded-full hover:bg-[#008080] transition-colors"
              >
                <Youtube size={12} />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://wa.me/94772279389" // WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0c0c0c] text-white p-3 rounded-full hover:bg-[#008080] transition-colors"
              >
                <Phone size={12} /> {/* WhatsApp icon */}
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-3">
            <div className="flex items-start">
              <MapPin className="text-[#000000] mr-3 mt-2 flex-shrink-0" />
              <p className="text-[#1e1e1e] mt-2">
                12/53, Town Council Road, Elpitiya, Sri Lanka
              </p>
            </div>

            <div className="flex items-start">
              <MapPin className="text-[#000000] mr-3 mt-1 flex-shrink-0" />
              <p className="text-[#1e1e1e]">
                158/C/21, 1st Lane, Rajasinghe Mawatha, Imbulgoda, Sri Lanka
              </p>
            </div>

            <div className="flex items-center">
              <Mail className="text-[#000000] mr-3 flex-shrink-0" />
              <a
                href="mailto:info@dinethaastrology.com"
                className="text-[#1e1e1e] hover:text-[#008080]"
              >
                dinethaastrology@gmail.com
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <Phone className="text-[#000000] mr-3 flex-shrink-0" />
                <a href="tel:+940771325070" className="text-[#1e1e1e] hover:text-[#008080]">
                  +94 (0) 77 132 5070
                </a>
              </div>
              <div className="flex items-center ml-7">
                <a href="tel:+940701325070" className="text-[#1e1e1e] hover:text-[#008080]">
                  +94 (0) 70 132 5070
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#000033] my-1"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#231f20] mb-4 md:mb-0">
            © 2025 NextGen CodeX. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-[#231f20] hover:text-[#008080]">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-[#231f20] hover:text-[#008080]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}