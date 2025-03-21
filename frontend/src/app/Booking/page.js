import React, { useState } from 'react';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

export default function AstrologyForm() {
  const [date, setDate] = useState(new Date()); // State to handle the selected date
  const [bookingDate, setBookingDate] = useState(new Date()); // State for booking date
  const [bookingTime, setBookingTime] = useState(''); // State for booking time

  const eventDates = [
    { event: "Consultation", date: new Date(2023, 2, 20) }, // Mar 20
    { event: "Full Moon Reading", date: new Date(2023, 2, 25) }, // Mar 25
    { event: "Astrology Class", date: new Date(2023, 2, 28) }, // Mar 28
  ];

  // Sort the eventDates in ascending order by the event date
  eventDates.sort((a, b) => a.date - b.date);

  // Time slots for booking
  const timeSlots = [
    '3:00 PM - 3:30 PM',
    '3:30 PM - 4:00 PM',
    '4:00 PM - 4:30 PM',
    '4:30 PM - 5:00 PM',
    '5:00 PM - 5:30 PM',
    '7:00 PM - 8:00 PM (VIP)',
    '8:00 PM - 9:00 PM (VIP)',
    '9:00 PM - 10:00 PM (VIP)',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative mb-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-amber-100 to-amber-300 rounded-full py-4 text-center shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">
            ඔබගේ වෙලාව වෙන්කරවා ගන්න
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Two-column layout for form and calendar */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-6xl mx-auto">
        {/* Form Card */}
        <div className="bg-[#F7E0A3] rounded-3xl p-6 shadow-2xl lg:w-3/4">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">නම</label>
                <Input className="w-full bg-white border-gray-300 text-gray-800" placeholder="ඔබේ නම" />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">උපන් දිනය</label>
                <Input className="w-full bg-white border-gray-300 text-gray-800" type="date" />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">උපන් වේලාව</label>
                <Input className="w-full bg-white border-gray-300 text-gray-800" type="time" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">උපන් ස්ථානය</label>
                <Input className="w-full bg-white border-gray-300 text-gray-800" placeholder="උපන් ස්ථානය" />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">දුරකථන අංකය</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  type="tel"
                  placeholder="දුරකථන අංකය"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">විද්‍යුත් තැපෑල</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  type="email"
                  placeholder="විද්‍යුත් තැපෑල"
                />
              </div>
            </div>

            {/* Address Section - Only ලිපිනය and රට */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">ලිපිනය</label>
                <Input className="w-full bg-white border-gray-300 text-gray-800" placeholder="ලිපිනය" />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">රට</label>
                <Input className="w-full bg-white border-gray-300 text-gray-800" placeholder="රට" />
              </div>
            </div>

            {/* Booking Date and Time Section */}
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-2">Booking Date</label>
                  <div className="bg-white rounded-md p-2">
                    <Calendar
                      onChange={setBookingDate}
                      value={bookingDate}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">Booking Time</label>
                  <select
                    className="w-full bg-white border-gray-300 text-gray-800 rounded-md p-2"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                  >
                    <option value="" disabled>Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 mb-2">විස්තර</label>
              <textarea
                className="w-full bg-white border-gray-300 text-gray-800 rounded-md h-24 p-2"
                placeholder="අමතර විස්තර"
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <Button className="bg-[#03033B] hover:bg-[#03033B]/90 text-white font-semibold px-6 py-2 rounded-full">
                Book
              </Button>
            </div>
          </form>
        </div>

        {/* Calendar Card */}
        <div className="bg-[#F7E0A3] rounded-3xl p-6 shadow-2xl lg:w-2/5">
          <h2 className="text-gray-800 text-lg font-semibold mb-4 text-center">Calendar</h2>

          <div className="flex justify-center mb-4">
            <Calendar
              onChange={setDate} // Updates the selected date
              value={date}
              tileClassName={({ date, view }) => {
                // Highlight event dates
                const eventDate = eventDates.find(
                  (event) => event.date.toDateString() === date.toDateString()
                );
                return eventDate ? 'bg-[#03033B] text-white' : '';
              }}
            />
          </div>

          {/* Upcoming Events Section */}
          <div className="mt-12 p-4 bg-white rounded-lg">
            <h3 className="text-[#03033B] font-medium mb-2">Upcoming Events</h3>
            <ul className="space-y-2 text-gray-800">
              {eventDates.map((event, index) => (
                <li key={index} className="flex justify-between">
                  <span>{event.event}</span>
                  <span>{event.date.toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}