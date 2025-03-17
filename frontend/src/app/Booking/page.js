import React, { useState } from 'react';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

export default function AstrologyForm() {
  const [date, setDate] = useState(new Date()); // State to handle the selected date

  const eventDates = [
    { event: "Consultation", date: new Date(2023, 2, 20) }, // Mar 20
    { event: "Full Moon Reading", date: new Date(2023, 2, 25) }, // Mar 25
    { event: "Astrology Class", date: new Date(2023, 2, 28) }, // Mar 28
  ];

  // Sort the eventDates in ascending order by the event date
  eventDates.sort((a, b) => a.date - b.date);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-yellow-600/90 via-yellow-500/80 to-yellow-600/90 bg-fixed bg-blend-overlay bg-cover"
      style={{
        backgroundImage: "url('/images/img9.png')", // Add your specific image src path here
      }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-center text-4xl mb-8 text-black font-bold">ඔබගේ වෙලාව වෙන්කරවා ගන්න.</h1>

        {/* Two-column layout for form and calendar */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Card */}
          <div className="bg-[#03033B] bg-opacity-95 rounded-3xl p-8 shadow-2xl lg:w-3/4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">නම</label>
                  <Input className="w-full bg-white/10 border-white/20 text-white" placeholder="ඔබේ නම" />
                </div>
                <div>
                  <label className="block text-white mb-2">උපන් දිනය</label>
                  <Input className="w-full bg-white/10 border-white/20 text-white" type="date" />
                </div>
                <div>
                  <label className="block text-white mb-2">උපන් වේලාව</label>
                  <Input className="w-full bg-white/10 border-white/20 text-white" type="time" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">උපන් ස්ථානය</label>
                  <Input className="w-full bg-white/10 border-white/20 text-white" placeholder="උපන් ස්ථානය" />
                </div>
                <div>
                  <label className="block text-white mb-2">දුරකථන අංකය</label>
                  <Input
                    className="w-full bg-white/10 border-white/20 text-white"
                    type="tel"
                    placeholder="දුරකථන අංකය"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">විද්‍යුත් තැපෑල</label>
                  <Input
                    className="w-full bg-white/10 border-white/20 text-white"
                    type="email"
                    placeholder="විද්‍යුත් තැපෑල"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-2">විස්තර</label>
                <textarea
                  className="w-full bg-white/10 border-white/20 text-white rounded-md h-24 p-2"
                  placeholder="අමතර විස්තර"
                />
              </div>

              <div className="md:col-span-2 flex justify-center">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-2 rounded-full">
                  Book
                </Button>
              </div>
            </form>
          </div>

          {/* New Calendar Card */}
          <div className="bg-[#03033B] bg-opacity-95 rounded-3xl p-6 shadow-2xl lg:w-1/4">
            <h2 className="text-white text-xl font-semibold mb-4 text-center">Calendar</h2>
            
            <div className="flex justify-center mb-6">
              <Calendar
                onChange={setDate} // Updates the selected date
                value={date}
                tileClassName={({ date, view }) => {
                  // Highlight event dates
                  const eventDate = eventDates.find(
                    (event) => event.date.toDateString() === date.toDateString()
                  );
                  return eventDate ? 'bg-yellow-400 text-navy-900' : '';
                }}
              />
            </div>

            {/* Upcoming Events Section */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h3 className="text-yellow-400 font-medium mb-2">Upcoming Events</h3>
              <ul className="space-y-2 text-white">
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
    </div>
  );
}
