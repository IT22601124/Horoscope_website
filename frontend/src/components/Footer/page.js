import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import React from "react"

export default function AdvisorsFooter() {
  return (
    <footer className="bg-white py-8 px-4 md:px-8 lg:px-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <div className="absolute inset-0 bg-[#008080] rounded-full opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#000000] rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-6 h-3 bg-[#f5f7f8]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-5 h-2 bg-yellow-400"></div>
              </div>
              <h2 className="text-[#000000] text-2xl font-bold">Dinetha Astrology</h2>
            </div>

            <h1 className="text-3xl font-bold text-[#000000] mb-2">SCHEDULE A CONSULTATION TODAY!</h1>
            <p className="text-[#1e1e1e] mb-6">
              High level experience in web design and development knowledge, producing quality work.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0c0c0c] text-white p-3 rounded-full hover:bg-[#008080] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-[#0c0c0c] text-white p-3 rounded-full hover:bg-[#008080] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-[#0c0c0c] text-white p-3 rounded-full hover:bg-[#008080] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="text-[#000000] mr-3 mt-1 flex-shrink-0" />
              <p className="text-[#1e1e1e]">
                12/53,
                <br />
                Town Council Road,Elpitiya
                <br />
              </p>
            </div>

            <div className="flex items-start">
              <MapPin className="text-[#000000] mr-3 mt-1 flex-shrink-0" />
              <p className="text-[#1e1e1e]">
                158/C/21,
                <br />
                1st Lane,Rajasinghe Mawatha ,Imbulgoda.
                <br />
              </p>
            </div>

            <div className="flex items-center">
              <Mail className="text-[#000000] mr-3 flex-shrink-0" />
              <a href="mailto:XXX@gmail.com" className="text-[#1e1e1e] hover:text-[#008080]">
                XXX@gmail.com
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <Phone className="text-[#000000] mr-3 flex-shrink-0" />
                <a href="tel:+94077-132-5070" className="text-[#1e1e1e] hover:text-[#008080]">
                  +94(0)77-132-5070
                </a>
              </div>
              <div className="flex items-center ml-7">
                <a href="tel:+94070-132-5070" className="text-[#1e1e1e] hover:text-[#008080]">
                  +94(0)70-132-5070
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#231f20] mb-4 md:mb-0">Zenit IT © All rights reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#231f20] hover:text-[#008080]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[#231f20] hover:text-[#008080]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}