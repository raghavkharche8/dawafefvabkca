import { Droplet, Candy, Banana, Users, Heart, Medal, Coffee } from 'lucide-react';

export default function WhatsIncluded() {
  const items = [
    {
      icon: Droplet,
      titleMr: 'पाणी',
      titleEn: 'Water',
      subtitle: 'Bisleri',
      color: '#1565C0',
    },
    {
      icon: Candy,
      titleMr: 'चिक्की',
      titleEn: 'Chikki',
      subtitle: 'Traditional Sweet',
      color: '#D84315',
    },
    {
      icon: Banana,
      titleMr: 'केळी',
      titleEn: 'Bananas',
      subtitle: 'Fresh Fruit',
      color: '#2E7D32',
    },
    {
      icon: Users,
      titleMr: 'राईड सहकार्य',
      titleEn: 'Volunteer Support',
      subtitle: 'Throughout Route',
      color: '#1565C0',
    },
    {
      icon: Heart,
      titleMr: 'प्राथमिक आरोग्य सुविधा',
      titleEn: 'First Aid',
      subtitle: 'Medical Support',
      color: '#D84315',
    },
    {
      icon: Medal,
      titleMr: 'फिनिशर मेडल',
      titleEn: 'Finisher Medal',
      subtitle: 'For All Participants',
      color: '#2E7D32',
    },
    {
      icon: Coffee,
      titleMr: 'नाष्टा आणि चहा',
      titleEn: 'Breakfast & Tea',
      subtitle: 'Post-Ride Refreshments',
      color: '#1565C0',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            काय समाविष्ट आहे? | What's Included?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D84315] to-[#1565C0] mx-auto rounded-full mb-3"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            आपल्या नोंदणी फीमध्ये या सर्व सुविधा समाविष्ट आहेत
            <br />
            All these benefits are included in your registration fee
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 text-center"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon size={28} style={{ color: item.color }} strokeWidth={2.5} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">{item.titleMr}</h3>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">{item.titleEn}</h4>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-[#2E7D32] to-[#388E3C] rounded-xl p-4 sm:p-6 text-center text-white shadow-xl">
          <p className="text-base sm:text-lg md:text-xl font-bold mb-1">प्रत्येक सहभागीला मेडल मिळेल!</p>
          <p className="text-sm sm:text-base md:text-lg">Every Participant Gets a Finisher Medal!</p>
        </div>
      </div>
    </section>
  );
}
