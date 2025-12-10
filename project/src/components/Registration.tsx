import { useEffect } from 'react';
import { Ticket, Clock, Users, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    popup?: (eventCode: string) => void;
  }
}

export default function Registration() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleRegister = () => {
    if (typeof window.popup === 'function') {
      window.popup('chiplun-cyclothon-2025-4rd-edition-431030');
    } else {
      console.error('Townscript widget not loaded');
      window.open('https://www.townscript.com/e/chiplun-cyclothon-2025-4rd-edition-431030', '_blank');
    }
  };

  const benefits = [
    {
      icon: CheckCircle,
      text: 'फिनिशर मेडल | Finisher Medal',
      color: '#2E7D32',
    },
    {
      icon: CheckCircle,
      text: 'नाष्टा आणि चहा | Breakfast & Tea',
      color: '#2E7D32',
    },
    {
      icon: CheckCircle,
      text: 'राईड सपोर्ट | Ride Support',
      color: '#2E7D32',
    },
    {
      icon: CheckCircle,
      text: 'प्राथमिक वैद्यकीय | First Aid',
      color: '#2E7D32',
    },
  ];

  return (
    <section id="registration" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            रजिस्टर करा आता! | Register Now!
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D84315] to-[#1565C0] mx-auto rounded-full mb-3"></div>
          <p className="text-base sm:text-lg text-gray-600">
            सीमित जागा उपलब्ध आहेत | Limited Spots Available!
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#D84315] to-[#F4511E] rounded-2xl shadow-xl overflow-hidden border-2 border-white">
          <div className="p-6 sm:p-8 text-white text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <Ticket size={40} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black mb-3">₹300/-</h3>
              <p className="text-lg sm:text-xl font-bold mb-1">नोंदणी फी | Registration Fee</p>
              <p className="text-sm sm:text-base opacity-90">प्रति सहभागी | Per Participant</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Icon size={20} className="text-white flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm font-semibold">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-white text-[#D84315] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl mb-5"
            >
              आता नोंदणी करा | Register Now
            </button>

            <noscript id="tsNoJsMsg">
              <p className="text-white/90">Javascript on your browser is not enabled.</p>
            </noscript>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Clock size={24} className="mx-auto mb-1 text-white" />
                <p className="text-xs font-semibold">नोंदणी बंद होते | Closes On</p>
                <p className="text-base font-black">20 Dec 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Users size={24} className="mx-auto mb-1 text-white" />
                <p className="text-xs font-semibold">सर्व वयोगटांसाठी | For All Ages</p>
                <p className="text-base font-black">Open to All</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 sm:p-6 text-center">
          <p className="text-base sm:text-lg font-bold text-yellow-900 mb-1">
            लवकर नोंदणी करा! | Register Early!
          </p>
          <p className="text-xs sm:text-sm text-yellow-800">
            नोंदणी २० डिसेंबर २०२५ रोजी बंद होईल | Registration closes on December 20, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
