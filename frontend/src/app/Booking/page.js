import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Calendar from '../../components/ui/calendar';

export default function AstrologyForm() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-yellow-600/90 via-yellow-500/80 to-yellow-600/90 bg-fixed bg-blend-overlay bg-cover"
      style={{
        backgroundImage: "url('/images/img9.png')", // Add your specific image src path here
      }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-center text-3xl mb-8 text-black font-bold">ඔබට මෙලාට පෙන්කරරුන්න!</h1>

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

          {/* Calendar Card */}
          <div className="bg-[#03033B] bg-opacity-95 rounded-3xl p-6 shadow-2xl lg:w-1/4">
            <h2 className="text-white text-xl font-semibold mb-4 text-center">Calendar</h2>
            <div className="flex justify-center">
              <Calendar
                className="bg-navy-900 text-white rounded-lg"
                classNames={{
                  day_selected: "bg-yellow-400 text-navy-900 hover:bg-yellow-500 hover:text-navy-900",
                  day_today: "bg-white/20 text-white",
                  day: "text-white hover:bg-white/20",
                  head_cell: "text-yellow-400",
                  nav_button: "text-white hover:bg-white/20",
                  nav_button_previous: "text-white",
                  nav_button_next: "text-white",
                  caption: "text-white",
                }}
              />
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h3 className="text-yellow-400 font-medium mb-2">Upcoming Events</h3>
              <ul className="space-y-2 text-white">
                <li className="flex justify-between">
                  <span>Consultation</span>
                  <span>Mar 20</span>
                </li>
                <li className="flex justify-between">
                  <span>Full Moon Reading</span>
                  <span>Mar 25</span>
                </li>
                <li className="flex justify-between">
                  <span>Astrology Class</span>
                  <span>Mar 28</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
