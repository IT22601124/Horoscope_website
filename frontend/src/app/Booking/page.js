import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

export default function BookingForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nameCat = queryParams.get("name");

  // Ensure the status field is properly initialized
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    birthTime: '',
    birthPlace: '',
    phoneNumber: '',
    email: '',
    address: '',
    country: '',
    bookingDate: '',
    bookingTime: '',
    description: '',
    nameCat: nameCat || '', // Default to an empty string if nameCat is null
    //status: 'pending', // Initialize status with a default value
  });

  const [bookedDates, setBookedDates] = useState([]); // State to store booked dates and times

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const localDate = new Date(formData.bookingDate);
      localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset()); // Adjust for time zone
  
      const formattedData = {
        ...formData,
        bookingDate: localDate.toISOString().split('T')[0], // Convert to YYYY-MM-DD
      };
  
      const response = await fetch('http://localhost:5001/api/user/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(`User added successfully with ID: ${data.id}`);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the user.');
    }
  };
  

  // Fetch booked dates and times from the backend
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/user/get-users');
        if (response.ok) {
          const users = await response.json();
          const dates = users.map((user) => ({
            date: new Date(user.bookingDate),
            time: user.bookingTime,
            status: user.status, // Include the status field
          }));
          setBookedDates(dates);
        } else {
          console.error('Failed to fetch booked dates');
        }
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    };

    fetchBookedDates();
  }, []);

  // Check if a date is booked with status 'accepted'
  const isDateBooked = (date) => {
    return bookedDates.some(
      (booked) =>
        booked.date.toDateString() === date.toDateString() &&
        booked.status === 'accepted' // Only consider dates with 'accepted' status
    );
  };

  // Check if a time is booked with status 'accepted'
  const isTimeBooked = (date, time) => {
    return bookedDates.some(
      (booked) =>
        booked.date.toDateString() === date.toDateString() &&
        booked.time === time &&
        booked.status === 'accepted' // Only consider times with 'accepted' status
    );
  };

  const tileClassName = ({ date, view }) => {
    // Highlight booked dates in red
    if (view === 'month' && isDateBooked(date)) {
      return 'booked-date'; // Apply a custom CSS class for booked dates
    }
    return null;
  };

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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">නම</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  placeholder="ඔබේ නම"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">උපන් දිනය</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">උපන් වේලාව</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">උපන් ස්ථානය</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  placeholder="උපන් ස්ථානය"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">දුරකථන අංකය</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  type="tel"
                  placeholder="දුරකථන අංකය"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">විද්‍යුත් තැපෑල</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  type="email"
                  placeholder="විද්‍යුත් තැපෑල"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">ලිපිනය</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  placeholder="ලිපිනය"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label class="block text-gray-800 mb-2">රට</label>
                <Input
                  className="w-full bg-white border-gray-300 text-gray-800"
                  placeholder="රට"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Booking Date and Time Section */}
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-2">Booking Date</label>
                  <div className="bg-white rounded-md p-2">
                    <Calendar
                      onChange={(date) => setFormData({ ...formData, bookingDate: date })}
                      value={formData.bookingDate}
                      tileClassName={tileClassName}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">Booking Time</label>
                  <select
                    className="w-full bg-white border-gray-300 text-gray-800 rounded-md p-2"
                    name="bookingTime"
                    value={formData.bookingTime}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option
                        key={index}
                        value={time}
                        className={isTimeBooked(new Date(formData.bookingDate), time) ? 'booked-time' : ''}
                        disabled={isTimeBooked(new Date(formData.bookingDate), time)}
                      >
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
                name="description"
                value={formData.description}
                onChange={handleChange}
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
              onChange={(date) => setFormData({ ...formData, bookingDate: date })} // Updates the selected date
              value={formData.bookingDate}
              tileClassName={tileClassName}
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

// Add the custom CSS class for booked dates
const style = document.createElement('style');
style.innerHTML = `
.booked-date {
  background-color: red !important;
  color: white !important;
  
}
.booked-time {
  color: white !important;
  font-weight: bold;
}
`;
document.head.appendChild(style);