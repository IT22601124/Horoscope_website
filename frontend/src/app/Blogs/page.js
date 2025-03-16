"use client";

import { useState, useEffect } from "react";
import { Clock, Star, ArrowRight } from "lucide-react";

export default function Blog() {
  const [isHovered, setIsHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Cosmic Timepiece",
      description:
        "Discover the secrets of celestial mechanics with our premium astrological timepieces.",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: 2,
      title: "Astral Navigation",
      description:
        "Let the stars guide your journey through life with our expert astrological readings.",
        icon: <Clock className="h-4 w-4" />,
    },
    {
      id: 3,
      title: "Zodiac Mastery",
      description:
        "Unlock your full potential by understanding the cosmic forces that shape your destiny.",
      icon: <Clock className="h-4 w-4" />,
    },
  ];

  // Auto-rotate featured card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="w-full max-w-6xl mx-auto p-6">
        {/* Advertisement Banner */}
        <div className="relative mb-10">
          <div className="bg-gradient-to-r from-amber-100 to-amber-300 rounded-full py-6 text-center shadow-md">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
              Advertisement
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Featured Card Indicator */}
        <div className="flex justify-center mb-12 gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? "bg-amber-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`View card ${index + 1}`}
            />
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`transition-all duration-500 ${
                activeIndex === index ? "md:scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setIsHovered(card.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div
                className={`overflow-hidden border-0 rounded-lg bg-white shadow-lg transform transition-all duration-300 ${
                  isHovered === card.id || activeIndex === index
                    ? "scale-105 shadow-2xl -translate-y-2"
                    : "scale-100 shadow-md"
                }`}
              >
                <div className="relative h-64 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <button className="bg-white/90 hover:bg-white border border-gray-200 rounded-md px-4 py-2 flex items-center text-sm font-medium text-gray-800 hover:text-amber-700 transition-all">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  <img
                    src="/placeholder.svg"
                    alt="Golden clock"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full z-20 shadow-sm">
                    {card.icon}
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-amber-500 mr-3 rounded-full"></div>
                    <h3 className="font-semibold text-xl text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">
                      
                    </span>
                    <button className="text-amber-700 hover:text-amber-900 text-sm font-medium flex items-center">
                    
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}