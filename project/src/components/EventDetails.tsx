import { Calendar, MapPin, Route, Ruler, Users, IndianRupee, Clock } from 'lucide-react';

export default function EventDetails() {
  const details = [
    {
      icon: Calendar,
      titleMr: 'दिनांक',
      titleEn: 'Date',
      contentMr: '२५ डिसेंबर २०२५',
      contentEn: 'December 25, 2025',
      color: '#D84315',
    },
    {
      icon: Clock,
      titleMr: 'वेळ',
      titleEn: 'Time',
      contentMr: 'सकाळी ६:०० ते ९:००',
      contentEn: '6:00 AM - 9:00 AM IST',
      color: '#1565C0',
    },
    {
      icon: MapPin,
      titleMr: 'ठिकाण',
      titleEn: 'Location',
      contentMr: 'शिवराज ढाबा, बहादुरशेख नाका',
      contentEn: 'Shivraj Dhaba, Bahadur Sheikh Naka',
      subtext: 'Chiplun, Maharashtra',
      color: '#2E7D32',
    },
    {
      icon: Route,
      titleMr: 'मार्ग',
      titleEn: 'Route',
      contentMr: 'बहादुरशेख नाका → अलोरे → बहादुरशेख नाका',
      contentEn: 'Bahadur Sheikh Naka → Alore → Bahadur Sheikh Naka',
      color: '#D84315',
    },
    {
      icon: Ruler,
      titleMr: 'अंतर',
      titleEn: 'Distance',
      contentMr: 'अंदाजे २५ किलोमीटर',
      contentEn: 'Approximately 25 kilometers',
      color: '#1565C0',
    },
    {
      icon: Users,
      titleMr: 'वयोगट',
      titleEn: 'Age Group',
      contentMr: 'सर्व वयोगटातील स्त्री-पुरुष',
      contentEn: 'Open to all ages, men and women',
      color: '#2E7D32',
    },
    {
      icon: IndianRupee,
      titleMr: 'फी',
      titleEn: 'Registration Fee',
      contentMr: '₹३००/-',
      contentEn: '₹300/-',
      subtext: 'Registration closes: December 20, 2025',
      color: '#D84315',
    },
  ];

  return (
    <section id="event-details" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            इव्हेंट तपशील | Event Details
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D84315] to-[#1565C0] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4"
                style={{ borderColor: detail.color }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${detail.color}15` }}
                >
                  <Icon size={24} style={{ color: detail.color }} strokeWidth={2.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{detail.titleMr}</h3>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">{detail.titleEn}</h4>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">{detail.contentMr}</p>
                <p className="text-xs sm:text-sm text-gray-600">{detail.contentEn}</p>
                {detail.subtext && (
                  <p className="text-xs text-gray-500 mt-1 italic">{detail.subtext}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-[#D84315] to-[#F4511E] rounded-xl p-4 sm:p-6 text-center text-white shadow-xl">
          <p className="text-base sm:text-lg md:text-xl font-bold mb-1">महत्वाची सूचना | Important Notice</p>
          <p className="text-sm sm:text-base">
            नोंदणी २० डिसेंबर २०२५ पर्यंत बंद होईल | Registration closes on December 20, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
