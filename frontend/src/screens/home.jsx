"use client"

import { useState, useEffect } from "react"
import { Bell, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-white px-4 sm:px-6">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl min-h-[66vh] rounded-3xl overflow-hidden flex flex-col md:flex-row mx-auto mt-auto mb-8 bg-white bg-opacity-90 relative z-10"
      >
        {/* Left side - Image with overlay text */}
        <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 text-white">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold"
            ></motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-lg"
            ></motion.p>
          </div>
          {/* Adjusted image container */}
          <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-lg flex items-center justify-center mt-8 sm:mt-12">
            <img src="/images/123.png" alt="Astrology chart" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right side - Welcome text */}
        <div className="w-full md:w-1/2 p-4 sm:p-15 flex flex-col justify-center pl-4 sm:pl-10">
          {/* Adjusted height and added negative margin to move text up */}
          <div className="h-24 sm:h-36 flex items-center justify-center">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text pb-6 sm:pb-5 text-transparent text-center"
            >
               <div style={{ paddingBottom: "10px" }}>
                  සියලුම ජෝතීශ්‍ය කටයුතු
              </div>
              <div>විශ්මිත පලාපල....</div>

            </motion.h2>
          </div>
          {/* Centered text below the above text */}
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 sm:mb-6 text-sm sm:text-lg font-bold text-gray-800 text-center"
          >
            ජෝතීශ්‍ය විද්‍යාශූරී - දිල්රුක්ශි ලියනගේ
          </motion.p>
          <motion.a
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="/book"
            className="block w-full py-2 sm:py-3 px-4 sm:px-6 text-center rounded-lg transition-colors"
          >
            <button className="bg-[#FFD700] hover:bg-amber-600 text-amber-900 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ml-0">
              Book an Appointment
            </button>
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl min-h-[50vh] bg-white rounded-3xl p-4 sm:p-8 mt-8 mb-8 mx-auto relative z-10"
      >
        <div className="text-center mb-4 sm:mb-8">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold text-black"
          >
            අපගේ සේවාවන්
          </motion.h2>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-32">
          {/* Left side - Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <div className="w-64 h-64 sm:w-96 sm:h-96 overflow-hidden">
              <img src="/images/Uni.png" alt="Astrology services" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right side - Services */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            {[
              { name: "හඳහන් සෑදීම", icon: "🌙" },
              { name: "පලාපල කථනය", icon: "⭐" },
              { name: "විවාහ පොරොන්දම්", icon: "💍" },
              { name: "සෙත්කවි", icon: "📜" },
              { name: "සෙත්පූජා", icon: "🕯️" },
              { name: "මල්වර නැකත්", icon: "🌸" },
              { name: "විවාහ නැකත්", icon: "👰" },
              { name: "නිවාස නැකත්", icon: "🏠" },
              { name: "බහිරව පූජාවන්", icon: "🔮" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-amber-500 rounded-full p-2 mb-2 hover:bg-amber-600 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center mr-2 sm:mr-3">
                    <span className="text-amber-600 text-sm sm:text-lg">{service.icon}</span>
                  </div>
                  <h3 className="text-white font-medium text-sm sm:text-lg">{service.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Notice Board Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl min-h-[50vh] bg-indigo-950 rounded-3xl p-4 sm:p-8 shadow-lg mt-8 mx-auto relative z-10"
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-3xl font-bold text-[#FFD700] text-center w-full">Notice Board</h2>
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: "Important Announcement", color: "text-blue-600", date: "2023-10-01" },
            { title: "Upcoming Event", color: "text-purple-600", date: "2023-10-05" },
            { title: "Maintenance Schedule", color: "text-orange-600", date: "2023-10-10" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow h-40 sm:h-48 flex flex-col justify-between"
            >
              <div className={`flex items-center mb-2 sm:mb-4 ${item.color}`}>
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <h3 className="text-sm sm:text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}