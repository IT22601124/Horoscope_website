"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function BookNowPage() {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleDescription = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id)
  }

  const categories = [
    {
      id: 1,
      name: "හඳහන් සෑදීම ",
      description: "අලුත උපන් දරුවන් හේ සහ සියළුම අයගේ දේශීය  විදේශීය කේන්ද්‍ර සටහන්  සෑදීම .",
    },
    {
      id: 2,
      name: "පලාපල කථනය",
      description: "ජීවිතයේ අතීතය වර්තමානය අනාගතය  පිළිබඳව මෙන්ම නිවසේ  භූමියේ  ඇති සියලුම  ශුභ අශුභ විස්තර.",
    },
    {
      id: 3,
      name: "විවාහ පොරොන්දම්",
      description: "අට පොරොන්දම් දස පොරොන්දම්  විසි පොරොන්දම් සහ  කේන්ද්‍ර දෙකෙහි ඇති වෙනත් ගැලපීම්.",
    },
    {
      id: 4,
      name: "ෙත්කවි",
      description:
        "ජන්මපත්‍රය පරීක්ෂා කර පවතින ලෙඩරෝග මෙන්ම අද්‍යාපන  කටයුතු ,රැකියා,විවාහ ගැටලු ,ප්‍රමාද වීම ,දරුපල ප්‍රමාද වීම,ව්‍යාපාර පාඩු/අලාභ වීම්,නඩුහබ දිනීමට සෙත්කවි රචනය,සුගායනය.",
    },
    {
      id: 5,
      name: "ෙත් පූජා",
      description: "සියළුම ග්‍රහ අපල වලට දේව පූජාවන්.",
    },
    {
      id: 6,
      name: "මල්වර  නැකත්",
      description: "දරුවාගේ මල්වර දිනය  නැකත තිථිය හෝරාව සමගින්  ඇයගේ  ඉදිරි අනාගතය සියළුම විස්තර සමග නැකත් චාරිත්‍ර .",
    },
    {
      id: 7,
      name: "විවාහ නැකත් ",
      description: "නැකත් පත්‍රය රැගෙන යාමේ සිට දෙවනි දින දක්වා සියළුම ශුභ නැකත් හෝරා පිළිවෙලට .",
    },
    {
      id: 8,
      name: "නිවාස නැකත්",
      description: "ගෘහ මූලිකගේ හෝ පවුලේ සියළුම  දෙනාගේ කේන්ද්‍ර සටහන් වලට  අනුව එදිනට හිමි සියළුම ශුභ මුහුර්ත.",
    },
    {
      id: 9,
      name: "බහිරව පූජාවන්",
      description: "ඉඩකඩම්,නිවාස ව්‍යාපාර ස්ථාන වල පවතින නොයෙකුත් දෝෂ ,බන්ධන ඉවත්  කර දියුණුවට කටයුතු කිරීම.",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl p-8">
        <div className="relative mb-10">
          <div className="bg-gradient-to-r from-amber-100 to-amber-300 rounded-full py-6 text-center shadow-md">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">අපගේ සේවාවන්</h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Category Section with Border */}
        <div className="bg-[#F7E0A3] border-4 border-[#F7E0A3] rounded-lg p-8" style={{ backgroundColor: "#F7E0A3" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* First column */}
            <div className="space-y-12">
              {categories.slice(0, 5).map((category) => (
                <div key={category.id} className="transform transition-all duration-300 hover:scale-102">
                  <button
                    className="w-full py-4 px-6 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-between shadow-lg"
                    onClick={() => toggleDescription(category.id)}
                  >
                    <span className="text-lg font-medium">{category.name}</span>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                  <div
                    className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedCategory === category.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 bg-white rounded-lg shadow-md">
                      <p className="text-gray-700 leading-relaxed mb-4">{category.description}</p>
                      <a
                        href="/booking"
                        className="block w-full py-3 px-6 bg-blue-900 text-white text-center rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Go to Booking Page
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second column */}
            <div className="space-y-12">
              {categories.slice(5, 9).map((category) => (
                <div key={category.id} className="transform transition-all duration-300 hover:scale-102">
                  <button
                    className="w-full py-4 px-6 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-between shadow-lg"
                    onClick={() => toggleDescription(category.id)}
                  >
                    <span className="text-lg font-medium">{category.name}</span>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                  <div
                    className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedCategory === category.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 bg-white rounded-lg shadow-md">
                      <p className="text-gray-700 leading-relaxed mb-4">{category.description}</p>
                      <a
                        href="/booking"
                        className="block w-full py-3 px-6 bg-blue-900 text-white text-center rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Go to Booking Page
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

